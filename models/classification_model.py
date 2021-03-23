from ..config import *
from fastai.learner import load_learner

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