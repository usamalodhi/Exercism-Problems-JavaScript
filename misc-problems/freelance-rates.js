const dayRate = (ratePerHour) => {
  return ratePerHour * 8;
};

console.log(dayRate(89));
// Calculates the number of days in a budget, rounded down

const daysInBudget = (budget, ratePerHour) => {
  return Math.floor(budget / (ratePerHour * 8));
};

console.log(daysInBudget(20000, 89));

//  Calculates the discounted rate for large projects, rounded up

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  let fullMonths = numDays / 22;
  let leftOverDays = numDays % 22;
  let discountRate = 1.0 - discount;
  let monthlyDiscount = ratePerHour * discountRate * 8;
  let discountedTotal = monthlyDiscount * (fullMonths * 22);
  let fullPriceTotal = leftOverDays * (ratePerHour * 8);
  return Math.ceil(discountedTotal + fullPriceTotal);
};

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
