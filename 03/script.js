const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null; // Последний выбранный чекбокс

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const checkedBoxes = Array.from(checkboxes).filter(cb => cb.checked);

        if (checkedBoxes.length > 2) {
            if (lastChecked) lastChecked.checked = false; // Снимаем предыдущий выбор
        }

        lastChecked = checkbox; // Сохраняем текущий чекбокс как последний
    });
});
