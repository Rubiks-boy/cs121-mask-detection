import cv2
import numpy as np
import glob
import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))
UPLOAD = os.path.join(BASE_DIR, 'upload')

# from: https://raw.githubusercontent.com/peterbraden/node-opencv/master/data/haarcascade_mcs_nose.xml
cascade_xml = os.path.join(BASE_DIR,
                           "haarcascade_mcs_nose.xml")

nose_cascade = cv2.CascadeClassifier(cascade_xml)

def detect_noses(cropped_face_path, save = False):
    # read image
    img = cv2.imread(cropped_face_path)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # detect nose
    noses = nose_cascade.detectMultiScale(gray, 1.05, 10) 
    # Tried values 10, 30, 70
    # Higher values consistently offer no results
    # Lower values offer consitently wild results (not once found a correct nose)
    # 
    for (x0, y0, x1, y1) in noses:
        cv2.rectangle(img, (x0, y0), (x1, y1), (255, 0, 0), 2)
    if save:
        image_path = os.path.join(UPLOAD, "my_nose.png")
        cv2.imwrite(image_path,img)
        cv2.imshow('Nose',img)
        cv2.waitKey(0) # waits until a key is pressed
        cv2.destroyAllWindows() # destroys the window showing image

    return noses

if __name__ == "__main__":
    file = input("Enter a filename in the current dir:")
    print("Entered")
    detect_noses(file, save=True)
