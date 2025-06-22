import React from 'react';
import MyButton from './MyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  title: 'Example/MyButton',
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: 'اضغط هنا',
  },
};
