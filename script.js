
var image = 0;
var imageCycle = new Array('test2.jpg', 'patrick.jpg', 'homer.jpg', 'google.jpg');
var x = 0;


function choosePic() {
    image = Math.floor(Math.random() * imageCycle.length);
    document.getElementById("imgCurrent").src = imageCycle[image];
    x = setInterval(rotate, 1000);
}

function rotate() {
    image++;
    if (image == imageCycle.length) {
        image = 0;
    }
    document.getElementById("imgCurrent").src = imageCycle[image];
}

function endCycle() {
    document.getElementById("imgCurrent").src = 'start.jpg';
    clearInterval(x);
}