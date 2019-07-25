#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('Answer "yes" if number even otherwise answer "no".');

export const userName = engine.getName();
engine.greetingUser(userName);

export const findEvenGame = (answerCounter) => {
  const gameItem = engine.getRandomNumber();
  engine.askQuestion(gameItem);

  const userAnswer = engine.getAnswer();
  const parirtyDivisor = 2;
  const wrongAnswerIndex = 1;

  let answerChecker = answerCounter;

  if (gameItem % parirtyDivisor === 0 && userAnswer === 'yes') {
    engine.showCorrectMessage();
  } else if (gameItem % parirtyDivisor === 0 && userAnswer !== 'yes') {
    const correctAnswer = 'yes';
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  } else if (gameItem % parirtyDivisor !== 0 && userAnswer === 'no') {
    engine.showCorrectMessage();
  } else if (gameItem % parirtyDivisor !== 0 && userAnswer !== 'no') {
    const correctAnswer = 'no';
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  }

  return answerChecker;
};
