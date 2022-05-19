// React
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import moment from "moment";

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

export const ModalStandart = ({ isOpen, onRequestClose }: ModalProps) => {
  const [days, setDays] = useState(0);
  const [payment, setPayment] = useState("");
  const [budget, setBudget] = useState(0);
  const [start, setStart] = useState(new Date());
  const [daysSelect, setDaysSelect] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  function handleBudget(event: number) {
    switch (event) {
      case 2:
        setBudget(615);
        break;
      case 3:
        setBudget(745);
        break;
      case 4:
        setBudget(865);
        break;
      case 5:
        setBudget(985);
        break;
      case 6:
        setBudget(1105);
        break;
      default:
        setBudget(0);
    }
  }

  function handleStartDate(date: Date) {
    setStart(date);
    const teste = date.getUTCDay();

    const arr = [];
    let i = 0;
    let value = teste;
    while (i !== days) {
      arr.push(value);
      value++;
      i++;
      if (value === 7) {
        value = 0;
      }
    }

    setDaysSelect(arr);
  }

  function getDiscounts() {
    let price = 0;
    daysSelect.map((item) => {
      if (item === 5 || item === 6 || item === 0) {
        price = price + budget;
      } else {
        price = price + (budget - 5);
      }
    });
    setTotal(price);
  }

  useEffect(() => {
    handleStartDate(start);
  }, [days]);

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
          onChange={(event) => {
            handleBudget(Number(event.target.value));
          }}
        />

        <DatePicker
          selected={start}
          onChange={handleStartDate}
          dateFormat="dd/MM/yyyy"
        />

        <p>Diárias</p>
        <ModalInput
          placeholder="Digite a quantidade de diárias"
          onChange={(event) => {
            setDays(Number(event.target.value));
          }}
        />

        <p>O pagamento será integral?</p>
        <ModalSelect onChange={(event) => setPayment(event.target.value)} />

        <ModalButton
          onClick={() => {
            getDiscounts();
          }}
        />

        <h3>
          Valor do orçamento: <br />
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </h3>

        {payment === "Sim" && (
          <h3>
            Valor do orçamento com desconto: <br />
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total - 0.1 * total)}
          </h3>
        )}
      </div>
    </ReactModal>
  );
};
