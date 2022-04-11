import React, { useState } from "react";
import logo from '../public/images/logo.svg'

import Image from "next/image";
import Head from "next/head";

import styles from '../styles/home.module.scss'
import { Button } from "../src/components/Button";
import { Modal } from "../src/components/Modal";


export default function Home() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false);
  }

  function handleStandart() {

  }

  function handleLuxo() {

  }

  function handleChaleP() {

  }

  function handleChaleL() {

  }



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
        <Button title="Standart" onOpenModal={handleOpenNewTransactionModal} />
        <Button title="Luxo" onOpenModal={handleOpenNewTransactionModal} />
        <Button title="Chalé Vista Pedra" onOpenModal={handleOpenNewTransactionModal} />
        <Button title="Chalé Vista Lago" onOpenModal={handleOpenNewTransactionModal} />
      </div>

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <p>Developed by Bruna Oliveira, © 2022</p>
      </section>
    </main>

    </>
  );
}