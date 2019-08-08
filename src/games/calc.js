#!/usr/bin/env node

import * as engine from '../engine';

const getCorrectAnswer = (num1, num2, sign) => {
  let result = 0;
  if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '*') {
    result = num1 * num2;
  }

  return String(result);
};

const arithmeticSigns = ['-', '+', '*'];

const createGameData = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();
  const randomSignIndex = engine.getRandomNumber(arithmeticSigns.length);
  const arithmeticSign = arithmeticSigns[randomSignIndex];
  const gameData = {
    question: `${first} ${arithmeticSign} ${second}`,
    answer: getCorrectAnswer(first, second, arithmeticSign),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();

  engine.playGame('brain-calc', createQuestion);
};
