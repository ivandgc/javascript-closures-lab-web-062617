const app = "I don't do much."

function bumpCounter() {
  let counter = 0;
  function addBump() {counter++}
  function getBumps() { return counter}
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function inner(deadlyDevice) {return {animalType: animalType, deadlyDevice: deadlyDevice }}
  return inner
}

let sharkCreator = createAnimal('shark')
let sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam')
let sharkWithFrickinCannon = createAnimal('Shark')('Cannon')
