from flask import request, Response, Blueprint, current_app
import os
# Import our models
from ..models.detection_model import full_detect_flow
from ..models.classification_model import make_prediction
from ..defines import BASE_DIR, box_resp, delete_uploads

image_detection = Blueprint('image_detection', __name__)

@image_detection.route('/detect', methods=['POST'])
def cropped_face():
    """ Controller for Face Detection, calls the models, 
        and returns a response with face coords"""
    # Get the image file from POST request
    image = request.files['file']
    if image.filename != '':
        # Save file if not empty & correct extension
        file_ext = os.path.splitext(image.filename)[1]
        if file_ext not in current_app.config['UPLOAD_EXTENSIONS']:
            return "Invalid File Type", 400
        else:
            image_path = os.path.join(BASE_DIR, 'upload', 'my_upload.png')
            image.save(image_path)
    
    # Call the Face Detection Model
    (coords, face_paths) = full_detect_flow(image_path, save=True)

    # Call the Face Classifier
    predictions = []
    for face_path in face_paths:
        prediction = make_prediction(face_path)
        predictions.append(prediction)

    # Format the predictions / coords for json
    faces_and_coords = []
    for i in range(len(coords)):
        coord = coords[i]
        prediction = predictions[i]
        faces_and_coords.append((coord, prediction))

    # Delete any stored images
    delete_uploads()
    return Response(box_resp(faces_and_coords))
