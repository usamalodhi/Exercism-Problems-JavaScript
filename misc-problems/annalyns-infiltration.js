const knightIsAwake = true;
const archerIsAwake = true;
const prisonerIsAwake = true;
const petDogIsPresent = true;

// The fast attack is available when the knight is sleeping
const canExecuteFastAttack = (knightIsAwake) => {
  return knightIsAwake ? false : true;
};

// A useful spy captures information, which they can't do if everyone's asleep.
const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
  return !knightIsAwake && !archerIsAwake && !prisonerIsAwake ? false : true;
};

// You'll get caught by the archer if you signal while they're awake.
// Whether or not you can send a signal to the prisoner.
const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
  return !archerIsAwake && prisonerIsAwake ? true : false;
};

// The final stage in the plan: freeing Annalyn's best friend.
const canFreePrisoner = (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) => {
  return (!archerIsAwake && petDogIsPresent) ||
    (!petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake)
    ? true
    : false;
};
