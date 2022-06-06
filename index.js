// map - The map function allows us to iterate an array and then modify its elements through a function called callback.
// use case: increase employee salaries by $1,000

const salary = [12000, 7000, 15000, 20000, 7000, 15000];
const newSalary = salary.map(e => {
    console.log(e + 1000);
});

// filter - The filter function allows us to create a new array with the elements that meet the given condition.
// use case: show people over 18 years old.

const persons = [20, 17, 19, 15];
const accepted = persons.filter(element => element > 18);
console.log(accepted);

// find - The find function returns the first element that meets the condition.
// use case: show first number greater than 18.

const numbers = [10, 18, 19, 20];
const found = numbers.find(element => element > 18);
console.log(found);