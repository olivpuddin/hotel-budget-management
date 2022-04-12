import React, { useState } from "react";

// next components
import Head from "next/head";

// components
import { Button } from "./src/components/Button";
import { ModalStandart } from "./src/components/ModalStandart";
import { ModalLuxo } from "./src/components/ModalLuxo";
import { ModalChaleP } from "./src/components/ModalChaleP";
import { ModalChaleL } from "./src/components/ModalChaleL";

// styles
import styles from './styles/home.module.scss'


export default function Home() {
  const [modalStandart, setModalStandart] = useState(false);
  const [modalLuxo, setModalLuxo] = useState(false);
  const [modalChaleP, setModalChaleP] = useState(false);
  const [modalChaleL, setModalChaleL] = useState(false);

  function handleStandart() {
    setModalStandart(true);
  }

  function handleLuxo() {
    setModalLuxo(true);
  }

  function handleChaleP() {
    setModalChaleP(true);
  }

  function handleChaleL() {
    setModalChaleL(true);
  }

  function handleCloseModalStandart() {
    setModalStandart(false);
  }

  function handleCloseModalLuxo() {
    setModalLuxo(false);
  }

  function handleCloseModalChaleP() {
    setModalChaleP(false);
  }

  function handleCloseModalChaleL() {
    setModalChaleL(false);
  }


  return (
    <>
    <Head>
      <title>Budget | Hotelaria</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.content}> 
      {/* <Image src={logo} alt='logo' width={100} /> */}
      <h1>Hotel <br /> Orçamentos</h1>

      <h3>Selecione uma categoria</h3>

      <div className={styles.buttons}>
        <Button title="Standart" onOpenModal={handleStandart} />
        <Button title="Luxo" onOpenModal={handleLuxo} />
        <Button title="Chalé Vista Pedra" onOpenModal={handleChaleP} />
        <Button title="Chalé Vista Lago" onOpenModal={handleChaleL} />
      </div>

      <ModalStandart
        isOpen={modalStandart} 
        onRequestClose={handleCloseModalStandart}
      />

      <ModalLuxo
        isOpen={modalLuxo} 
        onRequestClose={handleCloseModalLuxo}
      />

      <ModalChaleP
        isOpen={modalChaleP} 
        onRequestClose={handleCloseModalChaleP}
      />

      <ModalChaleL
        isOpen={modalChaleL} 
        onRequestClose={handleCloseModalChaleL}
      />

      <p>Developed by Bruna Oliveira, © 2022</p>
      </section>
    </main>
    </>
  );
}