const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

const totalBirdCount = (birdsPerDay) => {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum = sum + birdsPerDay[i];
  }
  return sum;
};

console.log(totalBirdCount(birdsPerDay));

//  Calculates the total number of birds seen in a specific week.
const birdsInWeek = (birdsPerDay, week) => {
  let totalWeek = 0;
  for (let i = week * 7 - 7; i < week * 7; i++) {
    totalWeek += birdsPerDay[i];
  }
  return totalWeek;
};

//  Fixes the counting mistake by increasing the bird count  by one for every second day.
const fixBirdCountLog = (birdsPerDay) => {
  const result = birdsPerDay;
  for (var i = 0; i < birdsPerDay.length; i += 2) {
    result[i] = birdsPerDay[i] + 1;
  }
  return result;
};
