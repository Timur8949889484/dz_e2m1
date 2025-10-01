let colorP = prompt("Цвет фона:");
const mainHeading = document.getElementById("colorSelector");

/**
 * Если введённое значение не является цветом, вывести "Ошибка! Введите корректный цвет".
 * Я не понял как мне это сделать, пришлось в интернете искать решение
 * @param {string} strColor
 * @returns {boolean}
 */
function isCssColor(strColor) {
  const s = new Option().style;

  s.color = strColor;

  return s.color.length > 0;
}

if (!colorP) {
  mainHeading.textContent = "Цвет не был введён (отмена ввода).";
} else if (isCssColor(colorP.toLowerCase())) {
  document.body.style.backgroundColor = colorP;

  mainHeading.textContent = `Фон изменён на ${colorP.toLowerCase()}`;
} else {
  mainHeading.textContent = "Ошибка! Введите корректный цвет";
}

let colorChoose = prompt("Цвет светофора:");
const red = document.getElementById("red-circle");
const yellow = document.getElementById("yellow-circle");
const green = document.getElementById("green-circle");
const trafficLight = document.getElementById("trafficLight");

if (colorChoose && colorChoose.toLowerCase() == "красный") {
  red.style.background = "red";
  trafficLight.textContent = "STOP";
} else if (colorChoose && colorChoose.toLowerCase() == "желтый") {
  yellow.style.background = "yellow";
  trafficLight.textContent = "WAIT";
} else if (colorChoose && colorChoose.toLowerCase() == "зеленый") {
  green.style.background = "green";
  trafficLight.textContent = "GO";
} else {
  trafficLight.textContent = "Ошибка";
}
