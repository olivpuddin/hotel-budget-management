import React from "react";
import logo from '../public/images/logo.svg'

import Image from "next/image";
import Head from "next/head";

import styles from '../styles/home.module.scss'
import { Button } from "../src/components/Button";

export default function Home() {
  return (
    <>
    <Head>
      <title>Orçamento | Hotel Fazenda Pedra do Rodeadouro</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.content}> 
      <Image src={logo} alt='logo' width={100} />
      <h1>Hotel Fazenda <br /> Pedra do Rodeadouro</h1>

      <h3>Selecione uma categoria</h3>

      <div className={styles.buttons}>
        <Button title="Standart" />
        <Button title="Luxo" />
        <Button title="Chalé Vista Pedra" />
        <Button title="Chalé Vista Lago" />
      </div>

      <p>Developed by Bruna Oliveira, © 2022</p>
      </section>
    </main>

    </>
  );
}