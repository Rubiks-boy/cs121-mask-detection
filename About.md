# About Page

## FAQ

### 1) What's it mean to wear a mask correctly or incorrectly?
Our model was trained on data that mainly consisted of faces with and without blue medical masks.
What this means is that there is insufficient data to check for (face shields / double masks / bandanas).

### 2) I am getting a 500 error, what's going on?
- Your image was too large
- Your image contined more than 10 faces
- You uploaded a wrong file type

### 3) Why does it load so long?
You probably picked a large image, or one with many faces. 
Works best on an image with up to 4 faces, otherwise you'll get a longer loading time. We cap at 10 faces,
but as you get closer to 10, the loading time will drastically increase.

### 4) What do the colors mean?
- Red: The no mask category
- Green: The correct mask category
- Yello: The incorrect mask category

### 5) What do the little check boxes do?
