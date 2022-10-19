import readlineSync from 'readline-sync';
import sayHello, {
  firstRound,
  thirdRound,
  trueValue,
  falseValue,
  yes,
  no,
  getRandomValue,
  result,
  successCheck,
} from '../src/index.js';

const explain = 'Answer "yes" if the number is even, otherwise answer "no".';
const userName = sayHello(explain);

const isNumberEven = () => {
  for (let i = firstRound; i <= thirdRound; i += 1) {
    console.log(`Question: ${getRandomValue()}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      // eslint-disable-next-line operator-linebreak
      (getRandomValue() % 2 === 0 && answer === yes) ||
      (getRandomValue() % 2 !== 0 && answer === no)
    ) {
      successCheck(trueValue, answer);
    } else if (
      // eslint-disable-next-line operator-linebreak
      (getRandomValue() % 2 === 0 && answer === no) ||
      (getRandomValue() % 2 === 0 && answer !== no)
    ) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (
      // eslint-disable-next-line operator-linebreak
      (getRandomValue() % 2 !== 0 && answer === yes) ||
      (getRandomValue() % 2 !== 0 && answer !== yes)
    ) {
      successCheck(falseValue, answer, no);
      break;
    }
  }
  return result(userName);
};

export default isNumberEven;
