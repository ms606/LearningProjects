const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap  = 'round';
ctx.lineWidth = 70;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;


function draw(e) {
    if (!isDrawing) return;
    //  console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100% , 52%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue ++;
    ctx.lineWidth --;

    if (hue >= 360){
        hue = 0;
    }

    if (ctx.lineWidth === 1){
        ctx.lineWidth = 70;
    }
}

function sDraw(e){
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
}

function eDraw(e){
    isDrawing = false;
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', sDraw)
canvas.addEventListener('mouseup', eDraw)
canvas.addEventListener('mouseout', () => isDrawing = false)
