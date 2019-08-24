import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionSize = 10;

const getProgression = (size, start, step) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression[i] = start + (step * i);
  }

  return progression;
};

const createGameData = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const progression = getProgression(progressionSize, start, step);

  const hiddenElementIndex = getRandomNumber(0, progressionSize - 1);
  const answer = progression[hiddenElementIndex];

  const question = progression;
  question[hiddenElementIndex] = '..';
  const gameData = {
    question: question.join(' '),
    answer,
  };

  return gameData;
};

export default () => engine(gameDescription, createGameData);
