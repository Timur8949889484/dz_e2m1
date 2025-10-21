const users = [
  { id: 1, name: "user1", age: 25, isOnline: true },
  { id: 2, name: "user2", age: 30, isOnline: false },
  { id: 3, name: "user3", age: 22, isOnline: true },
  { id: 4, name: "user4", age: 27, isOnline: false },
];

const onlineUsers = users.filter((user) => user.isOnline);
console.log("Онлайн пользователи:", onlineUsers);

const usersWithStatus = users.map((user) => ({
  ...user,
  status: user.isOnline ? "Active" : "Offline",
}));
console.log("Пользователи со статусом:", usersWithStatus);

const userWithId3 = users.find((user) => user.id === 3);
const userName = userWithId3 ? userWithId3.name : "Пользователь не найден";
console.log("Имя пользователя с id = 3:", userName);

const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
const averageAge = totalAge / users.length;
console.log("Средний возраст:", averageAge);

const roles = { admin: "Alice", user: "Bob", guest: "Charlie" };

function invertObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

console.log(invertObject(roles));
