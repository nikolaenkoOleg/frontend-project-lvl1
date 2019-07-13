import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * 42));

const getArithmeticProgression = () => {
  const startNumber = getRandomNumber(); // определяем стартовое число прогрессии
  const stepNumber = getRandomNumber(); // определяем шаг прогрессии

  const arr = [startNumber]; // спросить про const тут...
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + stepNumber;
  }

  return arr;
};

export default (userName) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = getArithmeticProgression(); // массив с прогрессией
    const randomProgressionIndex = Math.floor(Math.random() * 10); /* индекс случайного элемента в
    массиве от 0 до 10 */

    const correctAnswer = progression[randomProgressionIndex]; // формируем правильный ответ...
    progression[randomProgressionIndex] = '..'; // и меняем его на двоеточие

    const stringProgression = progression.join(' '); // прогрессия в виде строки для пользователя
    console.log(`Question: ${stringProgression}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}.`);
			return;
    }
  }
  console.log(`\nCongratulations, ${userName}!!!`);
};
