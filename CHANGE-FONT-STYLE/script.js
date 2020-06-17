msg = document.getElementById('message');


const btn = document.getElementById('buttonX');

console.log(btn);

function transformStuff(){
 console.log(msg);
}

btn.addEventListener('click',transformStuff);
