import React from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
    title: string,
}

export const Button = ({ title }: ButtonProps) => {
    return (
        <button
            type='button'
            className={styles.luxo}
        >
            {title}
        </button>
    );
}