from enum import auto
from prefect import flow, task, get_run_logger
from prefect.deployments import Deployment
from prefect.orion.schemas.schedules import (
    CronSchedule,
    IntervalSchedule,
    RRuleSchedule,
)
from datetime import timedelta
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os
import os.path
import time

# from pyhunter import PyHunter

import datetime as dt
import multiprocessing
from multiprocessing import Pool
import numpy as np
import tqdm



from verify_email import verify_email_async, verify_email
import nest_asyncio
import asyncio

nest_asyncio.apply()

# import ray

# ray.init()



#database

from sqlalchemy import create_engine
import urllib
import pandas as pd


class EmailBlaster:
    """
    __init__: function to import and export CSV files.
    Args:
        self (object): class object
        relevant_ids(object): dict
        database (object): Postgres object
        producer (object): KafkaProducer object
        activities_manager(object): ActivitiesManager object
        verbose (bool): shows more information about the event
    Returns:
        none
    """

    def __init__(
        self,
        names,
        email_recipient,
        email_subject,
        number_contacts,
        # date,
        html, 
        # cron,
        verbose: bool = False,
    ) -> None:
        self.names = names
        self.email_recipient = email_recipient
        self.email_subject = email_subject
        self.number_contacts = number_contacts
        self.html = html
        # self.date = date
        self.user_email = "autoservices@paraforge.net"
        self.user_pw = "S3rv1ceC3nt3rpf"
        self.service_account = "autoservices@paraforge.net"
        # self.cron = cron

        if verbose:
            print(f"[ {datetime.now()} ] - EmailSender Initialized ")

    """
    importCsv: get CSV data
    Args:
        self (object): class object
        csvFileContents: str
    Returns:
        CSV data
        """

    UMBER_OF_CONTACTS = 100
    SERVICE_ACCOUNT = "autoservices@paraforge.net"  # PARAFORGE OR KONZORITA SERVICE ACCOUNT
    USER_EMAIL = "autoservices@paraforge.net"  # USER EMAIL TO AUTHORIZE SENDING - MUST BE SAME DOMAIN AND HAVE SERVICE ACCOUNT ACCESS
    USER_PW = "S3rv1ceC3nt3rpf"  # USER PASSWORD FOR EMAIL TO AUTHORIZE SENDING EMAILS
    NEW_CONTACTS_ONLY = 1  # will send emails to only new contacts if 1, else will send to all contacts within limit of NUMBER_OF_CONTACTS
    FORMS = """<html><body>Hey</body></html>"""  # embedded html shoould this method be used, otherwise use string

    def send_email(
        self,
    sender,
    email_recipient,
    email_subject,
    string=None,
    html=FORMS,
    attachment_location=[""],
    ):

    #html=FORMS

    #scheduler

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
            server.login(self.user_email, self.user_pw)
            text = msg.as_string()
            server.sendmail(
                email_sender, email_recipient + ["6654912@bcc.hubspot.com"], text
            )
            print("email sent")
            self.export_status_response = {"status": "success", "status_code": 200}

            server.quit()
        except:
            print("SMPT server connection error")
            self.export_status_response = {"status": "fail", "status_code": 404}
        return True

    def get_accrediated_contacts():
        df2 = """
            select distinct a.email , a.name from contacts_accredited_emails a
        """
        return df2


    # @task(retries=1, retry_delay_seconds=5)
    def automate_email(self):
        # from email_formatter import email_formatter
        # GRAB CONTACTS
        # df2 = get_accrediated_contacts()
        names = self.names 
        emails = self.email_recipient  

        for name, e in zip(names, emails):
            # y= forms.replace('!insertuniqueuser!',name)
            y = self.html

            self.send_email(
                self.service_account,  # sender
                [e],  # email address to send to
                self.email_subject,  # subject line
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


    def run_script(self):
        self.automate_email()
   

    # @flow(name="emailcampaignflow2")
    # def emailcampaignflow2(name: str):
    #     automate_email()
    #     return


    # deployment = Deployment.build_from_flow(
    #    flow=emailcampaignflow2,
    #    name="email-deployment",
    #    version=1,
    #    tags=["emailcampaign"],
    #    schedule=IntervalSchedule(interval=timedelta(minutes=1000))
    # )

    # deployment.apply()

    # deployment = Deployment.build_from_flow(
    # flow=emailcampaignflow2,
    # name="email-deployment",
    # version=1,
    # tags=["emailcampaign"],
    # schedule=CronSchedule(cron=("55 11 2 12 *")
    # )
    # )
    # deployment.apply()

    # contacts = get_accrediated_contacts()

    # print(contacts)

    # emailcampaignflow2("email")
    # engine.dispose()

    