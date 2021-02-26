from flask import Flask, request, send_from_directory
from markupsafe import escape
from werkzeug.utils import secure_filename
import os.path
app = Flask(__name__)
STATIC = 'static'
UPLOADS = 'uploads'

@app.route('/')
def index():
    return send_from_directory(STATIC, 'index.html')


@app.route('/test', methods=['POST'])
def upload_text():
    text_returned = []
    for key in request.form.keys():
        text_returned.append(f'{key} -> {request.form[key]}')
    for x in request.files:
        upload = request.files[x]
        filename = secure_filename(upload.filename)
        upload.save(os.path.join('uploads', filename))
    return '\n'.join(text_returned)
