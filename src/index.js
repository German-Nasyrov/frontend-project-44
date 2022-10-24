import readlineSync from 'readline-sync';

const runLoop = (circle, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let successCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = circle();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === trueAnswer) {
      console.log('Correct!');
      successCounter += 1;
    } else if (answer !== trueAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
      );
      break;
    }
  }

  return successCounter === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};

export default runLoop;
