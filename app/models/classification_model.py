from ..defines import NO_MASK, MASK, INCORRECT, MODELS
from fastai.learner import load_learner
from os import path

modelPath = path.join(MODELS, "face_mask_classifier.pkl")
model = load_learner(modelPath, cpu=True)


def make_prediction(image_path):
    """ Given a path to a cropped face, 
        return a prediction about that face."""
    prediction = model.predict(image_path)
    mask_class = prediction[0]

    if mask_class == "without_mask":
        return NO_MASK
    elif mask_class == "with_mask":
        return MASK
    elif mask_class == "mask_weared_incorrect":
        return INCORRECT
    else:
        return "Something went wrong with the model"
