import React from "react";

import styles from "./styles.module.scss";

interface SelectProps {
  onChange: (event: any) => void;
}

export const ModalSelect = ({ onChange }: SelectProps) => {
  return (
    <>
      <select onChange={onChange} className={styles.select}>
        <option selected disabled>
          Selecione uma opção
        </option>
        <option>Sim</option>
        <option>Não</option>
      </select>
    </>
  );
};
