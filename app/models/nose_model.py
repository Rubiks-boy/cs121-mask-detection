import cv2
from os import path
from ..defines import UPLOAD, MODELS

# from: https://raw.githubusercontent.com/peterbraden/node-opencv/master/data/haarcascade_mcs_nose.xml
cascade_xml = path.join(MODELS,
                           "haarcascade_mcs_nose.xml")

nose_cascade = cv2.CascadeClassifier(cascade_xml)

def detect_noses(cropped_face_path, save = False):
    # read image
    img = cv2.imread(cropped_face_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # detect nose
    noses = nose_cascade.detectMultiScale(gray, 1.05, 70)

    # FLAG decide to save image
    if save:
        for (x0, y0, x1, y1) in noses:
            cv2.rectangle(img, (x0, y0), (x1, y1), (255, 0, 0), 2)
        image_path = path.join(UPLOAD, "my_nose.png")
        cv2.imwrite(image_path, img)
    return noses