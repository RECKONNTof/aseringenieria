import React, { useEffect, useState } from "react";
import classNames from "classnames";

/** 
 * Representa un elemento del carrusel.
 * @property id - Identificador único del elemento.
 * @property imageUrl - URL de la imagen de fondo del carrusel.
 * @property title - Título que se mostrará en el carrusel.
 * @property fontSize - Tamaño de la fuente del título.
 * @property isLarge? - Indica si el título es grande (opcional).
 */
interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  fontSize: string;
  isLarge?: boolean; // Propiedad opcional
}

/**
 * Componente funcional para renderizar un carrusel interactivo.
 */
const HeroCarousel: React.FC = () => {
  /** Lista de elementos del carrusel */
  const carouselItems: CarouselItem[] = [
    {
      id: "hero-item-1",
      imageUrl: "/utils/hero-1.jpg",
      title: "Impulsamos el futuro con soluciones de energía sostenible.",
      fontSize: "7vh",
    },
    {
      id: "hero-item-2",
      imageUrl: "/utils/hero-2.jpg",
      title: "Aplicamos investigación y desarrollo de vanguardia en ingeniería y tecnología.",
      fontSize: "7vh",
    },
    {
      id: "hero-item-3",
      imageUrl: "/utils/hero-3.jpg",
      title: "Ofrecemos servicios de consultoría y asesoramiento en planificación eléctrica.",
      fontSize: "6.5vh",
    },
    {
      id: "hero-item-4",
      imageUrl: "/utils/hero-4.jpg",
      title: "Desarrollamos proyectos de infraestructura eléctrica e implementamos proyectos de eficiencia energética para un mundo más verde y sostenible.",
      fontSize: "4.8vh",
      isLarge: true,
    },
  ];

  /** Índice del elemento actualmente activo */
  const [activeIndex, setActiveIndex] = useState<number>(0);

  /** 
   * Configuración del ciclo automático del carrusel.
   * Cambia el índice activo cada 5 segundos.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [carouselItems.length]);

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={classNames("item", {
            "move-in": index === activeIndex,
          })}
          style={{ backgroundImage: `url(${item.imageUrl})` }} // Define la imagen de fondo
        >
          <h1
            className={`title ${item.isLarge ? "large-title" : ""}`}
            style={{ fontSize: `${item.fontSize}` }} // Aplica tamaño de fuente dinámico
          >
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
