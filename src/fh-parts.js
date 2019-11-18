import { Button } from './web/index.js';

export const FHParts = function() {

    this.initialize = function() {
        initializeButtons();

        // log done
        console.log('Full Hacker Parts initialized');
    }

    const initializeButtons = () => {
        const buttons = Array.from(document.getElementsByTagName('fh-btn'));
        buttons.forEach(btn => {
            console.log(`Button: ${btn.innerHTML}`);
            const callbackName = btn.getAttribute('click');
            const callback = window[callbackName];
            replace(btn, Button(btn.innerHTML, (e) => callback.call()));
        });
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


