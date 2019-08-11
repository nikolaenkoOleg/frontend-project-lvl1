#!/usr/bin/env node

import * as engine from '../engine';

const progressionSize = 10;

const getProgression = (size) => {
  const startProgression = engine.getRandomNumber();
  const stepProgression = engine.getRandomNumber();

  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression[i] = startProgression + (stepProgression * i);
  }

  return progression;
};

const createGameData = () => {
  const fullArray = getProgression(progressionSize);
  let arrWithHiddenElement = [];
  const randomProgressionIndex = engine.getRandomNumber();
  const hiddenElement = fullArray[randomProgressionIndex];

  arrWithHiddenElement = fullArray;
  arrWithHiddenElement[randomProgressionIndex] = '..';
  const gameData = {
    question: arrWithHiddenElement.join(' '),
    answer: hiddenElement,
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData();
  const gameTitle = 'What number is missing in the progression?';

  engine.playGame(gameTitle, createQuestion);
};
