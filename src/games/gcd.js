#!/usr/bin/env node

import * as engine from '../engine';

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return String(Math.abs(num1));
};

const createGameData = (num1, num2) => {
  const gameData = {
    question: `${num1} ${num2}`,
    answer: findGcd(num1, num2),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData(engine.getRandomNumber(), engine.getRandomNumber());

  engine.playGame('brain-gcd', createQuestion);
};
