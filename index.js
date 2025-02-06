//! 1. Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const result = (payload) => {
  const filter = payload
    ?.filter((item) => item?.gender !== "female")
    ?.map((item) => item?.name);
  return filter;
};
// const people = [
//   { name: "Alice", age: 25, gender: "female" },
//   { name: "Bob", age: 30, gender: "male" },
//   { name: "Charlie", age: 35, gender: "male" },
//   { name: "Diana", age: 28, gender: "female" },
// ];

// console.log(result(people));

//! 2. Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const result2 = (payload) => {
  const filter = payload?.map((item) => item?.title);
  return filter;
};
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

// console.log(result2(books));

//! 3. Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const result3 = (payload) => {
  const sortByYear = payload?.sort((a, b) => a?.year - b?.year);
  return sortByYear;
};
// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2020 },
//   { make: "Ford", model: "Mustang", year: 2018 },
//   { make: "Ford2", model: "Mustan2", year: 2008 },
//   { make: "Honda", model: "Civic", year: 2021 },
// ];

// console.log(result3(cars));

//! 4. Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const result4 = (peopleArray, peopleFindName, updateAge) => {
  const findPeople = peopleArray?.find((item) => item?.name === peopleFindName);
  if (findPeople) {
    findPeople.age = updateAge;
  }
  return peopleArray;
};

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// console.log(result4(people, "Alice", 50));

//! 5. Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const result5 = (payload) => {
  return payload?.reduce((acc, item) => {
    if (item % 2 === 0) {
      return acc + item;
    }
    return acc;
  }, 0);
};
// const numbers = [1, 2, 3,4];
// console.log(result5(numbers));
