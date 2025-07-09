import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import catedral from "../assets/imagens/catedral.jpg";
import cristo from "../assets/imagens/cristo.jpg";
import marques from "../assets/imagens/marques.jpg";
import mercadao from "../assets/imagens/mercadao.jpg";
import praca from "../assets/imagens/praca.jpg";
import teatro from "../assets/imagens/teatro.jpg";

const tourist_places = [
    { Image: catedral, title: "Catedral de Pouso Alegre", description: "Ponto turístico religioso" },
    { Image: cristo, title: "Cristo Redentor", description: "Ponto turístico religioso" },
    { Image: marques, title: "Marques Plaza", description: "Hotel 4 estrelas" },
    { Image: mercadao, title: "Mercadão Municipal", description: "Melhor lugar para comprar presentes" },
    { Image: praca, title: "Praça de Pouso Alegre", description: "Praça Senador José Bento" },
    { Image: teatro, title: "Teatro Municipal", description: "Venha prestigiar nossos artistas municipais" },
];

const Carousel = () => {
    return (
        <>
            <div className="relative z-10 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 py-12 px-4 rounded-xl shadow-inner">
                <h1 className="text-3xl font-bold text-center text-blue-900 mb-10 drop-shadow-md">
                    Pontos turísticos locais mais visitados
                </h1>

                <div>
                    {tourist_places.length > 3 ? (
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                        corFundo="bg-blue-200" // exemplo de uso no CardService se suportar props
                                        corTexto="text-blue-900"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                        corFundo="bg-blue-200"
                                        corTexto="text-blue-900"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </>
    );
};

export default Carousel;