// React
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";

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

export const ModalChaleL = ({ isOpen, onRequestClose }: ModalProps) => {
  const [days, setDays] = useState(0);
  const [payment, setPayment] = useState("");
  const [budget, setBudget] = useState(0);
  const [start, setStart] = useState(new Date());
  const [daysSelect, setDaysSelect] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  function handleBudget(event: number) {
    switch (event) {
      case 2:
        setBudget(730);
        break;
      case 3:
        setBudget(875);
        break;
      case 4:
        setBudget(1005);
        break;
      case 5:
        setBudget(1155);
        break;
      case 6:
        setBudget(1290);
        break;
      default:
        setBudget(0);
    }
  }

  function handlePeriod(date: Date) {
    setStart(date);
    const gettingDay = date.getUTCDay();

    const gettingPeriod = [];
    let i = 0;
    let value = gettingDay;
    while (i !== days) {
      gettingPeriod.push(value);
      value++;
      i++;
      if (value === 7) {
        value = 0;
      }
    }

    setDaysSelect(gettingPeriod);
  }

  function getDiscounts() {
    let price = 0;
    daysSelect.map((item) => {
      if (item === 5 || item === 6 || item === 0) {
        price = price + budget;
      } else {
        price = price + budget - 0.15 * budget;
      }
    });
    setTotal(price);
  }

  const daysRef = useRef(days);

  function handleDays(event: any) {
    let daily = Number(event.target.value);
    if (event.target.value > daysRef.current) {
      setDays(daily - 1);
    }

    daysRef.current = daily;
  }

  useEffect(() => {
    handlePeriod(start);
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

        <p>Selecione a data de início</p>
        <DatePicker
          selected={start}
          onChange={handlePeriod}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />

        <p>Diárias</p>
        <ModalInput
          type="number"
          placeholder="Digite a quantidade de diárias"
          value={days}
          onChange={(e) => {
            if (!isNaN(e.target.value && e.target.value > 0)) {
              handleDays(e);
            }
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
            Valor do orçamento com desconto pix: <br />
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
