// All changes in main
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

// reduce - The function "reduce" allows us to add the values of an array and then return them.
// use case: show last week's sales total.

const sales = [1000, 5000, 8000, 2000];
const initialValue = 0;
const sumAllSales = sales.reduce(
    (prev, current) => prev + current, initialValue
);
console.log(sumAllSales);

// findIndex - The "FindIndex" function returns the index of the element that meets the given condition.
// use case: Obtain the name of the customer with name "Erik".

const names = ["Juan", "Fernanda", "Erik", "Eduardo"];
const index = names.findIndex(i => i === "Erik");
console.log(index);
console.log(names[index]);

// replace - The replace function works to replace with a specified value the first element that matches the added data with a specified value.
// use case: Modify an employee's name.

const string = "Juan, Fernanda, Erik, Eduardo";
const result = string.replace('Erik', 'Torres');
console.log(result);

// Hoisting - Thanks to hoisting we can use function variables before declaring them in the code.
// use case: Calculate the sum of the sides of a triangle.

const sides = [10, 10];
function calculateSides(side) {
    console.log("sum of the sides: " + (sides[0] + sides[1] + side));
}

calculateSides(10);

// Promises - Promises allow us to identify when a function was not executed correctly, they are error handlers.
// use case: Verify that the information is obtained correctly.

var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('La informacion se ha obtenido correctamete');
    }, 1500);
});

myPromise.then(function(value) {
    console.log(value);
});

console.log(myPromise);