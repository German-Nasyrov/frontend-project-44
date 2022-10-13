import readlineSync from 'readline-sync';

export default function sayHello() {
  const { method } = readlineSync;

  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
}
