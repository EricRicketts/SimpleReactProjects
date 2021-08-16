import { randomNumberFromInterval } from "./random_number_from_interval";

let randomNumberAndCountObj = { count: undefined, randomNumber: undefined };

export function getCount() {
  return randomNumberAndCountObj.count;
}

function getRandomNumber() {
  return randomNumberAndCountObj.randomNumber;
}

export function incrementCount() {
  randomNumberAndCountObj.count += 1;
}

export function initializeRandomNumber() {
  randomNumberAndCountObj.randomNumber = randomNumberFromInterval(1, 100);
}

export function initializeCount() {
  randomNumberAndCountObj.count = 0;
}
