export default [
    {
        question: '1) Who are the creators?',
        answer: [
            `This web app was made by Xander Hirst, Dylan McGarvey, Nick Tan, and Adam Walker 
            for their CS121 Software Development course at Harvey Mudd College.`,
        ],
    },
    {
        question: '2) What does it mean to wear a mask correctly or incorrectly?',
        answer: [
            `While many people interpret face shields and bandanas as proper mask usage, 
            our model was trained on data that largely consisted of faces with and without 
            blue and white medical masks. Since these blue and white medical masks are what 
            the model looks for, it is more likely that faces wearing bandanas or face shields are misclassified.`,
        ],
    },
    {
        question: '3) What are the acceptable file types?',
        answer: [
            `Our app accepts the following common file types: `,
            `.jpe .jpg .JPG .jpeg .png .gif .svg`,
        ],
    },
    {
        question: `4) I am getting a 500 error, what's going on?`,
        answer: [
            'There are several possible reasons for why this may be occuring, here are some common ones:',
            '- Your image was too large.',
            '- Your image contained more than 10 faces.',
            `- Your image upload had a wrong file type.`,
        ],
    },
    {
        question: '5) Why does it take so long to load?',
        answer: [
            `You probably picked a large image, or one with many faces. 
            Our app works best on images with up to 4 faces, 
            otherwise you'll get a longer loading time. 
            Our app will work for an image with up to 10 faces, 
            but know that as your image gets closer to 10 faces, 
            the loading time may significantly increase.`,
        ],
    },
    {
        question: '6) What do the colors mean?',
        answer: [`- Red: The no mask category`, `- Green: The correctly worn mask category`],
    },
    {
        question: '7) What do the little check boxes do?',
        answer: [
            `Clicking on the checkboxes toggles which boxes are currently drawn over your displayed image.`,
        ],
    },
]
