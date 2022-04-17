import React from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
    title: string,
    onOpenModal: () => void,
}

export const Button = ({ title, onOpenModal }: ButtonProps) => {
    return (
        <button
            type='button'
            className={styles.buttons}
            onClick={onOpenModal}
        >
            {title}
        </button>
    );
}