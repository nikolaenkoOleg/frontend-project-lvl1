#!/usr/bin/env node

import * as engine from '../engine';

const isEven = (num) => {
  const divisor = 2;
  if (num % divisor === 0) {
    return true;
  }

  return false;
};

export default () => {
  const createQuestion = () => engine.getRandomNumber();
  const createAnswer = question => engine.boolToYesNo(isEven(question));

  engine.playGame('brain-even', createQuestion, createAnswer);
};
