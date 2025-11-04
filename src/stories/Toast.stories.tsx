import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, type ToastProps } from '../components/Toast/Toast';


const ToastWrapper = (props: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => setIsVisible(true);
  const hideToast = () => setIsVisible(false);

  return (
    <div style={{ padding: '20px', minHeight: '150px' }}>
      <button onClick={showToast} disabled={isVisible} style={{ borderRadius: '4px', backgroundColor: '#fff', padding: "6px 8px"}}>
        Show {props.type.toUpperCase()} Toast
      </button>
      
      {isVisible && (
        <Toast
          {...props}
          isVisible={isVisible}
          onClose={hideToast}
        />
      )}
      
      {!isVisible && <p style={{marginTop: '20px', fontFamily: 'sans-serif'}}>Натисніть кнопку, щоб показати сповіщення.</p>}
    </div>
  );
};

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: ToastWrapper,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Текст сповіщення' },
    type: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    duration: { control: 'number', description: 'Тривалість авто-закриття в мс (0 - вимкнути)' },
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;

type Story = StoryObj<typeof ToastWrapper>;


export const SuccessToast: Story = {
  args: {
    message: 'Successfully!',
    type: 'success',
    duration: 1500,
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'Error!',
    type: 'error',
    duration: 0, 
  },
};

export const WarningToast: Story = {
  args: {
    message: 'Warning',
    type: 'warning',
    duration: 3000, 
  },
};

export const InfoToast: Story = {
  args: {
    message: 'Info',
    type: 'info',
    duration: 4000, 
  },
};