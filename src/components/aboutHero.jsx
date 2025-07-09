import React from 'react';
import { createSessionStorage } from 'react-router';
import cristo from "../assets/imagens/cristo.jpg";
const AboutHero = ({ Img }) => {
    return (
        <div
            className="relative bg-cover bg-center h-[90vh] w-full"
            style={{ backgroundImage: `url(${cristo})` }}
        >
            {/* Overlay escuro para melhorar a legibilidade */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Quadrado com conteúdo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg text-center">
                <h1 className="text-3xl font-bold text-green-800 mb-4">Serra Verde</h1>
                <p className="text-gray-800 text-lg">
                    A Serra Verde é um dos destinos naturais mais encantadores da região, conhecida por suas trilhas, cachoeiras e paisagens de tirar o fôlego. Ideal para quem busca contato com a natureza e tranquilidade em meio à mata.
                </p>
            </div>
        </div>
    );
};

export default AboutHero;