import readlineSync from 'readline-sync';
import sayHello, { getRandomValue, result, successCheck } from '../src/index.js';

export default function isNumberEven() {
  const explain = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = sayHello(explain);

  for (let i = 0; i < 3; i += 1) {
    const trueValue = true;
    const falseValue = false;
    const yes = 'yes';
    const no = 'no';
    const genNum = getRandomValue();

    console.log(`Question: ${genNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (
      // eslint-disable-next-line operator-linebreak
      (genNum % 2 === 0 && answer === yes) ||
      (genNum % 2 !== 0 && answer === no)
    ) {
      successCheck(trueValue, answer);
    } else if (
      // eslint-disable-next-line operator-linebreak
      (genNum % 2 === 0 && answer === no) ||
      (genNum % 2 === 0 && answer !== no)
    ) {
      successCheck(falseValue, answer, yes);
      break;
    } else if (
      // eslint-disable-next-line operator-linebreak
      (genNum % 2 !== 0 && answer === yes) ||
      (genNum % 2 !== 0 && answer !== yes)
    ) {
      successCheck(falseValue, answer, no);
      break;
    }
  }

  return result(userName);
}
