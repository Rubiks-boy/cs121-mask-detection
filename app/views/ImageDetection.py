from flask import request, Response, Blueprint
import os

# Imports for debugging ( print("", file=sys.stderr) )
import sys

# Import our models
from app.models.detection_model import full_detect_flow
from app.models.classification_model import make_prediction
from app.defines import *

ImageDetection = Blueprint("ImageDetection", __name__)

@ImageDetection.route('/detect', methods=['POST'])
def cropped_face():

    # Get and Save the uploaded image
    image = dict(request.files.lists())["file"][0]
    image_path = os.path.join(BASE_DIR, "upload", "my_upload.png")
    image.save(image_path)
    # Call the Face Detection Model
    (coords, face_paths) = full_detect_flow(image_path, save=True)
    print("Face Detected Successfully!", file=sys.stderr)
    # print(coords, file=sys.stderr) 
    # print(face_paths, file=sys.stderr)
    
    # TODO: Transform coords to useable format
    # Call the Facee Classifier
    predictions = []
    for face_path in face_paths:
        prediction = make_prediction(face_path)
        predictions.append(prediction)

    faces_and_coords = []
    for i in range(len(coords)):
        coord = coords[i]
        prediction = predictions[i]

        faces_and_coords.append((coord, prediction))
    # print("Model Prediction: ", predictions, file=sys.stderr)
    return Response(box_resp(faces_and_coords))


# Example View
# @ImageDetection.route('/about')
# def about(user_url_slug):
#     # Do some stuff
#     return render_template('ImageDetection/about.html')