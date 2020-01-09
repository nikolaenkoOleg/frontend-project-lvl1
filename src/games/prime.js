import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
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
