var firstRowMarginTop = 130;
var secondRowMarginTop = 465;
var maxWith = 300;
var canvasWidth = canvasHeight = 680;
var fontSize = 30;
var lineHeight = fontSize + 5;

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

    writeText(text1, firstRowMarginTop, 20, .5, 8);
    writeText(text2, firstRowMarginTop, 360, .2, 4);

    writeText('Åh nej', secondRowMarginTop, 110, 0, 0);
    writeText('Den är efterbliven', secondRowMarginTop, 390, 0, 0);
    return canvas;
}

function writeText(text, marginTop, marginLeft, whereToStart, charWidth) {
    var lines = text.split('\n');
    lines.forEach(function(line, index) {
        ctx.fillText(
            line,
            marginLeft + calcSideOffset(line, whereToStart, charWidth),
            marginTop - calcHeightOffset(lines, index),
            maxWith);
    });
}

function calcSideOffset(text, whereToStart, charWidth) {
    var offset = (maxWith * whereToStart) - (text.length * charWidth);
    return offset > 0 ? offset : 0;
}

function calcHeightOffset(lines, index) {
    return (lines.length - index - 1) * lineHeight;
}
