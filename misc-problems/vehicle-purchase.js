// Determines whether or not you need a licence to operate a certain kind of vehicle.
const needsLicense = (kind) => {
  const vehicleNeedsLicense = ['car', 'truck'];
  return vehicleNeedsLicense.includes(kind);
};

// Helps choosing between two options by recommending the one that
// comes first in dictionary order.
const chooseVehicle = (option1, option2) => {
  const phrase = ' is clearly the better choice';
  return option1.charAt(0) < option2.charAt(0)
    ? option1 + phrase
    : option2 + phrase;
};

// Calculates an estimate for the price of a used vehicle in the dealership
// based on the original price and the age of the vehicle.
const calculateResellPrice = (originalPrice, age) => {
  if (age < 3) return originalPrice * 0.8;
  else if (age <= 10) return originalPrice * 0.7;
  else return originalPrice * 0.5;
};
