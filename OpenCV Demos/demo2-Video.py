# tutorial: https://www.returnscript.com/realtime-face-mask-detection/
# models: https://github.com/chandrikadeb7/Face-Mask-Detection/tree/master/face_detector
import cv2
import numpy as np
import glob
import os

cwd = os.getcwd()
prototxtPath = os.path.join(cwd, "OpenCV Demos", "deploy.prototxt")
weightsPath = os.path.join(cwd, "OpenCV Demos",
                           "res10_300x300_ssd_iter_140000.caffemodel")
faceNet = cv2.dnn.readNet(prototxtPath, weightsPath)


def detect_faces(frame, faceNet):
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


def full_detect_flow(frame):
    detections = detect_faces(frame, faceNet)

    for (x0, y0, x1, y1) in detections:
        # cv2.rectangle(image, start_point, end_point, color, thickness)
        cv2.putText(frame, "nice", (x0, y0 - 10), cv2.FONT_HERSHEY_SIMPLEX,
                    1.0, (0, 255, 0), 4)
        cv2.rectangle(frame, (x0, y0), (x1, y1), (255, 0, 0), 2)

    cv2.namedWindow("output", cv2.WINDOW_NORMAL)
    cv2.imshow("output", frame)
    # cv2.waitKey(0)  # waits until a key is pressed
    # cv2.destroyAllWindows()  # destroys the window showing image


if __name__ == "__main__":
    cap = cv2.VideoCapture(0)

    # Check if the webcam is opened correctly
    if not cap.isOpened():
        raise IOError("Cannot open webcam")

    while True:
        ret, frame = cap.read()
        frame = cv2.resize(frame,
                           None,
                           fx=0.5,
                           fy=0.5,
                           interpolation=cv2.INTER_AREA)
        full_detect_flow(frame)
        # cv2.imshow('Input', frame)

        c = cv2.waitKey(1)
        if c == 27:
            break

    cap.release()
    cv2.destroyAllWindows()
