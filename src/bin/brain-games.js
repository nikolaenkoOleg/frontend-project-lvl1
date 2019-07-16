#!/usr/bin/env node

import readlineSync from 'readline-sync';
import even from './games/brain-even';
import calc from './games/brain-calc';
import gcd from './games/brain-gcd';
import prog from './games/brain-prog';
import prime from './games/brain-prime';

const games = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  const gameLoop = true; // для работы игры, пока пользователь не выйдет из нее
  while (gameLoop) {
    console.log('The following games are available for you:');

    console.log('brain-even\nbrain-calc\nbrain-gcd\nbrain-prog\nbrain-prime');
    const gameTitle = readlineSync.question(`${userName}, select your game from the list upper and press Enter: `);

    switch (gameTitle) {
      case 'brain-even':
        even(userName);
        break;
      case 'brain-calc':
        calc(userName);
        break;
      case 'brain-gcd':
        gcd(userName);
        break;
      case 'brain-prog':
        prog(userName);
        break;
      case 'brain-prime':
        prime(userName);
        break;
      default:
        console.log('Error. Check game title and try again');
    }

    const exitLoop = true;
    while (exitLoop) {
      const nextRoundChecker = readlineSync.question('Do you want continue the game? [N/Y]:');

      if (nextRoundChecker === 'N' || nextRoundChecker === 'n') {
        console.log(`Goodbye ${userName}!`);
        return;
      }
      console.log('Error! Use "N/Y" keys');
    }
  }
};

games();
