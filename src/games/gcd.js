#!/usr/bin/env node

import * as engine from '../engine';

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return Math.abs(num1);
};

const createGameData = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();
  const gameData = {
    question: `${first} ${second}`,
    answer: String(findGcd(first, second)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'Find the greatest common divisor of given numbers.';

  engine.playGame(gameTitle, createQuestion);
};
