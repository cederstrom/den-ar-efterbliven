var marginTop = 120;
var maxWith = 300;
var text1MarginLeft = 20;
var text2MarginLeft = 360;
var canvasWidth = canvasHeight = 680;
var fontSize = 30;

var sourceImg = new Image();
sourceImg.src = 'https://cederstrom.github.io/den-ar-efterbliven/assets/source.png';
sourceImg.crossOrigin = 'Anonymous';

var canvas = document.createElement('canvas');
canvas.height = canvasHeight;
canvas.width = canvasWidth;
var ctx = canvas.getContext('2d');
ctx.font = 'normal ' + fontSize + 'px arial';

function drawCanvas(text1, text2) {
    ctx.drawImage(sourceImg, 0, 0);

    var text1Lines = text1.split('\n');
    text1Lines.forEach(function(line, index) {
        ctx.fillText(line, text1MarginLeft + calcOffset(line, .5, 8), marginTop - (text1Lines.length - index - 1) * fontSize, maxWith);
    });
    
    var text2Lines = text2.split('\n');
    text2Lines.forEach(function(line, index) {
        ctx.fillText(line, text2MarginLeft + calcOffset(line, .2, 4), marginTop - (text2Lines.length - index - 1) * fontSize, maxWith);
    });
    return canvas;
}

function calcOffset(text, whereToStart, charWidth) {
    var offset = (maxWith * whereToStart) - (text.length * charWidth);
    return offset > 0 ? offset : 0;
}
