const  btn = document.getElementById('btn');
const body = document.querySelector('body');
const colorIn = document.getElementById('addColor');
const btn2 = document.getElementById('btn2');


var color = ['red','blue','green','yellow','pink','purple'];
var i = 0;

btn2.onclick = function() {
    color.push(colorIn.value);
}

btn.onclick = function() {
        body.style.backgroundColor = color[i];
        i++

    if (i == color.length) {
        i = 0;
    }
}