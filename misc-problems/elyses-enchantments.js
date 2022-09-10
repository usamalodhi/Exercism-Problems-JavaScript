// Retrieve card from cards array at the 0-based position

const cards = [5, 4, 7, 9, 10];

const getItem = (cards, position) => {
  return cards[position];
};

// Exchange card with replacementCard at the 0-based position
const setItem = (cards, position, replacementCard) => {
  cards[position] = replacementCard;
  return cards;
};

// Insert newCard at the end of the cards array
const insertItemAtTop = (cards, newCard) => {
  cards.push(newCard);
  return cards;
};

// Remove the card at the 0-based position
const removeItem = (cards, position) => {
  cards.splice(position, 1);
  return cards;
};

//  Remove card from the end of the cards array

const removeItemFromTop = (cards) => {
  cards.pop();
  return cards;
};

// Insert newCard at beginning of the cards array

const insertItemAtBottom = (cards, newCard) => {
  cards.unshift(newCard);
  return cards;
};

// Remove card from the beginning of the cards
const removeItemAtBottom = (cards) => {
  cards.shift();
  return cards;
};

const checkSizeOfStack = (cards, stackSize) => {
  return cards.length == stackSize;
};
