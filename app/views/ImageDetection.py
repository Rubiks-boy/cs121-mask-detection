from flask import request, Response, Blueprint
import os
# Import our models
from ..models.detection_model import full_detect_flow
from ..models.classification_model import make_prediction
from ..defines import *
# Imports for debugging ( print("", file=sys.stderr) )
import sys

ImageDetection = Blueprint("ImageDetection", __name__)

@ImageDetection.route('/detect', methods=['POST'])
def cropped_face():
    """Controller for Face Detection, calls the models, 
    and returns a response with face coords"""
    # Get and Save the uploaded image
    image = dict(request.files.lists())["file"][0]
    image_path = os.path.join(UPLOAD, "my_upload.png")
    image.save(image_path)
    # Call the Face Detection Model
    (coords, face_paths) = full_detect_flow(image_path, save=True)
    # print("Face Detected Successfully!", file=sys.stderr)
    
    # Call the Face Classifier
    predictions = []
    for face_path in face_paths:
        prediction = make_prediction(face_path)
        predictions.append(prediction)

    # Format the predictions/coords for json
    faces_and_coords = []
    for i in range(len(coords)):
        coord = coords[i]
        prediction = predictions[i]

        faces_and_coords.append((coord, prediction))
   
    # Code for Debugging
    # print("Model Prediction: ", predictions, file=sys.stderr)
    return Response(box_resp(faces_and_coords))