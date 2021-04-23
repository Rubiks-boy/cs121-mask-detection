# See the link for details
# https://exploreflask.com/en/latest/configuration.html

# CHANGE IN THE PRODUCTION BRANCH!!!
SECRET_KEY = 'dev'
DEBUG = True

# 10MB limit to file uploads
MAX_CONTENT_LENGTH = 1024 * 1024 * 10
UPLOAD_EXTENSIONS = ['.jpg', '.JPG', '.png', '.gif']