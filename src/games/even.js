#!/usr/bin/env node

import * as engine from '../engine';

const isEven = (num) => {
  const divisor = 2;
  if (num % divisor === 0) {
    return true;
  }

  return false;
};

const gameItem = engine.getRandomNumber();
const question = gameItem;
const correctAnswer = engine.boolToYesNo(isEven(gameItem));

export default () => {
  engine.playGame('brain-even', question, correctAnswer);
};
