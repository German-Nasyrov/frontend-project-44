import readlineSync from 'readline-sync';
import sayHello, { getRandomValue, result, successCheck } from '../src/index.js';

function calculateGcd(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return calculateGcd(secondNumber, firstNumber % secondNumber);
}

export default function gcd() {
  const explain = 'Find the greatest common divisor of given numbers.';
  const userName = sayHello(explain);

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
    } else {
      successCheck(falseValue, answer, resultGcd);
      break;
    }
  }

  return result(userName);
}
