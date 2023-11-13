/**
 * Variables
 */
const gameContainer = document.querySelector('.game');
const settingsForm = document.querySelector('.settings');
const activeCards = [];
let totalMatches;
let currentMatches;
let moves;
// TODO: Implement localStorage to save lowestMoves!
let lowestMoves = -1;

/**
 * Methods
 */
/**
 * Fires upon user hitting the 'Start' button. Reads user input, grabs the correct SRC and DIFFICULTY from const.js, and starts a new round of the game.
 * @param {SubmitEvent} event Event containing the data from the settings form.
 */
function configureRound(event) {
  event.preventDefault();
  initializeGame();

  // Getting value of checked radio buttons
  let src = document.querySelector('input[name="src"]:checked').value;
  let difficulty = document.querySelector('input[name="difficulty"]:checked').value;

  totalMatches = DIFFICULTY_SETTINGS[difficulty];
  let gameData = generateGameData(SRC_SETTINGS[src], totalMatches);
  createCardElements(gameData);
}

/**
 * Function that initializes the game to a default state.
 */
function initializeGame() {
  totalMatches = 0;
  currentMatches = 0;
  moves = 0;
  activeCards.length = 0;
  // Used to remove '.game__results' if it is present.
  if (gameContainer.hasChildNodes()) {
    gameContainer.firstChild.remove();
  }
}

/**
 * Generates a list of gameData in the format of {text, match}.
 * @param {Array} src Determines which list we will use, either HIRAGANA or KATAKANA, from const.js.
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

    const cardText = document.createElement('p');
    cardText.classList.add('card__text');
    cardText.innerText = item.text;
    card.append(cardText);

    gameContainer.append(card);
  }
}

/**
 * Takes click event inside .game-container and runs it through the following logic:
 *
 * 1. Ignore clicks that are not on cards. (i.e in the space between cards)
 *
 * 2. A max of two cards can be active at any given moment.
 *
 * 3. A single card can not be counted as active twice (i.e. ignore duplicate clicks)
 *
 * 4. If #2 & #3 conditions are not broken, flip the card and add it to activeCards
 *
 * 5. If two cards are active, check if they match.
 * @param {PointerEvent} event Event containing data from Click Event inside game-container.
 */
function handleCardClick(event) {
  // Ignoring clicks that don't occur on cards
  if (event.target.className !== 'game') {
    const card = event.target;

    switch (activeCards.length) {
      case 0:
        card.classList.toggle('card--face-down');
        activeCards.push(card);
        break;
      case 1:
        if (activeCards[0].innerText !== card.innerText) {
          card.classList.toggle('card--face-down');
          activeCards.push(card);
          moves++;
          setTimeout(calculateMatch, 1000);
        }
        break;
    }
  }
}

/**
 * Checks if the two active cards match, updates their card--face-down class accordingly, and removes the cards from the activeCards array.
 */
function calculateMatch() {
  let firstValue = activeCards[0].innerText;
  let secondMatch = activeCards[1].dataset.match;

  // If firstValue === secondMatch, then secondValue === firstMatch
  // so the inverse check is omitted.
  if (firstValue === secondMatch) {
    currentMatches++;
    if (totalMatches === currentMatches) {
      endGame();
    }
  } else {
    for (card of activeCards) {
      card.classList.toggle('card--face-down');
    }
  }
  // clear activeCards
  activeCards.length = 0;
}

/**
 * Removes all cards and displays the game results to the screen.
 */
function endGame() {
  while (gameContainer.lastChild) {
    gameContainer.lastChild.remove();
  }
  gameContainer.append(generateResultsScreen());
}

/**
 * Creates necessary elements for Results screen and populates with relevant data.
 * @returns {HTMLDivElement} Div containing game over message, moves taken, lowest moves taken, and retry message.
 */
function generateResultsScreen() {
  const results = document.createElement('div');
  results.classList.add('game__results');

  const message = document.createElement('p');
  message.innerText = "Game Over. Here's how you did:";

  const total = document.createElement('p');
  total.innerText = `Moves Taken: ${moves}`;

  const least = document.createElement('p');
  least.innerText = `Lowest # of Moves Taken: ${lowestMoves}`;

  const restart = document.createElement('p');
  restart.innerText = 'Click start to try again!';

  return results.append(message, total, least, restart);
}
/**
 * Events
 **/
settingsForm.addEventListener('submit', configureRound);
gameContainer.addEventListener('click', handleCardClick);
