# tutorial: https://www.returnscript.com/realtime-face-mask-detection/
# models: https://github.com/chandrikadeb7/Face-Mask-Detection/tree/master/face_detector
import cv2
import numpy as np
from os import path
import sys
from ..defines import UPLOAD, MODELS

prototxtPath = path.join(MODELS, "deploy.prototxt")
weightsPath = path.join(MODELS,
                           "res10_300x300_ssd_iter_140000.caffemodel")
faceNet = cv2.dnn.readNet(prototxtPath, weightsPath)


def detect_faces(frame, faceNet):
    """ Takes our faceNet model and an input image/frame, 
    and returns the locations of detected faces"""
    (h, w) = frame.shape[:2]
    blob = cv2.dnn.blobFromImage(frame, 1.0, (500, 500), (104.0, 177.0, 123.0))

    faceNet.setInput(blob)
    detections = faceNet.forward()

    locs = []

    for i in range(0, detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > 0.25:
            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
            (startX, startY, endX, endY) = box.astype("int")

            (startX, startY) = (max(0, startX), max(0, startY))
            (endX, endY) = (min(w - 1, endX), min(h - 1, endY))

            locs.append((startX, startY, endX, endY))

    return locs

def coords_to_perc(detections, img):
    """Helper Function that changes OpenCV coords 
    to a percentage for the front end """
    (h, w, c) = img.shape
    perc = []
    for (x0, y0, x1, y1) in detections:
        perc.append(
            ( (100*x0)//w, (100*y0)//h, (100*x1)//w, (100*y1)//h ) 
            )
    return perc

def full_detect_flow(fname, save = False):
    """Calls detect_faces to get the face locations, and returns a tuple
    consisting of the faces and their paths. The save flag (debugging only) 
    is to compare the front end's annotations w/ OpenCV's."""
    # Read image
    img = cv2.imread(fname)

    # Run the detection model
    detections = detect_faces(img, faceNet)
    faces = []
    paths = []

    # Format the detections
    for (x0, y0, x1, y1) in detections:
        if x1<x0:
            temp = x0
            x0 = x1
            x1 = temp
        if y1<y0:
            temp = y0
            y0 = y1
            y1 = temp
        faces.append(img[y0:y1, x0:x1])
        
        cv2.rectangle(img, (x0, y0), (x1, y1), (255, 0, 0), 2)
    
    if save:
        # testing FLAG to save an annotated image
        image_path = path.join(UPLOAD, "my_upload_new.png")
        cv2.imwrite(image_path,img)
    
    # Save Each cropped face for the classifier model
    num = 0
    for face in faces:
        my_path = path.join(UPLOAD, "face_"+str(num)+".png")
        cv2.imwrite(my_path, face)
        paths.append(my_path)
        num += 1
    
    return (coords_to_perc(detections, img), paths)