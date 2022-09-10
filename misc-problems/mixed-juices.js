// Determines how long it takes to prepare a certain juice.
const timeToMixJuice = (name) => {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
};

console.log(timeToMixJuice('Tropical Island'));

// Calculates the number of limes that need to be cut
// to reach a certain supply.
const limeSizes = {
  small: 6,
  medium: 8,
  large: 10,
};

const limesToCut = (wedgesNeeded, limes) => {
  let limeNumber = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
    limeNumber++;
    wedgesNeeded -= limeSizes[limes.shift()];
  }
  return limeNumber;
};

// Determines which juices still need to be prepared after the end of the shift.
const remainingOrders = (timeLeft, orders) => {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
};
