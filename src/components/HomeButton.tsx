import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Interfaz para las propiedades del componente HomeButton.
 */
interface HomeButtonProps {
  /** 
   * URL relativa para redirigir al componente padre. 
   * Esta URL será concatenada con la base actual.
   */
  redirectParent: string;
}

/**
 * Componente que representa un botón para redirigir a la página principal o a una sección específica.
 * Utiliza `useNavigate` de React Router para manejar la redirección.
 * 
 * @param redirectParent - URL relativa a la que se redirigirá al hacer clic en el botón.
 */
const HomeButton: React.FC<HomeButtonProps> = ({ redirectParent }) => {
  const navigate = useNavigate();

  /**
   * Maneja la redirección a la URL especificada.
   */
  const goToHomePage = (): void => {
    // Concatena la URL relativa con el hash `#` para la navegación.
    navigate(`/#${redirectParent}`);
  };

  return (
    <div className="home-link">
      <button 
        onClick={goToHomePage} 
        className="btn-home" 
        aria-label="Navegar al inicio"
      >
        <div className="sign">
          <i className="fa-solid fa-house" aria-hidden="true"></i>
        </div>
        <div className="text">Home</div>
      </button>
    </div>
  );
};

export default HomeButton;
