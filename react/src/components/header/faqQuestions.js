export default [
    {
        question: "1) What's it mean to wear a mask correctly or incorrectly?",
        answer: [
            'Our model was trained on data that mainly consisted of faces with and without blue medical masks.',
            'What this means is that there is insufficient data to check for (face shields / double masks / bandanas).',
        ],
    },
    {
        question: "2) I am getting a 500 error, what's going on?",
        answer: [
            '- Your image was too large',
            '- Your image contined more than 10 faces',
            '- You uploaded a wrong file type',
        ],
    },
    {
        question: '3) Why does it load so long?',
        answer: [
            'You probably picked a large image, or one with many faces. ',
            "Works best on an image with up to 4 faces, otherwise you'll get a longer loading time. We cap at 10 faces," +
                'but as you get closer to 10, the loading time will drastically increase.',
        ],
    },
    {
        question: '4) What do the colors mean?',
        answer: [
            '- Red: The no mask category',
            '- Green: The correct mask category',
            '- Yellow: The incorrect mask category',
        ],
    },
    {
        question: '5) What do the little check boxes do?',
        answer: [''],
    },
]
