import requests
import json

BASE = "http://127.0.0.1:5000/"


body_data = {"names":["Naiane"],"email_recipient":["naiane.negri@gmail.com"],"email_subject":"teste","number_contacts":1,"html":"""<html><body>Hey</body></html>""",

}
data = json.dumps(body_data)
response = requests.post(BASE + "sendemail", data)


print(response)