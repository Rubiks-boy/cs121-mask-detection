from flask import Flask, request, send_from_directory, Response, render_template
from flask_cors import CORS
from .defines import *
from .views.image_detection import image_detection
import sys

# Link explaining blueprints / file layout
# https://exploreflask.com/en/latest/blueprints.html

app = Flask(__name__)  # TODO: Load config file...
CORS(app)

# Load the blueprint views
app.register_blueprint(image_detection, url_prefix='')
# app.register_blueprint(video_detection, url_prefix='')


@app.route('/')
def index():
    # Old Testing Views
    print('Trying to find index page', file=sys.stderr)
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def upload_text():
    # print('Upload detected')
    return Response(DEFAULT_RESPONSE, status=200, mimetype='application/json')
