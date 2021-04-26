import os
import json

# Windows specific Imports
from platform import system
if system() == 'Windows':
    import pathlib
    temp = pathlib.PosixPath
    pathlib.PosixPath = pathlib.WindowsPath


BASE_DIR = os.path.dirname(os.path.realpath(__file__))
UPLOAD = os.path.join(BASE_DIR, 'upload')
MODELS = os.path.join(BASE_DIR, 'static', 'models')

NO_MASK = 0
INCORRECT = 1
MASK = 2

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

