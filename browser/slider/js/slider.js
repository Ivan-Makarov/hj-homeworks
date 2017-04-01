'use strict';

const slider = document.getElementById('slider');

const photos = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png']

let step = 0;
setInterval(() => {
    slider.src = photos[step];
    step++;
    if (step === photos.length) {
        step = 0;
    }
}, 5000);
