export function randomWidth(min, max) {
    let clouds = document.getElementsByClassName('cloud');
    for (let i = 0; i < clouds.length; i++) {
        let randomWidth = Math.floor(Math.random() * (max - min + 1)) + min;
        clouds[i].style.width = `${randomWidth}px`;
    }
}

