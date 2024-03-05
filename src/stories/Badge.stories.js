import { Badge } from './Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export const primary = {
  args: {
    badgeVariant: 'primary',
    badgeStatus: 'status-up',
    badgeAmount: 100,
    badgeUnit: '%'
  },
};

export const secondary = {
  args: {
    badgeVariant: 'secondary',
    badgeStatus: 'status-up',
    badgeAmount: 100,
    badgeCase: '건',
    badgeUnit: '증가'
  },
};
