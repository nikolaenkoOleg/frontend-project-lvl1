#!/usr/bin/env node

import * as engine from '../engine';

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default () => {
  const createQuestion = () => engine.getRandomNumber();
  const createAnswer = question => engine.boolToYesNo(isPrime(question));

  engine.playGame('brain-prime', createQuestion, createAnswer);
};
