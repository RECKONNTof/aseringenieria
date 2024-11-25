import React from "react";

/**
 * Componente de botón de acción que permite desplazar al formulario de contacto.
 * Al hacer clic en el botón, se desplaza suavemente hacia la sección de contacto.
 */
const ActionButton: React.FC = () => {

  /**
   * Función que desplaza la vista hacia la sección de contacto cuando se hace clic en el botón.
   * Utiliza el método `scrollIntoView` para realizar el desplazamiento suave.
   */
  const goToContactForm = () => {
    // Buscar el elemento de la sección de contacto mediante su id
    const contactSection = document.getElementById('Contáctanos');

    // Si la sección de contacto existe, desplazarse suavemente hacia ella
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={goToContactForm} className="btn-action" type="button">
      Solicita una evaluación
    </button>
  );
};

export default ActionButton;
