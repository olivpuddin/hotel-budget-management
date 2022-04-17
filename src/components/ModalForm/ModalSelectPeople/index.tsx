import React from 'react';

interface Props {
    onChange: (event: any) => void;
}

export const ModalSelectPeople = ({ onChange }: Props) => {
    return (
        <>
            <select onChange={onChange}>
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