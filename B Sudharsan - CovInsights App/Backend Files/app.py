from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import json 
import sqlalchemy
from sqlalchemy import or_,desc
from tables import db,GDPs, Impact, ImpactPredicted

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = '***@gmail.com'  # enter your email he$
app.config['MAIL_DEFAULT_SENDER'] = '***@gmail.com' # enter your ema$
app.config['MAIL_PASSWORD'] = '****' # enter your password here

mail = Mail(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://doadmin:k6hjzqqbj408kaa7@covinsights-database-do-user-7582405-0.a.db.ondigitalocean.com:25060/CovInsights'
db.init_app(app)

@app.route("/",  methods=['GET', 'POST'])
def test():
    return 'true'

@app.route("/getGDPs",  methods=['GET', 'POST'])
def getGDPs():
    result = GDPs.query.all()
    response = []
    for row in result:
        l = []
        l.append(row.Country)
        l.append(row.GDP)
        l.append(row.Code)
        response.append(l)

    response = {
        "data" : response
    }

    return response

@app.route("/getImpact",  methods=['GET', 'POST'])
def getImpact():
    response = { 'status' : True }
    try:
        content = json.loads(request.data)
        country= content['country']

        result = Impact.query.filter_by(Economy=country).all()
        
        values = []
        for row in result:
            if row.Sector == '_All' :
                response['gdp'] = row.GDP
                response['Emp'] = row.Employment
            else:
                values.append(row.GDP)

        response['values'] = values

        currentGDP = GDPs.query.get(country)
        response['currentGDP'] = currentGDP.GDP
        print(response)

    except Exception as e:
        print('Exception:', e.__class__)
        return {
            'status': False,
            'content': 'Unknown error. Please contact the developer.'
        }

    return response

@app.route("/getImpactPredicted",  methods=['GET', 'POST'])
def getImpactPredicted():
    response = { 'status' : True }
    try:
        content = json.loads(request.data)
        country= content['country']

        result = ImpactPredicted.query.filter_by(Economy=country).all()
        
        values = []
        for row in result:
            if row.Sector == '_All' :
                response['gdp'] = row.GDP
                response['Emp'] = row.Employment
            else:
                values.append(row.GDP)

        response['values'] = values

        currentGDP = GDPs.query.get(country)
        response['currentGDP'] = currentGDP.GDP
        print(response)

    except Exception as e:
        print('Exception:', e.__class__)
        return {
            'status': False,
            'content': 'Unknown error. Please contact the developer.'
        }

    return response

@app.route("/subscribe", methods=['GET', 'POST'])
def subscribe():
    content = json.loads(request.data)
    mailID = content['mailid']

    response = {}

    try:
        msg = Message("Your report is here | CovInsights", recipients=[mailID])
        msg.body = "Thank you for using our service!"
        with app.open_resource("../CovInsights Report.pdf") as fp:
            msg.attach("CovInsights Report.pdf", "application/pdf", fp.read())
        mail.send(msg)
    except Exception as e:
        response['status'] = False
        response['error'] = str(e)
        return response

    response['status'] = True

    return response

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)


