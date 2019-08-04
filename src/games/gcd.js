#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
engine.showGameDescription('brain-gcd');

export const userName = engine.getName();
engine.greetingUser(userName);

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return Math.abs(num1);
};

export const findGsdGame = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();

  const question = `${first} ${second}`;
  engine.askQuestion(question);
  const correctAnswer = findGcd(first, second);
  const userAnswer = parseInt(engine.getAnswer(), 10);

  const wrongAnswerAcc = 0;
  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};
