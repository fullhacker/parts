import { addParameters, configure } from '@storybook/html';
import { themes } from '@storybook/theming';

// set options
addParameters({
    options: {
        name: "Full Hacker Parts",
        // theme: themes.dark
    }
});

// automatically import all files ending in *.stories.js
configure(require.context('../parts', true, /\.parts\.js$/), module);
