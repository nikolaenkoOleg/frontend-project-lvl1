#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('Find the greatest common divisor of given numbers.');

export const userName = engine.getName();
engine.greetingUser(userName);

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return Math.abs(num1);
};

export const findGsdGame = (answerCounter) => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();

  const question = `${first} ${second}`;
  engine.askQuestion(question);
  const correctAnswer = findGcd(first, second);
  const userAnswer = parseInt(engine.getAnswer(), 10);

  const wrongAnswerIndex = 1;
  let answerChecker = answerCounter;
  if (userAnswer === correctAnswer) {
    engine.showCorrectMessage();
  } else if (userAnswer !== correctAnswer) {
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  }

  return answerChecker;
};
