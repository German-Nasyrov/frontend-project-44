import readlineSync from 'readline-sync';
import { getRandomValue, result, successCheck } from '../src/index.js';

export default function isNumberEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const trueValue = true;
    const falseValue = false;
    const yes = 'yes';
    const no = 'no';
    const generatedNumber = getRandomValue();

    console.log(`Question: ${generatedNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (generatedNumber % 2 === 0 && answer === yes) {
      successCheck(trueValue, answer);
    } else if (generatedNumber % 2 !== 0 && answer === no) {
      successCheck(trueValue, answer);
    } else if (generatedNumber % 2 === 0 && answer === no) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (generatedNumber % 2 !== 0 && answer === yes) {
      successCheck(falseValue, answer, no);
      break;
    } else if (generatedNumber % 2 === 0 && answer !== no) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (generatedNumber % 2 !== 0 && answer !== yes) {
      successCheck(falseValue, answer, no);
      break;
    }
  }

  return result(userName);
}
