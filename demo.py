from flask import Flask, request, send_from_directory, Response
from flask_cors import CORS
# from markupsafe import escape
# from werkzeug.utils import secure_filename
import json
import os

# Imports for debugging ( print("", file=sys.stderr) )
from datetime import datetime as dt
import sys

# Import our models
from .models.detection_model import full_detect_flow
from .models.classification_model import make_prediction

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

    # Get and Save the uploaded image
    image = dict(request.files.lists())["file"][0]
    cwd = os.path.dirname(os.path.realpath(__file__))
    image_path = os.path.join(cwd, "upload", "my_upload.png")
    image.save(image_path)
    # Call the Face Detection Model
    coords = full_detect_flow(image_path, save=False)
    print("Face Detected Successfully!", file=sys.stderr)
    print(coords, file=sys.stderr) 
    # TODO: Transform coords to useable format
    # Call the Facee Classifier
    prediction = make_prediction(image_path)
    print("Model Prediction: ", prediction, file=sys.stderr)
    return Response(prediction)


