import { Button, Navigation } from './src/components/index.js';

const wrapper = document.getElementById('app-wrapper');
const btn = Button('Hack this 3', (e) => alert('Third button clicked'));
const nav = Navigation();

wrapper.innerHTML = '';
wrapper.appendChild(nav);
wrapper.appendChild(btn);
