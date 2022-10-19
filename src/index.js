import readlineSync from 'readline-sync';

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

let successCounter = 0;
export const trueValue = true;
export const falseValue = false;
export const yes = 'yes';
export const no = 'no';
export const firstNumber = getRandomValue();
export const secondNumber = getRandomValue();
export const thirdNumber = getRandomValue();
export const fourthNumber = getRandomValue();
export const fifthNumber = getRandomValue();
export const sixthNumber = getRandomValue();
export const sum = String(firstNumber + secondNumber);
export const diff = String(thirdNumber - fourthNumber);
export const multiply = String(fifthNumber * sixthNumber);

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
