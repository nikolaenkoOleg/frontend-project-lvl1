#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
engine.showGameDescription('brain-even');

export const userName = engine.getName();
engine.greetingUser(userName);

const isEven = (num) => {
  const divisor = 2;
  if (num % divisor === 0) {
    return true;
  }

  return false;
};

export const findEvenGame = () => {
  const gameItem = engine.getRandomNumber();
  engine.askQuestion(gameItem);

  const userAnswer = engine.getAnswer();
  const correctAnswer = engine.boolToYesNo(isEven(gameItem));

  const wrongAnswerAcc = 0;
  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};

export const play = () => {
  engine.gameIteration(findEvenGame, userName);
};
