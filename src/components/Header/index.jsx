import React from 'react';
import MenuLink from '../MenuLink';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to='/'>Início</MenuLink>
        <MenuLink to='/aboutme'>Sobre mim</MenuLink>
      </nav>
    </header>
  )
}
