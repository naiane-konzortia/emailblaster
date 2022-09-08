from prefect import flow, task, get_run_logger
from prefect.deployments import Deployment
from prefect.orion.schemas.schedules import (
    CronSchedule,
    IntervalSchedule,
    RRuleSchedule,
)
from datetime import timedelta

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os
import os.path
import time
from pyhunter import PyHunter
import datetime as dt
import multiprocessing
from multiprocessing import Pool
import numpy as np
import tqdm

from verify_email import verify_email_async, verify_email
import nest_asyncio
import asyncio

nest_asyncio.apply()


# database
from sqlalchemy import create_engine
import urllib
import modin.pandas as pd

params = urllib.parse.quote_plus(
    r"Driver={ODBC Driver 17 for SQL Server};Server=tcp:paraforge-dev.database.windows.net,1433;Database=business;Uid=PRD_SVC_ACCT@paraforge.net;Pwd=4pps3rv1c34cct!;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;Authentication=ActiveDirectoryPassword"
)

conn = "mssql+pyodbc:///?odbc_connect={}".format(params)
engine = create_engine(conn)

NUMBER_OF_CONTACTS = 100
SERVICE_ACCOUNT = "autoservices@paraforge.net"  # PARAFORGE OR KONZORITA SERVICE ACCOUNT
USER_EMAIL = "autoservices@paraforge.net"  # USER EMAIL TO AUTHORIZE SENDING - MUST BE SAME DOMAIN AND HAVE SERVICE ACCOUNT ACCESS
USER_PW = "S3rv1ceC3nt3rpf"  # USER PASSWORD FOR EMAIL TO AUTHORIZE SENDING EMAILS
NEW_CONTACTS_ONLY = 1  # will send emails to only new contacts if 1, else will send to all contacts within limit of NUMBER_OF_CONTACTS


FORMS = """<html><body>Hey</body></html> """  # embedded html shoould this method be used, otherwise use string


def send_email(
    sender,
    email_recipient,
    email_subject,
    string=None,
    html=None,
    attachment_location=[""],
):
    """sends emails to list of recepients with or w/o attachment, in html/plain text options

    Args:
        email_recipient (list): ['kevin@paraforge.net']
        email_subject (str): 'Hubspot Warning'
        email_sender (str, optional): sending email account. Defaults to 'research@paraforge.net'.
        string (_type_, optional): send email as plain text. Defaults to None.
        html (_type_, optional): send email as html. embedded html needed if not None Defaults to None.
        attachment_location (list, optional): path(s) to file attachements. Defaults to [''].

    Returns:
        True:confirmation
    """
    email_sender = sender
    commaspace = ", "

    msg = MIMEMultipart()
    msg["From"] = email_sender
    msg["To"] = commaspace.join(email_recipient)
    msg["Subject"] = email_subject

    body = MIMEMultipart("alternative")
    if string is not None:
        string = MIMEText(string, "plain")
        body.attach(string)
    if html is not None:
        html = MIMEText(html, "html")
        body.attach(html)

    msg.attach(body)

    if attachment_location != [""]:
        filename = os.path.basename(attachment_location)
        attachment = open(attachment_location, "rb")
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())
        encoders.encode_base64(part)
        part.add_header("Content-Disposition", "attachment; filename= %s" % filename)
        msg.attach(part)
    try:
        server = smtplib.SMTP("smtp.office365.com", 587)
        server.ehlo()
        server.starttls()
        server.login(USER_EMAIL, USER_PW)
        text = msg.as_string()
        server.sendmail(
            email_sender, email_recipient + ["6654912@bcc.hubspot.com"], text
        )
        print("email sent")
        server.quit()
    except:
        print("SMPT server connection error")
    return True


def get_accrediated_contacts():
    df2 = pd.read_sql(
        f"""--get user and email format
        select distinct a.email , a.name from contacts_accredited_emails a
    """,
        engine,
    )
    return df2


@task(retries=1, retry_delay_seconds=5)
def automate_email():
    # from email_formatter import email_formatter
    # GRAB CONTACTS
    df2 = get_accrediated_contacts()
    names = ["Naiane"]  # df2['name']
    emails = ["naiane.negri@investhub.ventures"]  # df2['email']
    for name, e in zip(names, emails):
        # y= forms.replace('!insertuniqueuser!',name)
        y = FORMS

        send_email(
            SERVICE_ACCOUNT,  # sender
            [e],  # email address to send to
            "Quick Research Question",  # subject line
            None,  # if using html embedded in email
            y,  # if using plain text in email
            [""],  # attachments if any
        )
        time.sleep(5)

    date = dt.datetime.now()
    contacts["email_sent"] = 1
    contacts["sent_date"] = date
    contacts["email_valid"] = 1
    contacts["unsubscribed"] = 0
    contacts["email"] = e
    contacts["name"] = name
    logs = pd.read_csv(f"logs.csv")
    logs = logs.append(contacts)
    logs.to_csv(f"logs.csv", index=False)


@flow(name="emailcampaignflow2")
def emailcampaignflow2(name: str):
    automate_email()
    return


# deployment = Deployment.build_from_flow(
#    flow=emailcampaignflow2,
#    name="email-deployment",
#    version=1,
#    tags=["emailcampaign"],
#    schedule=IntervalSchedule(interval=timedelta(minutes=1000))
# )
# deployment.apply()

contacts = get_accrediated_contacts()
print(contacts)

# emailcampaignflow("email")
engine.dispose()
quit()
