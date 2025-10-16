const user = {
  id: 101,
  name: "user",
  age: 28,
  job: "Frontend Developer",
  skills: {
    programming: ["JavaScript", "TypeScript", "React"],
    softSkills: ["communication", "teamwork"],
  },
  contacts: {
    email: "user@example.com",
    phone: "+996555123456",
  },
};

const {
  name,
  age,
  job,
  skills: { programming, softSkills },
} = user;

const userAddress = user?.address ?? "Адрес не указан";

console.log(name);
console.log(age);
console.log(job);
console.log(programming);
console.log(programming[0]);
console.log(softSkills);
console.log(userAddress);

const users = [
  { name: "user1", age: 29, address: { city: "Bishkek" } },
  { name: "user2", age: 23 },
  { name: "user3", age: 35, address: { city: "Madrid" } },
];

const usersWithCity = users.map((user) => {
  const city = user.address?.city;

  return {
    name: user.name,
    age: user.age,
    city: city ?? "Город не указан",
  };
});

console.log(usersWithCity);

function calculateSum(multiplier, ...numbers) {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum * multiplier;
}

console.log(calculateSum(2, 5, 10, 3));
console.log(calculateSum(10, 1, 2));
console.log(calculateSum(5));
