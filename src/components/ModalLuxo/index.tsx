// React
import React, { useState } from 'react';
import ReactModal from 'react-modal';

// Next components
import Image from 'next/image';

// images
import close from '../../../public/images/close.svg';

// styles
import styles from './styles.module.scss'


interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export const ModalLuxo = ({ isOpen, onRequestClose }: ModalProps) => {
    const [people, setPeople] = useState(0);
    const [days, setDays] = useState(0);

   const [budget, setBudget] = useState(0);

    function handleBudget() {
        setBudget(people + days);

        setPeople(0);
        setDays(0);
    }   

    return (
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
                onClick={handleBudget}
            >
                Calcular
            </button>

            <h2>Valor do orçamento: <br />
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(budget)}
            </h2>
        </ReactModal>
    );
}