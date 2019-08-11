#!/usr/bin/env node

import * as engine from '../engine';

const isEven = (num) => {
  const divisor = 2;

  return num % divisor === 0;
};

const boolToYesNo = (bool) => {
  const result = bool ? 'yes' : 'no';

  return result;
};

const createGameData = () => {
  const gameItem = engine.getRandomNumber();
  const gameData = {
    question: gameItem,
    answer: boolToYesNo(isEven(gameItem)),
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

  engine.playGame(gameTitle, createQuestion);
};
