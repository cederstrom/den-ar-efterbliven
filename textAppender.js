var sourceImg = new Image();
sourceImg.src = 'source.png';

var text1Elem = document.getElementById('text1');
var text2Elem = document.getElementById('text2');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

function drawCanvas() {
    var text1 = text1Elem.value;
    var text2 = text2Elem.value;
    ctx.drawImage(sourceImg, 0, 0);
    ctx.font = 'normal 30px arial';
    ctx.fillText(text1, 20, 100, 300);
    ctx.fillText(text2, 360, 100, 300);
}

text1Elem.addEventListener('input', drawCanvas);
text2Elem.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
