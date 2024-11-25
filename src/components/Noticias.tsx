import React, { useState, useEffect } from "react";

// Tipos para las propiedades de los componentes hijos
interface CarouselItemProps {
    id: string;
    imageUrl: string;
    title: string;
    isActive: boolean;
    isMoveIn: boolean;
}

interface CarouselButtonProps {
    id: string;
    isActive: boolean;
    onClick: () => void;
}

interface MenuItemProps {
    text: string;
}

// Componente para un elemento del carrusel
const CarouselItem: React.FC<CarouselItemProps> = ({ id, imageUrl, title, isActive, isMoveIn }) => {
    const className = `item carousel-item ${isActive ? "active" : isMoveIn ? "move-in" : ""}`;
    return (
        <div className={className} id={id} style={{ backgroundImage: `url(${imageUrl})` }}>
            <h3>{title}</h3>
        </div>
    );
};

// Componente para los botones del carrusel
const CarouselButton: React.FC<CarouselButtonProps> = ({ id, isActive, onClick }) => (
    <button
        type="button"
        className={`item ${isActive ? "active" : ""}`}
        id={id}
        onClick={onClick}
    ></button>
);

// Componente para un ítem del menú
const MenuItem: React.FC<MenuItemProps> = ({ text }) => (
    <li>
        <i className="fa-solid fa-circle"></i>
        {text}
    </li>
);

// Componente principal
const Noticias: React.FC = () => {
    // Datos del carrusel
    const carouselItems = [
        {
            id: "carousel-item-1",
            imageUrl: "/utils/calidad-energia.jpg",
            title: "MRC Consultants and Transaction Advisers - América Latina y el Caribe",
        },
        {
            id: "carousel-item-2",
            imageUrl: "/utils/contacto.png",
            title: "MRC Consultants and Transaction Advisers - América Latina y el Caribe",
        },
        {
            id: "carousel-item-3",
            imageUrl: "/utils/eficiencia-energetica.jpg",
            title: "MRC Consultants and Transaction Advisers - América Latina y el Caribe",
        },
        {
            id: "carousel-item-4",
            imageUrl: "/utils/mision.jpg",
            title: "MRC Consultants and Transaction Advisers - América Latina y el Caribe",
        },
    ];

    // Datos del menú
    const menuItems = Array(14).fill("MRC Consultants and Transaction Advisers - América Latina y el Caribe");

    // Estado para controlar el índice activo
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Efecto para manejar el cambio automático de elementos del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [activeIndex]);

    /**
     * Cambia al siguiente elemento del carrusel.
     */
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    /**
     * Cambia al elemento anterior del carrusel.
     */
    const handlePrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    /**
     * Determina las clases dinámicas para cada elemento del carrusel.
     * @param index Índice del elemento actual
     */
    const getClassNames = (index: number) => {
        const isActive = index === activeIndex;
        const isMoveIn = index === (activeIndex + 1) % carouselItems.length;

        return { isActive, isMoveIn };
    };

    return (
        <section className="noticias" id="Noticias">
            <div>
                <h2>NOTICIAS</h2>
            </div>
            <div className="container">
                {/* Carrusel */}
                <div className="carousel">
                    <div className="view">
                        {carouselItems.map((item, index) => {
                            const { isActive, isMoveIn } = getClassNames(index);
                            return (
                                <CarouselItem
                                    key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    isActive={isActive}
                                    isMoveIn={isMoveIn}
                                />
                            );
                        })}
                    </div>
                    <div className="number-container">
                        {carouselItems.map((_, index) => (
                            <CarouselButton
                                key={index}
                                id={`number-item-${index + 1}`}
                                isActive={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="displacement-container">
                        <button
                            type="button"
                            id="carousel-previous"
                            className="previous"
                            onClick={handlePrevious}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            type="button"
                            id="carousel-next"
                            className="next"
                            onClick={handleNext}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Menú del carrusel */}
                <div className="carousel-menu">
                    <h3>Ultimas Noticias</h3>
                    <ul>
                        {menuItems.map((text, index) => (
                            <MenuItem key={index} text={text} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Noticias;
