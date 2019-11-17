export default {
}

/*
    *
    *
    * */
export const Button = function(text, callback) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = text;
    btn.style.color = 'white';
    btn.style.background = 'black';
    btn.addEventListener('click', e => callback(e));
    return btn;
}
