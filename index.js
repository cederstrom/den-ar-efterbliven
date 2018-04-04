var text1Elem = document.getElementById('text1');
var text2Elem = document.getElementById('text2');
var outImg = document.getElementById('outImg');
var link = document.getElementById('link');

function onChangeListener() {
    var text1 = text1Elem.value;
    var text2 = text2Elem.value;
    var canvas = drawCanvas(text1, text2);
    outImg.src = canvas.toDataURL();
    link.href = 'generated.html#' + encodeURI(text1) + '/' + encodeURI(text2);
}

text1Elem.addEventListener('input', onChangeListener);
text2Elem.addEventListener('input', onChangeListener);
window.addEventListener('load', onChangeListener);
