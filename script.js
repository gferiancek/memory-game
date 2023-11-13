const gameContainer = document.getElementById('game');

/**
 * Generates a list of gameData in the format of {text, match}.
 * @param {Array} src Determines which list we will use, either HIRAGANA or KATAKANA, from kana.js.
 * @param {Number} batchSize Determines how many items will be pulled from src.
 * @returns {Array} Shuffled list of items to be used in current round of the game.
 */
function generateGameData(src, batchSize) {
  // Gets a random selection from the src, based on batchsize.
  let selection = shuffle(src).slice(0, batchSize);
  let gameData = [];

  // Each item in selection will become two separate cards, one EN and one JP,
  // so we create two objects to add to kanaList.
  for (let item of selection) {
    gameData.push({ text: item.jp, match: item.en });
    gameData.push({ text: item.en, match: item.jp });
  }
  // All matching pairs are side by side, so we reshuffle
  return shuffle(gameData);
}

/**
 * Helper function that takes an Array and shuffles it with the Fisher Yates algorithim.
 * @param {Array} array Input array to be shuffled.
 * @returns {Array} Input array with the order shuffled.
 */
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/**
 * Creates + Appends a card element to our main gameContainer for each item in gameData.
 * @param {Array} gameData List of data in the format of {text, match}
 */
function createCardElements(gameData) {
  // Since our 'matches' are different items, each card needs to know
  // both what it's own data is and what its match is.
  for (let item of gameData) {
    const card = document.createElement('div');
    card.className = 'card card--face-down';
    card.dataset.match = item.match;

    const text = document.createElement('p');
    text.innerText = item.text;
    card.append(text);
    gameContainer.append(card);
  }
}

gameContainer.addEventListener('click', handleCardClick);

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log('you just clicked', event.target);
}

// TODO: Generate based on user input
let batchSize = 5;

// TODO: Select from HIRAGANA or KATAKANA based on user input.
let src = HIRAGANA;

// when the DOM loads
createCardElements(generateGameData(src, batchSize));
