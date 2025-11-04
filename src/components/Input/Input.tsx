import React, { useState } from 'react';
import css from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input = ({
  type = 'text',
  value,
  onChange,
  onClear,
  clearable,
  placeholder,
}: InputProps) => {

  const [isVisible, setIsVisible] = useState(false);

  const showPasswordToggle = type === 'password';
  const showClearButton = clearable && (value !== null && value !== undefined && value !== '');

  let actualInputType = type;
  
  if (type === 'password' && isVisible) {
    actualInputType = 'text';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === 'number' ? parseFloat(event.target.value) : event.target.value;
    onChange(newValue);
  };

  const handleClear = () => {
    const emptyValue = type === 'number' ? 0 : '';
    onChange(emptyValue);
    if (onClear) {
        onClear();
    }
  };

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className={css.inputWrapper}>
        
      <input
        className={css.input}
        type={actualInputType === 'password' ? 'password' : actualInputType} 
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
        {showClearButton && (
          <button
            type="button"
            className={css.clearButton}
            onClick={handleClear}
            aria-label="Очистити поле вводу"
          >
            <svg width={14} height={14}>
                <use href='./sprite.svg#icon-clear'></use>
            </svg>
          </button>
        )}

        {showPasswordToggle && (
          <button
            type="button"
            className={css.toggleButton}
            onClick={toggleVisibility}
          >
            {isVisible ? (
                <svg width={14} height={14}>
                    <use href='./sprite.svg#icon-closed_eye'></use>
                </svg> 
            ) : (
                <svg width={14} height={14}>
                    <use href='./sprite.svg#icon-opened_eye'></use>
                </svg> 
            )}
          </button>
        )}
      </div>
  );
};