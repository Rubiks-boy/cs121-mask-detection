from flask import Flask, request, send_from_directory, Response
from flask_cors import CORS
from markupsafe import escape
from werkzeug.utils import secure_filename
import os.path
import json

app = Flask(__name__)
CORS(app)
STATIC = 'static'
UPLOADS = 'uploads'

DEFAULT_RESPONSE = json.loads("""
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
    """)


@app.route('/')
def index():
    return send_from_directory(STATIC, 'index.html')


@app.route('/test', methods=['POST'])
def upload_text():
    print('Upload detected')
    # print(f'This is our request:\n{request.form}')
    # text_returned = []
    # for key in request.form.keys():
    #     text_returned.append(f'{key} -> {request.form[key]}')
    # for x in request.files:
    #     upload = request.files[x]
    #     filename = secure_filename(upload.filename)
    #     upload.save(os.path.join('uploads', filename))
    # return '\n'.join(text_returned)
    # return {'data': DEFAULT_RESPONSE}
    return Response("{'a':'b'}", status=200, mimetype='application/json')
