const  btn = document.getElementById('btn');
const body = document.querySelector('body');

var color = ['red','blue','green','yello','pink','purple'];
alert(color.length);

for (let i = 0;i != color.length;i++) {
    btn.onclick = function() {
        alert(i);
        body.style.backgroundColor = color[i];
    }
}
