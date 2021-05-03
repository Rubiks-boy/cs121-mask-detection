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
            `.jpeg .jpg .JPG .png .gif`,
        ],
    },
    {
        question: `4) I am getting a no faces detected, what's going on?`,
        answer: [
            'There are several possible reasons for why this may be occuring, here are some common ones:',
            '- Your image was too large.',
            '- Your image contained too many faces.',
            `- Your image upload had a wrong file type.`,
        ],
    },
    {
        question: '5) Why does it take so long to load?',
        answer: [
            `You probably picked a large image, or one with many faces. 
            Our app works best on images with a smaller number of faces. 
            Our app was successfully tested on an image with 40 faces, 
            but anymore than 10 will likely cause a longer loading time.`,
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
