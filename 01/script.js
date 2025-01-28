const button = document.querySelector('.toggle-button'); // Находим кнопку через класс
let isLightOn = true; // Флаг, свет включён

button.addEventListener('click', () => {
    if (isLightOn) {
        document.body.style.backgroundColor = 'black'; // Меняем фон на чёрный
        document.title = 'Gutten Nacht'; // Меняем заголовок
    } else {
        document.body.style.backgroundColor = 'white'; // Меняем фон на белый
        document.title = 'Guten Morgen '; // Меняем заголовок
    }
    isLightOn = !isLightOn; // Переключаем состояние
});
