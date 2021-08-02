import { randomNumberFromInterval } from "./random_number_from_interval";

let randomNumber, count;
function incrementCount() {
  count = count + 1;
}
function resetCount() {
  count = 0;
}
function initializeRandomNumber() {
  randomNumber = randomNumberFromInterval(1, 100);
}

export { randomNumber, initializeRandomNumber, count, incrementCount, resetCount };
