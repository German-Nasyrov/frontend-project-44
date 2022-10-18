import readlineSync from 'readline-sync';
import sayHello, { getRandomValue, result, successCheck } from '../src/index.js';

const isPrimeNum = (number) => {
  if (number < 2) return false;

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

export default function prime() {
  const explain = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const userName = sayHello(explain);

  for (let i = 0; i < 3; i += 1) {
    const trueValue = true;
    const falseValue = false;
    const randomNum = getRandomValue();
    const question = isPrimeNum(randomNum);
    const yes = 'yes';
    const no = 'no';
    let answer = '';
    console.log(`Question: ${randomNum}`);
    answer = readlineSync.question('Your answer: ');

    if ((question && answer === yes) || (!question && answer === no)) {
      successCheck(trueValue, answer);
    } else if ((!question && answer === yes) || (question && answer !== no)) {
      successCheck(falseValue, answer, no);
      break;
    } else {
      successCheck(falseValue, answer, yes);
      break;
    }
  }

  return result(userName);
}
