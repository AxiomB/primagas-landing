'use client'
import React from 'react';

export const CallMeDomesticaComponent: React.FC<{ number: string }> = ({ number }: { number: string }) => {

    const sendNumber = () => {

    }

    return (
        <section>
            <section className='callme-card-header'>
                <p>Llama para informarte</p>
                <p>{number}</p>
                <p>Solo para nuevos clientes</p>
                <p>
                    ¡Date prisa, solo para las
                    50 primeras instalaciones!
                </p>
            </section>
            <section className='callme-card-body'>
                <img src='/assets/domestica/icono'></img>
                <p>
                    Déjanos tu número
                    y te llamamos en
                    unos minutos
                </p>
                <input type='number'></input>
                <button onClick={sendNumber}>Llamadme </button>
            </section>
        </section>
    );
}