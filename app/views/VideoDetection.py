from flask import request, Response, Blueprint
import os
# Import our models
from app.models.detection_model import full_detect_flow
from app.models.classification_model import make_prediction
from app.defines import *
# Imports for debugging ( print("", file=sys.stderr) )
import sys

VideoDetection = Blueprint("VideoDetection", __name__)

# Example View
@VideoDetection.route('/about')
def about(user_url_slug):
    """ Stump function for Stretch Goal """
    return render_template('VideoDetection/about.html')