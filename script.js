const keyCode = document.querySelector('.keyCode');
const keyCodeLabel = document.querySelector('.keyCodeLabel');
const pressedKey = document.querySelector('.pressedKey');

function getKeys(e) {
    keyCode.textContent = `${e.keyCode}`
    pressedKey.textContent = `You pressed: ${e.key}`
}

window.addEventListener('keydown', (e)=> {
    getKeys(e);
    console.log(e);
})