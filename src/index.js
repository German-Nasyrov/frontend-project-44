import readlineSync from 'readline-sync';

let successCounter = 0;
export const trueValue = true;
export const falseValue = false;
export const yes = 'yes';
export const no = 'no';

export default function sayHello(description) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  return userName;
}

export function getRandomValue() {
  return Math.floor(Math.random() * 101);
}

export function successCheck(value, answer, rightAnswer) {
  if (value === true) {
    successCounter += 1;
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
    );
  }
}

export function result(userName) {
  return successCounter === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
}
