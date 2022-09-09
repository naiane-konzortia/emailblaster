import json
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource
from modules.emailcampaign import EmailBlaster


app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})

class EmailSender(Resource):
    def post(self):
        body_data = request.get_json(force=True)
        print(body_data)
        email_sender = EmailBlaster(body_data['names'], body_data['email_recipient'],body_data['email_subject'],body_data['number_contacts'], body_data['html'] , True)
        print(email_sender)

        export_status_response = email_sender.run_script()

        response = jsonify(export_status_response)

        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
        response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")

        return export_status_response

api.add_resource(EmailSender, "/sendemail")

if __name__ == "__main__":
    app.run(debug=True)