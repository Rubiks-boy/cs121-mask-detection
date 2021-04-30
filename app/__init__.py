from flask import Flask, request, send_from_directory, Response, render_template
from flask_cors import CORS
from .views.image_detection import image_detection

app = Flask(__name__)
app.config['DEBUG'] = False
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 10 # 10 MB cap
app.config['UPLOAD_EXTENSIONS'] = ['.jpe', '.jpg', '.JPG', '.png', '.gif', '.svg']
CORS(app)

# Load the blueprint views
app.register_blueprint(image_detection, url_prefix='')

@app.route('/')
def index():
    return "Flask app is up!"
