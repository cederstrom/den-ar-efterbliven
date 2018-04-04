var outImg = document.getElementById('outImg');

function onLoadListener() {
    var hash = location.hash.substr(1).split('/');
    var text1 = decodeURI(hash[0] || '');
    var text2 = decodeURI(hash[1] || '');
    
    var canvas = drawCanvas(text1, text2);
    outImg.src = canvas.toDataURL();
}

window.addEventListener('load', onLoadListener);
window.addEventListener('hashchange', onLoadListener);
