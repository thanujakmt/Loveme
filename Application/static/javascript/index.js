
const loveme = document.querySelector('.loveme');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');
    const x = e.clientX;
    const y = e.clientY;
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    loveme.appendChild(heart);
    times.innerHTML = ++timesClicked;
    setTimeout(() => heart.remove(),1000);
};

loveme.addEventListener("click", (e) => {
    if(clickTime === 0) clickTime = new  Date().getTime();
    else{
        if(new Date().getTime() - clickTime < 800){
            createHeart(e);
            clickTime = 0;

        }else clickTime = new Date().getTime();
    }
});