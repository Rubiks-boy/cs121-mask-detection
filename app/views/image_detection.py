from flask import app, request, Response, Blueprint, abort
import os
# Import our models
from ..models.detection_model import full_detect_flow
from ..models.classification_model import make_prediction
from ..models.nose_model import detect_noses
from ..defines import BASE_DIR, box_resp, MASK, INCORRECT, delete_uploads
# Imports for debugging ( print('', file=sys.stderr) )
import sys

image_detection = Blueprint('image_detection', __name__)

@image_detection.route('/detect', methods=['POST'])
def cropped_face():
    """ Controller for Face Detection, calls the models, 
        and returns a response with face coords"""
    # Get and Save the uploaded image
    image = dict(request.files.lists())['file'][0]
    image_path = os.path.join(BASE_DIR, 'upload', 'my_upload.png')
    image.save(image_path)
    # Call the Face Detection Model
    (coords, face_paths) = full_detect_flow(image_path, save=False)
    print('Face Detected Successfully!', file=sys.stderr)
    # app.logger.info("Face Detected Successfully!")

    # Call the Face Classifier
    predictions = []
    for face_path in face_paths:
        prediction = make_prediction(face_path)
        if prediction == MASK:
            noses = detect_noses(face_path)
            print("TEST", noses, file=sys.stderr)
            print(len(noses), file=sys.stderr)
            # app.logger.info("Nose Test: %s", len(noses))
            # Check if noses not empty / no noses found
            if noses:
                print("Changing Prediction to Incorrect", file=sys.stderr)
                prediction = INCORRECT
        predictions.append(prediction)

    # Format the predictions / coords for json
    faces_and_coords = []
    for i in range(len(coords)):
        coord = coords[i]
        prediction = predictions[i]
        faces_and_coords.append((coord, prediction))
    # print("Model Prediction: ", predictions, file=sys.stderr)
    # Delete any images
    delete_uploads()
    return Response(box_resp(faces_and_coords))
