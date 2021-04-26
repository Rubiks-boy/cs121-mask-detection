from flask import Flask, request, send_from_directory, Response, render_template
from flask_cors import CORS
from .views.image_detection import image_detection

# Link explaining blueprints / file layout
# https://exploreflask.com/en/latest/blueprints.html

app = Flask(__name__)
CORS(app)

# Load the blueprint views
app.register_blueprint(image_detection, url_prefix='')

@app.route('/')
def index():
    return "Flask app is up!"
