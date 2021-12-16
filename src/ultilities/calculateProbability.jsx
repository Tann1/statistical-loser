import {binomialDistribution} from 'simple-statistics';


//Caluates P(X >= x) = 1 - P(X < x) where x = numberOfSuccessfulEvents with n trials
const calucateProbability = (trials, numberOfSuccessfulEvents, probability) => {
  const result = binomialDistribution(trials, probability);
  let cumulativeResult = 0;
  console.log(result);
  for (let x = 0; x < numberOfSuccessfulEvents; x++)
    cumulativeResult += result[x];
  return 1 - cumulativeResult; 
}

export default calucateProbability;