import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (item) => {
  if (item === 2) return true;
  if (item < 2 || item % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(item); i += 2) {
    if (item % i === 0) return false;
  }

  return true;
};

const createGameData = () => {
  const question = getRandomNumber();
  const gameData = {
    question,
    answer: isPrime(question) ? 'yes' : 'no',
  };

  return gameData;
};

export default () => engine(gameDescription, createGameData);
