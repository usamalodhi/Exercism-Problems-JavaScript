// Creates a new score board with an initial entry.
const createScoreBoard = () => {
  const board = {
    'Player One': 100,
  };
  return board;
};

console.log(createScoreBoard());

// Adds a player to a score board.
const addPlayer = (scoreBoard, player, score) => {
  scoreBoard[player] = score;
  return scoreBoard;
};

console.log(addPlayer('Second Board', 'Player Two', 200));

// Removes a player from a score board.
const removePlayer = (scoreBoard, player) => {
  delete scoreBoard[player];
  return scoreBoard;
};

const updateScore = (scoreBoard, player, points) => {
  scoreBoard[player] += points;
  return scoreBoard;
};

const applyMondayBonus = (scoreBoard) => {
  for (let i in scoreBoard) {
    scoreBoard[i] += 100;
  }
  return scoreBoard;
};

const normalizeScore = (params) => {
  return params.normalizeFunction(params.score);
};
