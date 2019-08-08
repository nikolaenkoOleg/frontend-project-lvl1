#!/usr/bin/env node

import * as engine from '../engine';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createGameData = (num) => {
  const gameData = {
    question: num,
    answer: engine.boolToYesNo(isPrime(num)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData(engine.getRandomNumber());

  engine.playGame('brain-prime', createQuestion);
};
