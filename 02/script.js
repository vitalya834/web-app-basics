const passwordInput = document.querySelector('#password'); // Поле пароля
const toggleButton = document.querySelector('#toggle-password'); // Кнопка переключения

toggleButton.addEventListener('click', () => {
    // Проверяем тип input
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Меняем на текст
        toggleButton.textContent = 'Hide Password'; // Меняем текст кнопки
    } else {
        passwordInput.type = 'password'; // Меняем обратно на пароль
        toggleButton.textContent = 'Show Password'; // Меняем текст кнопки
    }
});
