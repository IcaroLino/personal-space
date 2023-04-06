import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, size }) {
  return (
    <button 
      className={`${styles.button} ${styles[size]}`}
    >
      {children}
    </button>
  )
}
