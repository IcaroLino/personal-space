import React from 'react';
import styles from './Banner.module.css';
import paintedCircle from 'assets/painted_circle.png';
import myPicture from 'assets/my_picture.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.title}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Ícaro Lino, desenvolvedor Full Stack. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.images}>
        <img 
          className={styles.paintedCircle}
          src={paintedCircle}
          aria-hidden={true}
          alt='Circulo colorido'
        />

        <img 
          className={styles.myPicture}
          src={myPicture}
          alt='Foto de Ícaro Lino'
        />          
      </div>
    </div>
  )
}
