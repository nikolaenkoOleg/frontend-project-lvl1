#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
engine.showGameDescription('brain-calc');

export const userName = engine.getName();
engine.greetingUser(userName);

const getCorrectAnswer = (num1, num2, sign) => {
  let result = 0;
  if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '*') {
    result = num1 * num2;
  }

  return result;
};

const arithmeticSigns = ['-', '+', '*'];

export const findSolutionGame = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();

  const randomSignIndex = engine.getRandomNumber(arithmeticSigns.length);
  const arithmeticSign = arithmeticSigns[randomSignIndex];
  const question = `${first} ${arithmeticSign} ${second}`;
  engine.askQuestion(question);

  const userAnswer = parseInt(engine.getAnswer(), 10);

  const correctAnswer = getCorrectAnswer(first, second, arithmeticSign);
  const wrongAnswerAcc = 0;

  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};
