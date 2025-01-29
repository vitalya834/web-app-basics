let count = 0; // Счётчик
const counterElement = document.getElementById('counter'); // Элемент счётчика
const resetButton = document.getElementById('reset'); // Кнопка сброса

// Функция для обновления счётчика и изменения фона
function updateCounter() {
    count++;
    counterElement.textContent = count;

    // Изменяем фон в зависимости от счёта
    const hue = (count % 100) * 3.6; // 100 шагов = полный круг (360°)
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;

    // Сбрасываем фон каждые 100 шагов
    if (count % 100 === 0) {
        document.body.style.backgroundColor = 'white';
    }
}

// Событие для кликов по странице
document.body.addEventListener('click', (e) => {
    if (e.target !== resetButton) updateCounter();
});

// Событие для клавиш Enter и Space
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        updateCounter();
        e.preventDefault(); // Предотвращаем стандартное действие (например, прокрутку)
    }
});

// Событие для сброса счётчика
resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    document.body.style.backgroundColor = 'white';
});
