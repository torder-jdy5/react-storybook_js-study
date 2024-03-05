import { btn } from './btn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BTN',
  component: btn,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary = {
  args: {
    innerText: 'text',
    style: 'primary',
    size: 'md'
  },
};

export const tonal = {
  args: {
    innerText: 'text',
    style: 'tonal',
    size: 'md'
  },
};

export const outline = {
  args: {
    innerText: 'text',
    style: 'outline',
    size: 'md'
  },
};
