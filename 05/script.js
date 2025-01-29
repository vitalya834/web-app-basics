const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorCodeElement = document.getElementById('color-code');

// Функция обновления фона и текста
function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
    colorCodeElement.textContent = color;
}

// Добавляем обработчики событий
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Инициализируем начальный цвет
updateColor();
