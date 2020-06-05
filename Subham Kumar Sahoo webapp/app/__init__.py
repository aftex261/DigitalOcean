from flask_ngrok import run_with_ngrok
from flask import Flask
from config import Config

app = Flask(__name__, static_url_path='/static')
app.config.from_object(Config)

from app import routes
