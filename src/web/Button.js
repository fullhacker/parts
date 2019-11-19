import * as css from '../css.js';

export const Button = (text, callback) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = text;

    const className = css.getClass(`
            color: white;
            background: black;
            padding: 5px;
    `);

    btn.setAttribute('class', className);

    btn.addEventListener('click', e => callback(e));
    return btn;
}
