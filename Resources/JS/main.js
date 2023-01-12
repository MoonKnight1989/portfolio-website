
let button = document.getElementById('mainButton');

function changeText() {
    button.innerHTML = "Yes Click Here!";
    button.style.backgroundColor = 'blue';
};

function changeTextBack() {
    button.innerHTML = "View my work";
    button.style.backgroundColor = "#FF1577"
};

button.addEventListener('mouseover', changeText);
button.addEventListener('mouseout', changeTextBack);