import readlineSync from 'readline-sync';

let successCounter = 0;

export default function sayHello() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export function getRandomValue() {
  return Math.floor(Math.random() * 101);
}

export function getRandomIntInclusive(minNum, maxNum) {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function calculateGcd(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return calculateGcd(secondNumber, firstNumber % secondNumber);
}

export const isPrimeNum = (number) => {
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
