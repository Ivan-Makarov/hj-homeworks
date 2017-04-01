'use strict';

const currentPhoto = document.getElementById('currentPhoto');
const photos = ['i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg'];

let step = -1;

function changePhoto() {
    if (this.id === 'nextPhoto') {
        step++;
    } else if (this.id === 'prevPhoto') {
        step--;
    }
    if (step === photos.length) {
        step = 0;
    } else if (step <= -1) {
        step = photos.length - 1;
    }
    currentPhoto.src = photos[step];
}

for (let btnId of ['nextPhoto', 'prevPhoto']) {
    let btn = document.getElementById(btnId);
    btn.onclick = changePhoto;
}
