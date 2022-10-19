import readlineSync from 'readline-sync';
import sayHello, {
  firstRound,
  thirdRound,
  trueValue,
  falseValue,
  getRandomValue,
  result,
  successCheck,
} from '../src/index.js';

const explain = 'Find the greatest common divisor of given numbers.';
const userName = sayHello(explain);
const calculateGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return calculateGcd(secondNumber, firstNumber % secondNumber);
};

const gcd = () => {
  for (let i = firstRound; i <= thirdRound; i += 1) {
    const firstNumber = getRandomValue();
    const secondNumber = getRandomValue();
    const resultGcd = String(calculateGcd(firstNumber, secondNumber));
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === resultGcd) successCheck(trueValue, answer);
    else {
      successCheck(falseValue, answer, resultGcd);
      break;
    }
  }
  return result(userName);
};

export default gcd;
