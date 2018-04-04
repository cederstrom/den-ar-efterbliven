var marginTop = 100;
var maxWith = 300;
var text1MarginLeft = 20;
var text2MarginLeft = 360;

var sourceImg = new Image();
sourceImg.src = 'source.png';

var text1Elem = document.getElementById('text1');
var text2Elem = document.getElementById('text2');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = 'normal 30px arial';

function drawCanvas() {
    ctx.drawImage(sourceImg, 0, 0);
    var text1 = text1Elem.value;
    var text2 = text2Elem.value;
    ctx.fillText(text1, text1MarginLeft + calcOffset(text1, .5, 8), marginTop, maxWith);
    ctx.fillText(text2, text2MarginLeft + calcOffset(text2, .2, 4), marginTop, maxWith);
}

function calcOffset(text, whereToStart, charWidth) {
    var offset = (maxWith * whereToStart) - (text.length * charWidth);
    return offset > 0 ? offset : 0;
}

text1Elem.addEventListener('input', drawCanvas);
text2Elem.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);