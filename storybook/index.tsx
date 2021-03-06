import {configure, getStorybookUI} from '@storybook/react-native';

import './rn-addons';
// @ts-ignore
import {loadStories} from "./storyLoader";

// import stories
configure(() => {
    loadStories();
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
    port: 7007,
    host: 'localhost',
    onDeviceUI: true
});

export default StorybookUIRoot;
