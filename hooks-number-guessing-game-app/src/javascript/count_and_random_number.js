import { randomNumberFromInterval } from "./random_number_from_interval";

let randomNumberAndCountObj = { count: undefined, randomNumber: undefined };

function getCount() {
  return randomNumberAndCountObj.count;
}

function getRandomNumber() {
  return randomNumberAndCountObj.randomNumber;
}

function incrementCount() {
  randomNumberAndCountObj.count += 1;
}

function initializeRandomNumber() {
  randomNumberAndCountObj.randomNumber = randomNumberFromInterval(1, 100);
}

function initializeCount() {
  randomNumberAndCountObj.count = 0;
}


export { getCount, getRandomNumber, initializeCount, initializeRandomNumber, incrementCount };