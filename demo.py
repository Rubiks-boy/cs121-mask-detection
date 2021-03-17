from flask import Flask, request, send_from_directory, Response
from flask_cors import CORS

from datetime import datetime as dt
# from markupsafe import escape
# from werkzeug.utils import secure_filename
# import os.path
import json

app = Flask(__name__)
# TODO: we're allowing access from any origin
# this is like, pretty not so great...
CORS(app)
STATIC = 'flask/static'
UPLOADS = 'flask/uploads'

DEFAULT_RESPONSE = """
    [
    {
        "top": "14",
        "bottom": "71",
        "left": "6.5",
        "right": "23",
        "result": 0
    },
    {
        "top": "10",
        "bottom": "67",
        "left": "42",
        "right": "58",
        "result": 1
    },
    {
        "top": "4",
        "bottom": "67",
        "left": "74.5",
        "right": "93",
        "result": 2
    }
    ]
    """


def cropped_resp(code):
    return json.dumps([{
            'top': '0',
            'bottom': '100',
            'left': '0',
            'right': '0',
            'result': code,
    }])

RESP_GOOD_MASK, RESP_INCORRECT_MASK, RESP_NO_MASK = [
    cropped_resp(x) for x in (2, 1, 0)
]


@app.route('/')
def index():
    return send_from_directory(STATIC, 'index.html')


@app.route('/test', methods=['POST'])
def upload_text():
    # print('Upload detected')
    return Response(DEFAULT_RESPONSE, status=200, mimetype='application/json')


@app.route('/detect', methods=['POST'])
def cropped_face():
    # Use the seconds of the minute as a placeholder "detection"
    status = (dt.now().second // 20)
    return Response(cropped_resp(status), status=200, mimetype='application/json')


'''
""" Simple hello world flask app """
from flask import Flask
app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return 'Hello, cs121 World!'
'''
