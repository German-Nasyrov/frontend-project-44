import readlineSync from 'readline-sync';
import sayHello, {
  firstRound,
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  sixthNumber,
  trueValue,
  falseValue,
  sum,
  diff,
  multiply,
  result,
  successCheck,
} from '../src/index.js';

const explain = 'What is the result of the expression?';
let i = firstRound;
const userName = sayHello(explain);

const isResultEquals = () => {
  while (i <= firstRound) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    const sumAnswer = readlineSync.question('Your answer: ');
    if (sumAnswer === sum) {
      successCheck(trueValue, sumAnswer);
      i += 1;
    } else {
      successCheck(falseValue, sumAnswer, sum);
      break;
    }
    console.log(`Question: ${thirdNumber} - ${fourthNumber}`);
    const diffAnswer = readlineSync.question('Your answer: ');
    if (diffAnswer === diff) {
      successCheck(trueValue, diffAnswer);
      i += 1;
    } else {
      successCheck(falseValue, diffAnswer, diff);
      break;
    }
    console.log(`Question: ${fifthNumber} * ${sixthNumber}`);
    const multiplyAnswer = readlineSync.question('Your answer: ');
    if (multiplyAnswer === multiply) {
      successCheck(trueValue, multiplyAnswer);
      i += 1;
    } else {
      successCheck(falseValue, multiplyAnswer, multiply);
      break;
    }
  }
  return result(userName);
};

export default isResultEquals;
