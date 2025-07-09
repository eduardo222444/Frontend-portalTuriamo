import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";

import bgCachoeira from '../assets/imagens/bgCachoeira.png';

import catedral from "../assets/imagens/catedral.jpg";
import cristo from "../assets/imagens/cristo.jpg";
import marques from "../assets/imagens/marques.jpg";
import mercadao from "../assets/imagens/mercadao.jpg";
import praca from "../assets/imagens/praca.jpg";
import teatro from "../assets/imagens/teatro.jpg";

const touristPlaces = [
    { Image: catedral, title: "Catedral de Pouso Alegre", description: "Ponto turístico religioso" },
    { Image: cristo, title: "Cristo Redentor", description: "Ponto turístico religioso" },
    { Image: marques, title: "Marques Plaza", description: "Hotel 4 estrelas" },
    { Image: mercadao, title: "Mercadão Municipal", description: "Melhor lugar para comprar presentes" },
    { Image: praca, title: "Praça de Pouso Alegre", description: "Praça Senador José Bento" },
    { Image: teatro, title: "Teatro Municipal", description: "Venha prestigiar nossos artistas municipais" },
];

const ServicePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <Hero 
                    Background={bgCachoeira} 
                    titulo="Portal de Serviços" 
                    paragrafo="Venha conhecer os mais diversos serviços de turismo" 
                    rota="#" 
                    botao="Conhecer Agora" 
                />

                <Carousel items={touristPlaces} titulo="Pontos turísticos locais mais visitados" />
            </main>

            <Footer />
        </div>
    );
};

export default ServicePage;