import readlineSync from 'readline-sync';
import {
  getRandomValue,
  isPrimeNum,
  result,
  successCheck,
} from '../src/index.js';

export default function prime() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const trueValue = true;
    const falseValue = false;
    const yes = 'yes';
    const no = 'no';
    let answer = '';
    const randomNum = getRandomValue();
    console.log(`Question: ${randomNum}`);
    answer = readlineSync.question('Your answer: ');

    if (isPrimeNum(randomNum) && answer === yes) {
      successCheck(trueValue, answer);
    } else if (!isPrimeNum(randomNum) && answer === no) {
      successCheck(trueValue, answer);
    } else if (isPrimeNum(randomNum) && answer === no) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (!isPrimeNum(randomNum) && answer === yes) {
      successCheck(falseValue, answer, no);
      break;
    } else if (isPrimeNum(randomNum) && answer !== no) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (!isPrimeNum(randomNum) && answer !== yes) {
      successCheck(falseValue, answer, no);
      break;
    }
  }

  return result(userName);
}
