import React from 'react';

import styles from './styles.module.scss'

interface ButtonProps {
    onClick: () => void;
}

export const ModalButton = ({ onClick }: ButtonProps) => {
    return (
        <>
             <button
                    className={styles.button}
                    type='button'
                    onClick={onClick}
                    >
                    Calcular
                </button>
        </>
    );
}