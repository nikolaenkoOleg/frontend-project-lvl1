#!/usr/bin/env node

import * as engine from '../engine';

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return String(Math.abs(num1));
};

export default () => {
  const createQuestion = () => {
    const first = engine.getRandomNumber(20);
    const second = engine.getRandomNumber(20);

    return `${first} ${second}`;
  };
  const createAnswer = (question) => {
    const first = 0;
    const second = 2;

    return findGcd(parseInt(question[first], 10), parseInt(question[second], 10));
  };

  engine.playGame('brain-gcd', createQuestion, createAnswer);
};
