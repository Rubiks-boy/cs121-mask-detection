import cv2
import numpy as np
import glob
import os

# F_NAME = "./brothers.jpg"
# F_NAME = "./IMG_3008.jpeg"
# F_NAME = "./IMG_2994.JPG"
# F_NAME = "./leaders-2.jpg"

cwd = os.getcwd()
cascade_xml = os.path.join(cwd, "OpenCV Demos",
                           "haarcascade_frontalface_default.xml")


def read_img_and_detect(fname):
    # read image
    img = cv2.imread(fname)

    # show image
    face_cascade = cv2.CascadeClassifier(cascade_xml)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # detect face
    faces = face_cascade.detectMultiScale(gray, 1.05, 6)
    print(faces)

    for (x, y, w, h) in faces:
        # From the docs
        # cv2.rectangle(image, start_point, end_point, color, thickness)
        cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)

    cv2.namedWindow("output", cv2.WINDOW_NORMAL)
    cv2.imshow("output", img)
    cv2.waitKey(0)  # waits until a key is pressed
    cv2.destroyAllWindows()  # destroys the window showing image


if __name__ == "__main__":
    counter = 0
    imgs_path = os.path.join(cwd, "archive", "images", "*.png")

    for file in glob.glob(imgs_path):
        if counter < 20:
            print(file)
            read_img_and_detect(file)
            counter += 1

    # read_img_and_detect(F_NAME)