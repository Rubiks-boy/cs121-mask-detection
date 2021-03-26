from ..config import *
from fastai.learner import load_learner
import os

cwd = os.path.dirname(os.path.realpath(__file__))
modelPath = os.path.join(cwd, "face_mask_classifier.pkl")

def make_prediction(image_path):
    model = load_learner(modelPath, cpu=True)
    prediction = model.predict(image_path)
    mask_class = prediction[0]

    if mask_class == "without_mask":
        return NO_MASK
    elif mask_class == "with_mask":
        return MASK
    elif mask_class == "mask_weared_incorrect":
        return INCORRECT
    else:
        return "AAAAAHHHH"