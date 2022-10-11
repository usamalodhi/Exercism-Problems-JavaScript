/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.';
  } else if (time > 0) {
    return 'Not done, please wait.';
  }
  return 'You forgot to set the timer.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(ingredients) {
  return {
    noodles: ingredients.filter((i) => i === 'noodles').length * 50,
    sauce: ingredients.filter((i) => i === 'sauce').length * 0.2,
  };
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, amount) {
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = (recipe[key] * amount) / 2;
  }
  return scaled;
}
