import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Brand } from 'assets/brand.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Brand /> Desenvolvido por Ícaro Lino
    </footer>
  )
}
