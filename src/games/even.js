import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const createGameData = () => {
  const question = getRandomNumber();
  const gameData = {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  };

  return gameData;
};

export default () => engine(gameDescription, createGameData);
