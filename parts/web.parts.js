import { Button, Navigation } from '../src/web/';

export default {
  title: 'Web',
};

// export const title = () => '<h1>Hello World</h1>';

export const button = () => Button('Hello Button', (e) => alert('Hello!'));

export const nav = () => Navigation();
