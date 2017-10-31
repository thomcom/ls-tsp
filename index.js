const tspLib = require('ls-tsp-lib');
const heapsTSP = require('ls-heaps-tsp');
const kNNTSP = require('ls-knn-tsp');

// Read cities from usa115475.tsp
const fs = require('fs');
let usaTSP = fs.readFileSync('usa115475.tsp').toString().split('\n');

const HEADER_LENGTH = 7;
const NUMBER_OF_CITIES = 10; 
let usaCitiesUnformatted = usaTSP.slice(0+HEADER_LENGTH,NUMBER_OF_CITIES+HEADER_LENGTH);

const usaCities = usaCitiesUnformatted.map((city) => {
  const values = city.split(' ');
  return {name: values[0], x: values[1], y: values[2]};
});

//allPermutationsTSP(usaCities);
//allPermutationsTSP(tspLib.Cities);
let kNNResult = kNNTSP(usaCities);
console.log(kNNResult);
