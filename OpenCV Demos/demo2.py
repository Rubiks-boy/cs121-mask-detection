# tutorial: https://www.returnscript.com/realtime-face-mask-detection/
# models: https://github.com/chandrikadeb7/Face-Mask-Detection/tree/master/face_detector
import cv2
import numpy as np
import glob

# F_NAME = "./brothers.jpg"
# F_NAME = "./IMG_3008.jpeg"
# F_NAME = "./IMG_2994.JPG"
F_NAME = "./leaders-2.jpg"

prototxtPath = r"deploy.prototxt"
weightsPath = r"res10_300x300_ssd_iter_140000.caffemodel"
faceNet = cv2.dnn.readNet(prototxtPath, weightsPath)

def detect_faces(frame, faceNet):
	(h, w) = frame.shape[:2]
	blob = cv2.dnn.blobFromImage(frame, 1.0, (500,500),
		(104.0, 177.0, 123.0))

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

def full_detect_flow(fname):
    # read image
    img = cv2.imread(fname)

    detections = detect_faces(img, faceNet)

    for (x0, y0, x1, y1) in detections:
        # cv2.rectangle(image, start_point, end_point, color, thickness)
        cv2.rectangle(img,(x0,y0),(x1, y1),(255,0,0),2)

    cv2.namedWindow("output", cv2.WINDOW_NORMAL)
    cv2.imshow("output", img)
    cv2.waitKey(0)  # waits until a key is pressed
    cv2.destroyAllWindows()  # destroys the window showing image

if __name__ == "__main__":
    counter = 0
    for file in glob.glob("./archive/images/*.png"):
        if counter < 20:
          print(file)
          full_detect_flow(file)
          counter += 1