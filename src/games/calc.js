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
const randomSignIndex = engine.getRandomNumber(arithmeticSigns.length);
const arithmeticSign = arithmeticSigns[randomSignIndex];

export default () => {
  const createQuestion = () => {
    const first = engine.getRandomNumber();
    const second = engine.getRandomNumber();

    return `${first} ${arithmeticSign} ${second}`;
  };
  const createAnswer = (question) => {
    const first = 0;
    const second = 4;
    const sign = 2;

    return getCorrectAnswer(
      parseInt(question[first], 10),
      parseInt(question[second], 10),
      question[sign],
    );
  };

  engine.playGame('brain-calc', createQuestion, createAnswer);
};
