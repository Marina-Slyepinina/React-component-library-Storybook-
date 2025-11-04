import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input, type InputProps } from '../components/Input/Input';

const InputWrapper: React.FC<InputProps> = (args) => {
  const [currentValue, setCurrentValue] = useState(args.value);

  const handleChange = (newValue: string | number) => {
    setCurrentValue(newValue);
  };

  return <Input {...args} value={currentValue} onChange={handleChange} />;
};

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: InputWrapper, 
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'number', 'email'] },
    clearable: { control: 'boolean' },
    value: { control: 'text' }, 
    onChange: { action: 'changed', table: { disable: true } }, 
    onClear: { action: 'cleared', table: { disable: true }  },
  },
};

export default meta;
type Story = StoryObj<typeof InputWrapper>;

export const DefaultText: Story = {
  args: {
    placeholder: 'Введіть текст',
    type: 'text',
    value: 'Текст',
  },
};

export const ClearableInput: Story = {
  args: {
    placeholder: 'Введіть текст',
    clearable: true,
    value: 'Текст, що можна очистити',
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Введіть пароль',
    type: 'password',
    value: '123456789',
    clearable: false,
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: 'Введіть число',
    type: 'number',
    value: "10",
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: 'Введіть вашу електронну пошту',
    type: 'email', 
    value: 'test@example.com',
    clearable: true,
  },
};