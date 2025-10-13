let numbers = [10, 2, 8, 4, 6];
console.log("Исходный массив:", numbers);

numbers.push(7);
numbers.unshift(1);
console.log("Массив после добавления (1 и 7):", numbers);

numbers.pop();
numbers.shift();
console.log("Массив после удаления:", numbers);

const containsFive = numbers.includes(5);
console.log("Массив содержит число 5:", containsFive);

const stringArray = numbers.join(", ");
console.log("Массив в виде строки:", stringArray);

const celebrities = [
  { name: "Timothée Chalamet", age: 29 },
  { name: "Zendaya", age: 28 },
  { name: "Tom Holland", age: 28 },
  { name: "Billie Eilish", age: 22 },
  { name: "Margot Robbie", age: 34 },
  { name: "Ryan Gosling", age: 44 },
  { name: "Anya Taylor-Joy", age: 28 },
  { name: "Robert Downey Jr.", age: 60 },
  { name: "Millie Bobby Brown", age: 20 },
  { name: "Keanu Reeves", age: 61 },
];
console.log("\nИсходный массив знаменитостей создан.");

const names = celebrities.map((celebrity) => celebrity.name);
console.log("\nМассив имён:", names);

const olderThan24 = celebrities.filter((celebrity) => celebrity.age > 24);
console.log("\nЗнаменитости старше 24 лет (объекты):", olderThan24);

const oldestCelebrity = celebrities.reduce((oldest, current) => {
  return current.age > oldest.age ? current : oldest;
});
console.log("\nСамый старший:", oldestCelebrity);

const hasMinors = celebrities.some((celebrity) => celebrity.age < 18);
console.log("\nЕсть ли среди знаменитостей несовершеннолетние:", hasMinors);
