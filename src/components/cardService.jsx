import React from 'react';

const AboutHero = (props) => {
    return (
        <>
            <div 
                className="bg-cover bg-center h-[630px] m-8 mt-16 rounded-lg shadow-lg" 
                style={{ backgroundImage: `url(${props.Img})` }}
            >
                {/* Overlay azul transparente para dar um tom azulado por cima da imagem */}
                <div className="bg-blue-900 bg-opacity-50 h-full flex flex-col justify-center items-center rounded-lg">
                    <div className="text-center pt-8 text-4xl font-bold text-blue-100">
                        <h1>Minha experiência</h1>
                    </div>
                    <div className="text-center pt-8 text-2xl font-medium text-blue-200">
                        <p>Minha história</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHero;