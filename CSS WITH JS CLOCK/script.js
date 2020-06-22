const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    

    const mins = now.getMinutes();
    minsDeg = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDeg}deg)`;  
  


    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    console.log(hour);

}

setInterval(() => {
    setDate();    
}, 1000);
  