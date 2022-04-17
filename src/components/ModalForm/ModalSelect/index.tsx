import React from 'react';

interface SelectProps {
    onChange: (event: any) => void;
}

export const ModalSelect = ({ onChange }: SelectProps) => {
    return (
        <>
            <select onChange={onChange}>
                <option selected disabled>Selecione uma opção</option>
                <option>Sim</option>
                <option>Não</option>
            </select>
        </>
    );
}