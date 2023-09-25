const pressed = [];
const secretCode = 'javascript';

window.addEventListener('keyup', e => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed.length);
    console.log(-secretCode.length);
    console.log(secretCode.length);
    pressed.splice(-secretCode.length-1, pressed.length-secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }

    console.log(pressed);
})