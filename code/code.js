var header = document.querySelector(".last")
var deaths = document.querySelector(".turn-it")

header.style.color = 'red'
deaths.style.color = 'red'

function randomColors() {
    var alphs = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += alphs[Math.floor(Math.random() * 16)];
    }
    return color

}


function changeHeaderColor() {
    colorInput = randomColors()
    header.style.color = colorInput;

}

setInterval("changeHeaderColor()", 500);

function changedeathColor() {
    colorInput = randomColors()
    deaths.style.color = colorInput;

}
setInterval("changedeathColor()", 2000);