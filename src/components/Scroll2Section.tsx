import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente para desplazar suavemente a una sección específica de la página
 * cuando el hash en la URL cambia.
 * 
 * Este componente observa cambios en la ubicación actual (URL) y,
 * si detecta un hash, intenta encontrar el elemento HTML con un ID
 * correspondiente al valor del hash. Si se encuentra, desplaza la vista hacia esa sección.
 */
const Scroll2Section: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        /**
         * Lógica para desplazar suavemente hacia la sección correspondiente al hash en la URL.
         */
        if (location.hash) {
            // Remueve el símbolo '#' del hash para obtener el ID
            const sectionId = location.hash.substring(1);

            // Intenta localizar el elemento correspondiente al ID en el DOM
            const section = document.getElementById(sectionId);

            if (section) {
                // Desplaza la vista hacia el elemento encontrado de forma suave
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100); // Pequeño retraso para asegurar que la URL esté completamente actualizada
            }
        }
    }, [location]); // El efecto se ejecuta cada vez que cambia la ubicación

    // Este componente no renderiza ningún elemento en la interfaz de usuario
    return null;
};

export default Scroll2Section;
