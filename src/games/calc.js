import engine from '../engine';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const signs = ['-', '+', '*'];

const getCorrectAnswer = (first, second, sign) => {
  switch (sign) {
    case '-':
      return first - second;
    case '+':
      return first + second;
    case '*':
      return first * second;
    default:
      break;
  }

  return 0;
};

const createGameData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const arithmeticSign = signs[getRandomNumber(signs.length)];
  const gameData = {
    question: `${first} ${arithmeticSign} ${second}`,
    answer: String(getCorrectAnswer(first, second, arithmeticSign)),
  };

  return gameData;
};

export default () => engine(gameDescription, createGameData);
