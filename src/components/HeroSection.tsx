import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText";
import ActionButton from "./ActionButton";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Componente que representa la sección principal (Hero) de la página.
 * Contiene un carrusel, un botón de acción, un texto destacado y un botón para WhatsApp.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="Home">
      {/* Carrusel de imágenes y contenido */}
      <HeroCarousel />

      {/* Botón principal para acciones destacadas */}
      <ActionButton />

      {/* Texto principal de la sección */}
      <HeroText />

      {/* Botón para contacto vía WhatsApp */}
      <WhatsAppButton />
    </section>
  );
};

export default HeroSection;
