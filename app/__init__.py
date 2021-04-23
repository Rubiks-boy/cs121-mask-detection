from flask import Flask, request, send_from_directory, Response, render_template
from flask_cors import CORS
from .defines import *
from .views.image_detection import image_detection
import sys

# Link explaining blueprints / file layout
# https://exploreflask.com/en/latest/blueprints.html

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 10 # 10 MB cap
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.JPG', '.png', '.gif']
CORS(app)

# Load the blueprint views
app.register_blueprint(image_detection, url_prefix='')
# app.register_blueprint(video_detection, url_prefix='')


# These old views are for testing, not currently used by our app
@app.route('/')
def index():
    # Not in Use
    print('Trying to find index page', file=sys.stderr)
    return render_template('index.html')

@app.route('/test', methods=['POST'])
def upload_text():
    # Not in Use
    # print('Upload detected')
    return Response(DEFAULT_RESPONSE, status=200, mimetype='application/json')
