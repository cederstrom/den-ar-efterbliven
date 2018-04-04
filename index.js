var text1Elem = document.getElementById('text1');
var text2Elem = document.getElementById('text2');
var outImg = document.getElementById('outImg');

function onChangeListener() {
    var canvas = drawCanvas(text1Elem.value, text2Elem.value);
    outImg.src = canvas.toDataURL();
}

text1Elem.addEventListener('input', onChangeListener);
text2Elem.addEventListener('input', onChangeListener);
window.addEventListener('load', onChangeListener);
