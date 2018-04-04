var marginTop = 100;
var maxWith = 300;
var text1MarginLeft = 20;
var text2MarginLeft = 360;
var canvasWidth = canvasHeight = 680;

var sourceImg = new Image();
sourceImg.src = 'https://cederstrom.github.io/den-ar-efterbliven/assets/source.png';
sourceImg.crossOrigin = 'Anonymous';

var canvas = document.createElement('canvas');
canvas.height = canvasHeight;
canvas.width = canvasWidth;
var ctx = canvas.getContext('2d');
ctx.font = 'normal 30px arial';

function drawCanvas(text1, text2) {
    ctx.drawImage(sourceImg, 0, 0);
    ctx.fillText(text1, text1MarginLeft + calcOffset(text1, .5, 8), marginTop, maxWith);
    ctx.fillText(text2, text2MarginLeft + calcOffset(text2, .2, 4), marginTop, maxWith);
    return canvas;
}

function calcOffset(text, whereToStart, charWidth) {
    var offset = (maxWith * whereToStart) - (text.length * charWidth);
    return offset > 0 ? offset : 0;
}
