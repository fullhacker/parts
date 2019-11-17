import { addParameters, configure } from '@storybook/html';

// set options
addParameters({
    options: {
        name: "Full Hacker Parts"
    }
});

// automatically import all files ending in *.stories.js
configure(require.context('../parts', true, /\.parts\.js$/), module);
