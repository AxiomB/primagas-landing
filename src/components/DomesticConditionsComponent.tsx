'use client'

import React from 'react';

export const DomesticConditionsComponent: React.FC<{ title: string, backgroundImage: any, content: string }> = ({ title, backgroundImage, content }: { title: string, backgroundImage: any, content: string }) => {
    return (
        <section>
            <p>{title}</p>
            <img src={backgroundImage.url}></img>
            <p>{content}</p>
        </section>
    );
}