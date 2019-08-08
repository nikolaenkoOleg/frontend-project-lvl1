#!/usr/bin/env node

import * as engine from '../engine';

const isEven = (num) => {
  const divisor = 2;
  if (num % divisor === 0) {
    return true;
  }

  return false;
};

const createGameData = (num) => {
  const gameData = {
    question: num,
    answer: engine.boolToYesNo(isEven(num)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData(engine.getRandomNumber());

  engine.playGame('brain-even', createQuestion);
};
