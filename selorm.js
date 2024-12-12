const hourHand = document.querySelector('.hourHand');
const secHand = document.querySelector('.secHand');
const minHand = document.querySelector('.minHand');

const textHour = document.querySelector('.hour');
const textSeconds = document.querySelector('.sec');
const textMinutes = document.querySelector('.min');

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const angleHour = (hour % 12) * 30 + minutes * 0.5;
    const angleMinutes = minutes * 6 + seconds * 0.1;
    const angleSeconds = seconds * 6;

    hourHand.style.transform = `rotate(${angleHour}deg)`;
    minHand.style.transform = `rotate(${angleMinutes}deg)`;
    secHand.style.transform = `rotate(${angleSeconds}deg)`;

    textHour.innerHTML= `<p>${hour}hr</p>`;
    textMinutes.innerHTML=`<p>${minutes}m</p>`;
    textSeconds.innerHTML= `<p>${seconds}s</p>`;


}

updateClock();
setInterval(updateClock, 1000);
