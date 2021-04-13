import json
from flask import Flask, Response
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

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




@app.route('/test', methods=['POST'])
def upload_text():
    # print('Upload detected')
    return Response(DEFAULT_RESPONSE, status=200, mimetype='application/json')