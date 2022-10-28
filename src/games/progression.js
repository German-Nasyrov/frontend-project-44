import getRandomNum from '../helper.js';
import runLoop from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRound = () => {
  const beginOfProgression = getRandomNum(0, 100);
  const stepOfProgression = getRandomNum(1, 10);
  const progressionLength = getRandomNum(5, 10);
  const progression = getProgression(
    beginOfProgression,
    stepOfProgression,
    progressionLength,
  );
  const indexOfHiddenElement = getRandomNum(0, progression.length - 1);
  const hiddenElement = progression.splice(indexOfHiddenElement, 1, '..');
  const question = progression.join(' ');
  const answer = String(hiddenElement);

  return [question, answer];
};

const playBrainProgression = () => {
  runLoop(getRound, description);
};

export default playBrainProgression;
