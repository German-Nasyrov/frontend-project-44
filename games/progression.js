import readlineSync from 'readline-sync';
import {
  getRandomValue,
  getRandomIntInclusive,
  result,
  successCheck,
} from '../src/index.js';

let array = [];
let rightAnswer = '';

function progression() {
  const randomNum = getRandomValue();
  const elemCount = getRandomIntInclusive(4, 10);
  const randomStep = getRandomIntInclusive(1, 11);
  const chooseElem = getRandomIntInclusive(0, elemCount);
  for (let i = 0; i <= elemCount; i += 1) {
    array.push(i * randomStep + randomNum);
  }
  rightAnswer = String(array[chooseElem]);
  array[chooseElem] = '..';

  return array.join(' ');
}

export default function calcNum() {
  const trueValue = true;
  const falseValue = false;
  let answer = '';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 1; i += 1) {
    const firstProgression = progression();
    console.log(`Question: ${firstProgression}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      successCheck(trueValue, answer);
      array = [];
    } else if (answer !== rightAnswer) {
      successCheck(falseValue, answer, rightAnswer);
      break;
    }

    const secondProgression = progression();
    console.log(`Question: ${secondProgression}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      successCheck(trueValue, answer);
      array = [];
    } else if (answer !== rightAnswer) {
      successCheck(falseValue, answer, rightAnswer);
      break;
    }

    const thirdProgression = progression();
    console.log(`Question: ${thirdProgression}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      successCheck(trueValue, answer);
    } else if (answer !== rightAnswer) {
      successCheck(falseValue, answer, rightAnswer);
      break;
    }
  }

  return result(userName);
}
