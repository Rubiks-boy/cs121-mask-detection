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
from .config import *

app = Flask(__name__)
# TODO: we're allowing access from any origin
# this is like, pretty not so great...
CORS(app)

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
    image_path = os.path.join(BASE_DIR, "upload", "my_upload.png")
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


