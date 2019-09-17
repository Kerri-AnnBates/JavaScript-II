// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function carRent() {
  const twoDoor = 2;
  const fourDoor = 4
  let carModel = '';
  function sportsCar() {
    carModel = 'Corvette';
    return `This ${carModel} has ${twoDoor} doors`;
  }
  function sedan() {
    carModel = 'Corolla';
    return `This ${carModel} has ${fourDoor} doors`;
  }
  console.log(sportsCar())
  console.log(sedan())
}

carRent();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0
  
  function counter() {
    count = count + 1;
    return count;
  }

  return counter;
};
// Example usage: const myCounter = counterMaker();
const myCounter = counterMaker();
console.log('-------- Counter ----------');
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const limitCounterMaker = (limit) => {
  let count = 0;
  
  function counter() {
    count += 1;
    if(count >= limit) {
      count = 1;
    }
    return count;
  }

  return counter
}

const myLimitCounter = limitCounterMaker(4);
console.log('-------- Limit Counter ----------');
console.log(myLimitCounter()); // 1
console.log(myLimitCounter()); // 2
console.log(myLimitCounter()); // 3
console.log(myLimitCounter()); // 1
console.log(myLimitCounter()); // 2

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    }
  }
}

console.log('-------- Counter Factory ----------');
const countFact = counterFactory();
console.log(countFact.increment()); // 1
console.log(countFact.increment()); // 2
console.log(countFact.increment()); // 3
console.log(countFact.decrement()); // 2
console.log(countFact.decrement()); // 2
