import readlineSync from 'readline-sync';
import { calcGcd, getRandomValue, result, successCheck } from '../src/index.js';

export default function gcd() {
  const trueValue = true;
  const falseValue = false;
  const firstNumber = getRandomValue();
  const secondNumber = getRandomValue();
  const thirdNumber = getRandomValue();
  const fourthNumber = getRandomValue();
  const fifthNumber = getRandomValue();
  const sixthNumber = getRandomValue();
  const firstGcd = String(calcGcd(firstNumber, secondNumber));
  const secondGcd = String(calcGcd(thirdNumber, fourthNumber));
  const thirdGcd = String(calcGcd(fifthNumber, sixthNumber));
  let answer = '';

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 1; i += 1) {
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === firstGcd) {
      successCheck(trueValue, answer);
    } else if (answer !== firstGcd) {
      successCheck(falseValue, answer, firstGcd);
      break;
    }

    console.log(`Question: ${thirdNumber} ${fourthNumber}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === secondGcd) {
      successCheck(trueValue, answer);
    } else if (answer !== secondGcd) {
      successCheck(falseValue, answer, secondGcd);
      break;
    }

    console.log(`Question: ${fifthNumber} ${sixthNumber}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === thirdGcd) {
      successCheck(trueValue, answer);
    } else if (answer !== thirdGcd) {
      successCheck(falseValue, answer, thirdGcd);
      break;
    }
  }

  return result(userName);
}
