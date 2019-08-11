#!/usr/bin/env node

import * as engine from '../engine';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const boolToYesNo = (bool) => {
  const result = bool ? 'yes' : 'no';

  return result;
};

const createGameData = () => {
  const gameitem = engine.getRandomNumber(20);
  const gameData = {
    question: gameitem,
    answer: boolToYesNo(isPrime(gameitem)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  engine.playGame(gameTitle, createQuestion);
};
