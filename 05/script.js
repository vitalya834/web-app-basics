const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const colorCode = document.getElementById("color-code");
const randomColorBtn = document.getElementById("randomColorBtn");
const body = document.body;

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = `#${((1 << 24) + (+red << 16) + (+green << 8) + +blue).toString(16).slice(1)}`;
    body.style.backgroundColor = rgbColor;
    colorCode.textContent = hexColor;
}

function fetchRandomColor() {
    fetch("https://dummy-apis.netlify.app/api/color")
        .then(response => response.json())
        .then(data => {
            const { r, g, b } = data.rgb;
            redSlider.value = r;
            greenSlider.value = g;
            blueSlider.value = b;
            updateColor();
        });
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
randomColorBtn.addEventListener("click", fetchRandomColor);

updateColor(); // Initialize color on load
