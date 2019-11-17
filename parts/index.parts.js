import { Button } from '../src/';

export default {
  title: 'Parts',
};

// export const title = () => '<h1>Hello World</h1>';

export const button = () => Button('Hello Button', (e) => alert('Hello!'));
