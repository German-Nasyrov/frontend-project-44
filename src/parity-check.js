import readlineSync from 'readline-sync';

function getRandomValue() {
  return Math.floor(Math.random() * 101);
}

export default function isNumberEven() {
  let successCounter = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const generatedNumber = getRandomValue();
    console.log(`Question: ${generatedNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (generatedNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      successCounter += 1;
    } else if (generatedNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      successCounter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
  }
  return successCounter === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
}
