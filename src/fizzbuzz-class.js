// TODO: Write your function in this file

class FizzBuzz {
  createFizzBuzz(lower, upper) {
    const answerArr = [];
    for (let i = lower; i <= upper; i++) {
      if (i % 15 === 0) {
        answerArr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        answerArr.push("Fizz");
      } else if (i % 5 === 0) {
        answerArr.push("Buzz");
      } else {
        answerArr.push(i);
      }
    }
    return answerArr;
  }
}
// TODO: Change undefined below to the name of your function
module.exports = FizzBuzz;
