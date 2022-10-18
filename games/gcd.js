import readlineSync from 'readline-sync';
import {
  getRandomValue,
  calculateGcd,
  result,
  successCheck,
} from '../src/index.js';

export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const trueValue = true;
    const falseValue = false;
    let answer = '';
    const firstNumber = getRandomValue();
    const secondNumber = getRandomValue();
    const resultGcd = String(calculateGcd(firstNumber, secondNumber));
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === resultGcd) {
      successCheck(trueValue, answer);
    } else if (answer !== resultGcd) {
      successCheck(falseValue, answer, resultGcd);
      break;
    }
  }

  return result(userName);
}
