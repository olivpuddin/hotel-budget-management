import React from 'react';

import styles from './styles.module.scss'

interface Props {
    onChange: (event: any) => void;
}

export const ModalSelectPeople = ({ onChange }: Props) => {
    return (
        <>
            <select onChange={onChange} className={styles.select}>
                <option selected disabled>Selecione a quantidade de pessoas</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
        </>
    );
}