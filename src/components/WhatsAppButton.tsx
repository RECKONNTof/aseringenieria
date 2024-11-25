import React from "react";

/**
 * Abre una nueva pestaña con un chat a cierto numero en especifico
 */
const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    // Redirige al usuario a la URL de WhatsApp
    window.open("https://wa.me/+593968966403", "_blank");
  };

  return (
    <div className="whatsapp-link">
      <button className="btn-whatsapp" onClick={handleClick}>
        <div className="sign">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className="text">Whatsapp</div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
