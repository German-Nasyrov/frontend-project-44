import readlineSync from 'readline-sync';
import { getRandomValue, result, successCheck } from '../src/index.js';

export default function isResultEquals() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 1; i += 1) {
    const trueValue = true;
    const falseValue = false;
    const firstNumber = getRandomValue();
    const secondNumber = getRandomValue();
    const thirdNumber = getRandomValue();
    const fourthNumber = getRandomValue();
    const fifthNumber = getRandomValue();
    const sixthNumber = getRandomValue();
    const sum = String(firstNumber + secondNumber);
    const diff = String(thirdNumber - fourthNumber);
    const multiply = String(fifthNumber * sixthNumber);
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    const sumAnswer = readlineSync.question('Your answer: ');

    if (sumAnswer === sum) {
      successCheck(trueValue, sumAnswer);
    } else if (sumAnswer !== sum) {
      successCheck(falseValue, sumAnswer, sum);
      break;
    }

    console.log(`Question: ${thirdNumber} - ${fourthNumber}`);
    const diffAnswer = readlineSync.question('Your answer: ');

    if (diffAnswer === diff) {
      successCheck(trueValue, diffAnswer);
    } else if (diffAnswer !== diff) {
      successCheck(falseValue, diffAnswer, diff);
      break;
    }

    console.log(`Question: ${fifthNumber} * ${sixthNumber}`);
    const multiplyAnswer = readlineSync.question('Your answer: ');

    if (multiplyAnswer === multiply) {
      successCheck(trueValue, multiplyAnswer);
    } else if (multiplyAnswer !== multiply) {
      successCheck(falseValue, multiplyAnswer, multiply);
      break;
    }
  }

  return result(userName);
}
