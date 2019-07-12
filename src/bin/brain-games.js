#!/usr/bin/env node
import readlineSync from 'readline-sync';
import even from './games/brain-even';
import calc from './games/brain-calc';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!\n`);
console.log('The following games are available to you:');

console.log('brain-even\nbrain-calc');
const gameTitle = readlineSync.question(`${userName}, select your game from the list upper and press Enter: `);

switch (gameTitle) {
  case 'brain-even':
    even(userName);
    break;
  case 'brain-calc':
    calc(userName);
    break;
  default:
    console.log('Error. Check game title');
}
