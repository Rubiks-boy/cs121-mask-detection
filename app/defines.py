import os
import json
# Windows specific Imports
from platform import system
if system() == "Windows":
    import pathlib
    temp = pathlib.PosixPath
    pathlib.PosixPath = pathlib.WindowsPath


BASE_DIR = os.path.dirname(os.path.realpath(__file__))
UPLOAD = '/tmp'
MODELS = os.path.join(BASE_DIR, "static", "models")

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

def box_resp(mylist):
    json_resp = []
    for i in range(len(mylist)):
        (x0,y0,x1,y1) = mylist[i][0]
        prediction = mylist[i][1]
        json_resp.append({
                'top': str(y0),
                'bottom': str(y1),
                'left': str(x0),
                'right': str(x1),
                'result': prediction,
        })
    return json.dumps(json_resp)

RESP_GOOD_MASK, RESP_INCORRECT_MASK, RESP_NO_MASK = [
    cropped_resp(x) for x in (2, 1, 0)
]