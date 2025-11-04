import { useEffect, useState } from 'react';
import css from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number; 
  onClose: () => void;
  isVisible: boolean; 
}

const DURATION_DEFAULT = 5000;

const IconMap: Record<ToastType, string> = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

export const Toast = ({
    message,
    type,
    duration = DURATION_DEFAULT,
    onClose,
    isVisible,
}: ToastProps) => {

    const TOAST_TRANSITION_DURATION = 500;  

    const [isAnimatedVisible, setIsAnimatedVisible] = useState(false); 

    useEffect(() => {
        if (isVisible) {

            const enterTimer = setTimeout(() => {
                setIsAnimatedVisible(true);
            }, TOAST_TRANSITION_DURATION);
    
            let closeTimer: number | undefined;
            if (duration > 0) {
                closeTimer = setTimeout(() => {
                    onClose();
                }, duration);
            }

            return () => {
                clearTimeout(enterTimer);
                if (closeTimer) clearTimeout(closeTimer);
            };
        }
    }, [duration, isVisible, onClose]);

    const toastClassNames = [
        css.toast,
        css[type],
        isAnimatedVisible ? css.visible : '' 
    ].join(' ');

    return (
        <div className={toastClassNames}>
            <div className={css.icon}>{IconMap[type]}</div>
            <div className={css.message}>{message}</div>
            <button className={css.closeButton} onClick={onClose}>
                <svg width={14} height={14} className={css.svg}>
                    <use href='./sprite.svg#icon-clear'></use>
                </svg>
            </button>
        </div>
    );
};