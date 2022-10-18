import readlineSync from 'readline-sync';
import sayHello, {
  trueValue,
  falseValue,
  getRandomValue,
  result,
  successCheck,
} from '../src/index.js';

const explain = 'What is the result of the expression?';

export default function isResultEquals() {
  const userName = sayHello(explain);

  for (let i = 0; i < 1; i += 1) {
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
    } else {
      successCheck(falseValue, sumAnswer, sum);
      break;
    }

    console.log(`Question: ${thirdNumber} - ${fourthNumber}`);
    const diffAnswer = readlineSync.question('Your answer: ');

    if (diffAnswer === diff) {
      successCheck(trueValue, diffAnswer);
    } else {
      successCheck(falseValue, diffAnswer, diff);
      break;
    }

    console.log(`Question: ${fifthNumber} * ${sixthNumber}`);
    const multiplyAnswer = readlineSync.question('Your answer: ');

    if (multiplyAnswer === multiply) {
      successCheck(trueValue, multiplyAnswer);
    } else {
      successCheck(falseValue, multiplyAnswer, multiply);
      break;
    }
  }

  return result(userName);
}
