from flask import Flask, request, send_from_directory, Response
from flask_cors import CORS

from datetime import datetime as dt
# from markupsafe import escape
# from werkzeug.utils import secure_filename
# import os.path
import json
import sys
import os

app = Flask(__name__)
# TODO: we're allowing access from any origin
# this is like, pretty not so great...
CORS(app)
STATIC = 'flask/static'
UPLOADS = 'flask/uploads'

NO_MASK = 0
INCORRECT = 1
MASK = 2

DEFAULT_RESPONSE = json.dumps([
    {
        'result': NO_MASK,
        'top': '16',
        'bottom': '40',
        'left': '18',
        'right': '31',
    },
    {
        'result': MASK,
        'top': '50',
        'bottom': '77',
        'left': '45',
        'right': '57',
    },
    {
        'result': INCORRECT,
        'top': '16',
        'bottom': '37',
        'left': '68',
        'right': '78',
    },
])


def cropped_resp(code):
    return json.dumps([{
            'top': '0',
            'bottom': '100',
            'left': '0',
            'right': '100',
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

    # The image uploaded by the user
    print("Hello I am printing", file=sys.stderr)
    image = dict(request.files.lists())["file"][0]
    # print("Printing the image:", image, type(image), file=sys.stderr)
    cwd = os.path.dirname(os.path.realpath(__file__))
    print("dir: ", cwd, file=sys.stderr)
    image.save(os.path.join(cwd, "upload", "test.png"))
    # image = request.files[0]

    # Use the seconds of the minute as a placeholder "detection"
    # 0=no mask, 1=mask incorrect, 2=mask worn correctly
    status = (dt.now().second // 20)
    return Response(cropped_resp(status), status=200, mimetype='application/json')
