//3. The following is an array of 10 students ages:

//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log("Minimum age is ",Math.min(...ages))
console.log("Maximum age is ",Math.max(...ages))

// Find the median age(one middle item or two middle items divided by two)
let medianAge;
let middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
  medianAge = ages[middleIndex]
}
console.log('Median age:', medianAge);

// Find the average age(all items divided by number of items)
let sumOfAges = ages.reduce((acc, curr) => acc + curr, 0);
let averageAge = sumOfAges / ages.length
console.log('Average age:', averageAge)

// Find the range of the ages(max minus min)
let ageRange = Math.max(...ages) - Math.min(...ages)
console.log('Age range:', ageRange)

// Compare the value of (min - average) and (max - average), use abs() method
let diffMin = Math.abs(Math.min(...ages) - averageAge);
let diffMax = Math.abs(Math.max(...ages) - averageAge);
if (diffMin > diffMax) {
  console.log('The difference between min age and average age is greater.');
} else if (diffMin < diffMax) {
  console.log('The difference between max age and average age is greater.');
} else {
  console.log('The difference between min age and average age is the same as the difference between max age and average age.');
}