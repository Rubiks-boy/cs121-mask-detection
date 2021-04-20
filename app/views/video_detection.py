from flask import render_template, Blueprint

video_detection = Blueprint('video_detection', __name__)

# Example View
@video_detection.route('/about')
def about():
    """ Stump function for video stretch goal """
    return render_template('video_detection/about.html')
