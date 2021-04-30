import cv2
import numpy as np
from os import path
from ..defines import UPLOAD, MODELS

prototxtPath = path.join(MODELS, "deploy.prototxt")
weightsPath = path.join(MODELS,
                        "res10_300x300_ssd_iter_140000.caffemodel")
face_net = cv2.dnn.readNet(prototxtPath, weightsPath)


def detect_faces(frame, face_net):
    """ Takes our faceNet model and an input image/frame,
        and returns the locations of detected faces"""
    (h, w) = frame.shape[:2]
    blob = cv2.dnn.blobFromImage(
        frame, 1.0, (h, w), (104.0, 177.0, 123.0))

    face_net.setInput(blob)
    detections = face_net.forward()

    locs = []

    for i in range(0, detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > 0.25:
            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
            (start_x, start_y, end_x, end_y) = box.astype("int")

            if start_x > end_x:
                (start_x, end_x) = (end_x, start_x)
            if start_y > end_y:
                (start_y, end_y) = (end_y, start_y)

            (start_x, start_y) = (max(0, start_x), max(0, start_y))
            (end_x, end_y) = (min(w - 1, end_x), min(h - 1, end_y))

            if start_x >= end_x or start_y >= end_y:
                continue

            locs.append((start_x, start_y, end_x, end_y))

    return locs


def coords_to_perc(detections, img):
    """ Helper Function that changes OpenCV coords
        to a percentage for the front end """
    (h, w, _) = img.shape
    perc = []
    for (x0, y0, x1, y1) in detections:
        perc.append(
            ((100*x0)//w, (100*y0)//h, (100*x1)//w, (100*y1)//h)
        )
    return perc


def full_detect_flow(fname, save=False):
    """ Calls detect_faces to get the face locations, and returns a tuple
        consisting of the faces and their paths. The save flag (to debug) 
        is to compare the front end's annotations w/ OpenCV's."""
    # read image
    img = cv2.imread(fname)

    # Call the detection model, and store detections coords
    detections = detect_faces(img, face_net)
    faces = []
    paths = []

    # Reformat the detection coords for OpenCV
    for (x0, y0, x1, y1) in detections:
        faces.append(img[y0:y1, x0:x1])
        if save:
            # Draw rects over detected faces
            cv2.rectangle(img, (x0, y0), (x1, y1), (255, 0, 0), 2)

    if save:
        # testing FLAG to save an annotated image
        image_path = path.join(UPLOAD, "my_upload_new.png")
        cv2.imwrite(image_path, img)

    # Save each cropped face for the classifier model
    num = 0
    for face in faces:
        my_path = path.join(UPLOAD, "face_"+str(num)+".png")
        cv2.imwrite(my_path, face)
        paths.append(my_path)
        num += 1

    return (coords_to_perc(detections, img), paths)
