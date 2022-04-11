import React, { useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';

import close from '../../../public/images/close.svg';

import ReactModal from 'react-modal';

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
    const [people, setPeople] = useState(0);
    const [days, setDays] = useState(0);

   const [total, setTotal] = useState(0);

    function handleTotal() {
        setTotal(people * days);
    }   

    return (
        <div className={styles.container}>
        <ReactModal
        contentLabel='Orçamento'
        ariaHideApp={false} 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <h1 className={styles.title}>Orçamento</h1>

            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
                > 
                <Image src={close} alt="Fechar modal" />
            </button>

            <p>Quantidade de Pessoas</p>
            <input 
                type='number'
                placeholder='Quantidade de Pessoas'
                value={people}
                onChange={event => setPeople(Number(event.target.value))}
            />

            <p>Quantidade de dias</p>
            <input 
                placeholder='Quantidade de dias'
                value={days}
                onChange={event => setDays(Number(event.target.value))}
            />

            <button
                className={styles.rate}
                type='button'
                onClick={handleTotal}
            >
                Calcular
            </button>

            <h2>Valor do orçamento: <br />
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(total)}
            </h2>
        </ReactModal>
        </div>
    );
}