from fastai.learner import load_learner
## Imports to run on Windows correctly
import pathlib
import json
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath

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

def make_prediction(image_path):

    model = load_learner("face_mask_classifier.pkl", cpu=True)
    prediction = model.predict(image_path)
    mask_class = prediction[0]

    if mask_class == "without_mask":
        return RESP_NO_MASK
    elif mask_class == "with_mask":
        return RESP_GOOD_MASK
    elif mask_class == "mask_weared_incorrect":
        return RESP_INCORRECT_MASK
    else:
        return "AAAAAHHHH"