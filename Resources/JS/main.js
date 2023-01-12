
let button = document.getElementById('mainButton');

function changeText() {
    button.innerHTML = "yes click here!";
    button.style.backgroundColor = 'blue';
}

button.addEventListener('click', changeText);