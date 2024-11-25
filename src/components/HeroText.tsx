import React from "react";

/**
 * Componente que representa la sección introductoria dentro de Hero.
 * Contiene el texto principal y un boton para redirección.
 */
const HeroText: React.FC = () => {
  return (
    <div className="text-container">
      <p>
        En ASER INGENIERÍA CONSULTORES conceptualizamos y diseñamos nueva infraestructura eléctrica y
        proveemos soluciones en eficiencia energética basadas en la inteligencia artificial.
        Desarrollamos soluciones eléctricas inteligentes para garantizar un suministro energético confiable,
        eficiente y respetuoso con el medio ambiente.💡
      </p>
      <button className="footer-container">
        Conoce más
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default HeroText;
