import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => {
  if (second) {
    return findGcd(second, first % second);
  }

  return first;
};

const createGameData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const gameData = {
    question: `${first} ${second}`,
    answer: String(findGcd(first, second)),
  };

  return gameData;
};

export default () => engine(gameDescription, createGameData);
