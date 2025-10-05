let count = 0;
const counterValueElement = document.getElementById("counter-value");

function changeCounter(delta) {
  const newCount = count + delta;

  if (delta === -1 && newCount < 0) {
    return;
  }

  count = newCount;
  counterValueElement.textContent = count;

  counterValueElement.classList.remove("green", "red");
  if (delta === 1) {
    counterValueElement.classList.add("green");
  } else if (delta === -1) {
    counterValueElement.classList.add("red");
  }
}

const coordinateBox = document.getElementById("coordinate-box");
const coordsDisplay = document.getElementById("coords");

coordinateBox.addEventListener("mousemove", function (event) {
  const clientX = event.clientX;
  const clientY = event.clientY;

  const rect = coordinateBox.getBoundingClientRect();

  const relativeX = Math.round(clientX - rect.left);
  const relativeY = Math.round(clientY - rect.top);

  coordsDisplay.textContent = `X: ${relativeX}, Y: ${relativeY}`;
});

coordinateBox.addEventListener("mouseleave", function () {
  coordsDisplay.textContent = "Наведите курсор";
});

const colorInput = document.getElementById("color-input");
const bodyElement = document.body;

colorInput.addEventListener("input", function () {
  const colorName = colorInput.value.trim().toLowerCase();

  if (isValidCssColor(colorName)) {
    bodyElement.style.backgroundColor = colorName;
  } else {
    bodyElement.style.backgroundColor = "white";
  }
});

function isValidCssColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}
