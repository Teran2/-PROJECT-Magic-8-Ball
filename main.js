// Step 1
const userName = 'Teran';
// Step 2
if (userName) {
    console.log(`Hello ${userName}`);
} else {
    console.log('Hello!');
}
// Step 3
const userQuestion = 'Did I learn anything new?';
// Step 4
console.log(`${userName} asked, ${userQuestion}`);
// Step 5
const randomNumber = Math.floor(Math.random() * 8)
// Step 6
let eightBall = '';
// Step 7 
// if (randomNumber === 0) {
    // eightBall = 'It is certain';
// } else if (randomNumber === 1) {
    // eightBall = 'It is decidedly so';
// } else if (randomNumber === 2) {
    // eightBall = 'Reply hazy try again';
// } else if (randomNumber === 3) {
    // eightBall = 'Cannot predict now';
// } else if (randomNumber === 4) {
    // eightBall = 'Do not count on it';
// } else if (randomNumber === 5) {
    // eightBall = 'My sources say no';
// } else if (randomNumber === 6) {
    // eightBall = 'Outlook not so good';
// } else if (randomNumber === 7) {
    // eightBall = 'Signs point to yes';
// }
// Switch statement version
switch (true) {
    case randomNumber === 0:
        eightBall = ('It is certain');
        break;
    case randomNumber === 1:
        eightBall = ('It is decidedly so');
        break;
    case randomNumber === 2:
        eightBall = ('Reply hazy try again');
        break;
    case randomNumber === 3:
        eightBall = ('Cannot predict now');
        break;
    case randomNumber === 4:
        eightBall = ('Do not count on it');
        break;
    case randomNumber === 5:
        eightBall = ('My sources say no');
        break;
    case randomNumber === 6:
        eightBall = ('Outlook not so good');
        break;
    case randomNumber === 7:
        eightBall = ('Signs point to yes');
        break;
    default:
        console.log('NOT WORKING');
} 
// Step 8
console.log(`Your answer is: ${eightBall}`);
