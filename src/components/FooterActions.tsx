import WhatsAppButton from "./WhatsAppButton";
import HomeButton from "./HomeButton";

// Definición de la interfaz que especifica la propiedad `redirectParent`
// para la redirección del botón Home.
interface ParentAction {
    redirectParent: string;
}

/**
 * Componente FooterActions que contiene los botones de WhatsApp y Home.
 * Este componente recibe como prop la URL de redirección para el botón Home.
 * 
 * @param redirectParent - URL a la que se redirige el botón Home.
 */
const FooterActions: React.FC<ParentAction> = ({ redirectParent }) => {
    return (
        <div>
            {/* Botón de WhatsApp */}
            <WhatsAppButton />
            {/* Botón de Inicio, pasando la URL de redirección */}
            <HomeButton redirectParent={redirectParent} />
        </div>
    );
};

export default FooterActions;
