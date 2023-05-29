const names = ["Asia", "Janek", "John", "Mike", "Barbara"];
const randomText = ["I think best name is ", "In my opinion you should pick ", "Choose ", "Yup! best name is ", "Right choice is "];
const btn = document.querySelector("button");
const div = document.querySelector("div");

const pickRandomName = () => {
    div.textContent = (randomText[Math.floor(Math.random() * randomText.length)]) + (names[Math.floor(Math.random() * names.length)])
};




btn.addEventListener("click", pickRandomName);