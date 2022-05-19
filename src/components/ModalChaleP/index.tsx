// React
import React, { useState } from "react";
import ReactModal from "react-modal";

// components
import { ModalButton } from "../ModalForm/ModalButton";
import { ModalInput } from "../ModalForm/ModalInput";
import { ModalSelect } from "../ModalForm/ModalSelect";
import { ModalSelectPeople } from "../ModalForm/ModalSelectPeople";

// Next components
import Image from "next/image";

// images
import close from "../../../public/images/close.svg";

// styles
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalChaleP = ({ isOpen, onRequestClose }: ModalProps) => {
  const [people, setPeople] = useState(0);
  const [days, setDays] = useState(0);
  const [payment, setPayment] = useState("");

  const [budget, setBudget] = useState(0);

  function handleBudget() {
    switch (people) {
      case 2:
        setBudget(750 * days);
        break;
      case 3:
        setBudget(910 * days);
        break;
      case 4:
        setBudget(1055 * days);
        break;
      case 5:
        setBudget(1200 * days);
        break;
      case 6:
        setBudget(1350 * days);
        break;
      default:
        setBudget(0);
    }

    setPeople(0);
    setDays(0);
  }

  return (
    <ReactModal
      contentLabel="Orçamento"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.wrapper}>
        <h1>Orçamento</h1>

        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <Image src={close} alt="Fechar modal" />
        </button>

        <p>Pessoas</p>
        <ModalSelectPeople
          onChange={(event) => setPeople(Number(event.target.value))}
        />

        <p>Diárias</p>
        <ModalInput
          placeholder="Digite a quantidade de diárias"
          onChange={(event) => setDays(Number(event.target.value))}
        />

        <p>O pagamento será integral?</p>
        <ModalSelect onChange={(event) => setPayment(event.target.value)} />

        <ModalButton onClick={handleBudget} />

        <h3>
          Valor do orçamento: <br />
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(budget)}
        </h3>

        {payment === "Sim" && (
          <h3>
            Valor do orçamento com desconto: <br />
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(budget - 0.1 * budget)}
          </h3>
        )}
      </div>
    </ReactModal>
  );
};
