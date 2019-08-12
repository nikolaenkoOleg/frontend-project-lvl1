#!/usr/bin/env node

import * as engine from '../engine';

const getCorrectAnswer = (first, second, sign) => {
  let result = 0;
  switch (sign) {
    case '-':
      result = first - second;
      break;
    case '+':
      result = first + second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      break;
  }

  return result;
};

const sign = ['-', '+', '*'];

const createGameData = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();
  const arithmeticSign = sign[engine.getRandomNumber(sign.length)];
  const gameData = {
    question: `${first} ${arithmeticSign} ${second}`,
    answer: String(getCorrectAnswer(first, second, arithmeticSign)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'What is the result of the expression?';

  engine.playGame(gameTitle, createQuestion);
};
