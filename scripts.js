const students = [
  {
    id: 1,
    name: "Tom",
    age: 18,
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false,
  },
  {
    id: 2,
    name: "Anna",
    age: 20,
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true,
  },
  {
    id: 3,
    name: "Bob",
    age: 19,
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false,
  },
  {
    id: 4,
    name: "Lisa",
    age: 22,
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true,
  },
  {
    id: 5,
    name: "John",
    age: 21,
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false,
  },
  {
    id: 6,
    name: "Mila",
    age: 23,
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true,
  },
  {
    id: 7,
    name: "Alex",
    age: 19,
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false,
  },
  {
    id: 8,
    name: "Kate",
    age: 20,
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true,
  },
  {
    id: 9,
    name: "Nick",
    age: 18,
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false,
  },
  {
    id: 10,
    name: "Sara",
    age: 21,
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true,
  },
];

class Student {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.city = data.city;
    this.grades = data.grades;
    this.hobbies = data.hobbies;
    this.isGraduated = data.isGraduated;
  }
  get averageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return parseFloat((sum / this.grades.length).toFixed(2));
  }
  get status() {
    return this.isGraduated ? "Окончил" : "Обучается";
  }
}

function createStudentCard(student) {
  const statusClass = student.isGraduated ? "green" : "red";
  const statusText = student.isGraduated ? "Окончил" : "Обучается";
  const hobbiesList =
    student.hobbies.length > 0
      ? student.hobbies
          .map(
            (h) =>
              `<span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">${h}</span>`
          )
          .join("")
      : '<span class="text-gray-500 italic">Хобби отсутствуют</span>';

  return `
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-500">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center">
                            ${student.name}
                            <span class="status-dot ${statusClass}" title="${statusText}"></span>
                        </h2>
                        <span class="text-sm font-semibold text-indigo-600">ID: ${
                          student.id
                        }</span>
                    </div>
                    
                    <div class="space-y-2 text-gray-700">
                        <p><strong>Возраст:</strong> ${student.age} лет</p>
                        <p><strong>Город:</strong> ${student.city}</p>
                        <p><strong>Оценки:</strong> ${student.grades.join(
                          ", "
                        )}</p>
                    </div>

                    <div class="mt-4">
                        <p class="font-semibold text-gray-800 mb-2">Хобби:</p>
                        <div class="flex flex-wrap">
                            ${hobbiesList}
                        </div>
                    </div>
                </div>
            `;
}

function displayStudents() {
  const container = document.getElementById("students-container");
  if (container) {
    container.innerHTML = students.map(createStudentCard).join("");
  } else {
    console.error("Контейнер #students-container не найден. Проверьте HTML.");
  }
}

function openModal(title, message) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  document.getElementById("search-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("search-modal").classList.remove("open");
}

function handleSearch() {
  const inputElement = document.getElementById("student-name-input");
  const searchName = inputElement.value.trim();

  if (!searchName) {
    openModal("Ошибка", "Пожалуйста, введите имя для поиска.");
    return;
  }

  const index = students.findIndex(
    (student) => student.name.toLowerCase() === searchName.toLowerCase()
  );

  let title, message;

  if (index !== -1) {
    title = "Пользователь Найден!";
    message = `Студент ${students[index].name} найден в массиве под индексом: ${index}.`;
  } else {
    title = "Поиск Завершен";
    message = "Пользователь не найден.";
  }

  openModal(title, message);
}

function runArrayTasks() {
  console.log("=====================================================");
  console.log("=== Результаты Заданий по Методам Массивов (JS) ===");
  console.log("=====================================================");

  const studentNames = students.map((student) => student.name);
  console.log("1. Массив имён студентов:", studentNames);

  const youngStudents = students.filter((student) => student.age <= 19);
  console.log(
    "2. Студенты не старше 19 лет (имена):",
    youngStudents.map((s) => s.name)
  );

  const studentsWithAvgGrade = students.map((student) => {
    const studentInstance = new Student(student);
    return {
      id: student.id,
      name: student.name,
      grade: studentInstance.averageGrade,
    };
  });
  console.log("3. Студенты с id, name и средним баллом:", studentsWithAvgGrade);

  const ages = students.map((s) => s.age);
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);
  const ageDifference = maxAge - minAge;
  console.log(
    `4. Самый младший (${minAge} лет) и самый старший (${maxAge} лет). Разница в возрасте: ${ageDifference} лет.`
  );

  const graduatedCount = students.filter((s) => s.isGraduated).length;
  console.log("5. Количество успешно окончивших студентов:", graduatedCount);

  const studentsWithCalculatedAvg = students.map((s) => new Student(s));

  const topStudent = studentsWithCalculatedAvg.reduce((top, current) => {
    return current.averageGrade > top.averageGrade ? current : top;
  }, studentsWithCalculatedAvg[0]);

  let output;
  if (topStudent.hobbies.length > 0) {
    output = `Хобби: ${topStudent.hobbies.join(", ")}`;
  } else {
    output = `Имя: ${topStudent.name}`;
  }
  console.log(
    `6. Студент с наивысшим средним баллом (${topStudent.averageGrade}) - ${topStudent.name}. Вывод: ${output}`
  );

  const reversedStudents = [...students].reverse();
  console.log(
    "7. Перевернутый массив студентов (только имена для краткости):",
    reversedStudents.map((s) => s.name)
  );

  console.log("=====================================================");
}

window.onload = function () {
  displayStudents();

  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
  }

  runArrayTasks();
};

window.closeModal = closeModal;
