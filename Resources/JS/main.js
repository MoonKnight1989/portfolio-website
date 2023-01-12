
let button = document.getElementById('mainButton');

function changeText() {
    button.innerHTML = "Yes Click Here!";
    button.style.backgroundColor = 'blue';
    button.style.marginTop = "40px";
};

function changeTextBack() {
    button.innerHTML = "View my work";
    button.style.backgroundColor = "#FF1577"
    button.style.marginTop = "50px";
};

button.addEventListener('mouseover', changeText);
button.addEventListener('mouseout', changeTextBack);

/*
let projectTile = document.getElementById("featureTile");

function projectBoxHover() {
    projectTile.style.marginTop = "0px";
};

function projectBoxReturn() {
    projectTile.style.marginTop = "10px";
};

projectTile.addEventListener('mouseover', projectBoxHover);
projectTile.addEventListener('mouseout', projectBoxReturn);
*/