#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('Answer "yes" if number even otherwise answer "no".');

export const userName = engine.getName();
engine.greetingUser(userName);

const getCorrectAnswer = (divisor, item) => {
  let result = '';
  if (item % divisor === 0) {
    result = 'yes';
    return result;
  }
  result = 'no';
  return result;
};

export const findEvenGame = () => {
  const gameItem = engine.getRandomNumber();
  engine.askQuestion(gameItem);

  const userAnswer = engine.getAnswer();
  const wrongAnswerAcc = 0;
  const parirtyDivisor = 2;
  const correctAnswer = getCorrectAnswer(parirtyDivisor, gameItem);

  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};
