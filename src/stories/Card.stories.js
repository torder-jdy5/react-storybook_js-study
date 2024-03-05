import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export const primary = {
  args: {
    variant: 'primary',
    title: '타이틀--primary',
  },
};

export const secondary = {
  args: {
    variant: 'secondary',
    title: '타이틀--secondary',
    subTitle: '서브타이틀'
  },
};

export const info = {
  args: {
    variant: 'info',
    title: '타이틀--info',
  },
};

