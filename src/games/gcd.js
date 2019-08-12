#!/usr/bin/env node

import * as engine from '../engine';

const findGcd = (first, second) => {
  if (second) {
    return findGcd(second, first % second);
  }

  return Math.abs(first);
};

const createGameData = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();
  const gameData = {
    question: `${first} ${second}`,
    answer: String(findGcd(first, second)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'Find the greatest common divisor of given numbers.';

  engine.playGame(gameTitle, createQuestion);
};
