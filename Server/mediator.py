#-*- coding: utf-8 -*-
from flask import Flask, request
from flask_cors import CORS
import os, json, requests, base64

app = Flask(__name__)

HOST = 'http://192.168.10.17/api/http.php/tickets.json'

# Cambiar la llave dependiendo de dónde se corra (preguntar a Juan)
HEADERS = {"X-API-Key":"DC0626B2B448D748889A17C90C3E0355"}

# Maneja el pedido OPTIONS de los browsers
@app.after_request
def after_request(response):
    # headers permitidos para la conversación
    response.headers.add('Access-Control-Allow-Headers', '\
        Access-Control-Allow-Methods,\
        Access-Control-Allow-Origin,\
        Content-Type,\
        X-API-Key')
    # orígenes permitidos para CORS
    response.headers.add('Access-Control-Allow-Origin', '*')
    # métodos permitidos
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
    return response

# Expandible a hacer otros chequeos y eventos

@app.route('/send', methods = ['GET','POST'])
def send():
    data = json.loads(request.values["data"])
    files = request.files
    att = []
    for file in files:
        f = files.get(file)
        att.append({
            f.filename : f.content_type + ";base64," + base64.b64encode(f.read()).decode()
        })
    data = {
        "alert": 'true',
        "autorespond": 'false',
        "source": "API",
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
        "subject": data["subject"],
        "message": data["message"],
        "attachments": att
    }
    r = requests.post(HOST, headers = HEADERS, json = data)
    res = r.status_code
    test = r.text
    return str(res) + ' ' + test

if __name__ == "__main__":
  app.run("0.0.0.0")