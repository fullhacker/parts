import { Button } from './src/index.js';

export const FHParts = function() {

    this.initialize = function() {
        // initialize buttons
        const buttons = Array.from(document.getElementsByTagName('fh-btn'));
            // .filter(btn => btn.classList.contains('fh-btn'));

        buttons.forEach(btn => {
            console.log(`Button: ${btn.innerHTML}`);
            const callbackName = btn.getAttribute('click');
            const callback = window[callbackName];
            replace(btn, Button(btn.innerHTML, (e) => callback.call()));
        });


        // log done
        console.log('Full Hacker Parts initialized');
    }

    const replace = (el1, el2) => {
        const parent = el1.parentNode;
        parent.replaceChild(el2, el1);
    }

};

document.addEventListener('DOMContentLoaded', (e) => {
    const parts = new FHParts();
    parts.initialize();
});


