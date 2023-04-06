import PostContent from 'components/PostContent';
import React from 'react';
import styles from './AboutMe.module.css';
import coverPicture from 'assets/about_me_cover.png';
import aboutMePic from 'assets/about_me_picture.png';

export default function AboutMe() {
  return (
    <PostContent
      coverPicture={coverPicture}
      title='Sobre mim'
    >
      <h3 className={styles.subtitle}>
        Olá, eu sou o Ícaro Lino
      </h3>

      <img
        src={aboutMePic}
        alt='Foto de Ícaro Lino'
        className={styles.aboutMePicture}
      />

      <p className={styles.paragraph}>
        Oi, tudo bem? Eu sou desenvoveldor FullStack em formação e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragraph}>
        Minha história com programação começou no Instituto Federal do Rio Grande do Norte (IFRN), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
      </p>      
    </PostContent>
  )
}
