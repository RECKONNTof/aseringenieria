import React from "react";

// Interface para el logo del cliente
/**
 * Representa los datos de un cliente individual.
 */
interface ClientItem {
    imageSrc: string;
    altText: string;
    width: string;
    height: string;
}

// Interface para el listado de clientes
/**
 * Representa los detalles de un grupo de clientes.
 */
interface ClienteDetailProps {
    items: ClientItem[]; // Lista de clientes
    time: string; // Tiempo de animación
    transform?: string; // Desplazamiento opcional para la animación
}

// Interface que extiende las propiedades CSS para agregar variables personalizadas
/**
 * Propiedades CSS extendidas para soportar variables personalizadas.
 */
interface CustomCSSProperties extends React.CSSProperties {
    "--time"?: string | number; // Variable personalizada para el tiempo de animación
}

// Componente para un cliente individual
/**
 * Renderiza un cliente con su logo y dimensiones específicas.
 */
const ClienteItem: React.FC<ClientItem> = ({ imageSrc, altText, width, height }) => (
    <div className="item" style={{ minWidth: width }}>
        <img style={{ height }} src={imageSrc} alt={altText} />
    </div>
);

// Componente para un grupo de clientes
/**
 * Renderiza un grupo de clientes con animaciones y configuraciones específicas.
 */
const ClienteDetail: React.FC<ClienteDetailProps> = ({ items, time, transform }) => (
    <div
        className="detail"
        style={{
            "--time": time,
            transform: transform ? `translateX(${transform})` : undefined,
        } as CustomCSSProperties}
    >
        {items.map((item, index) => (
            <ClienteItem
                key={index}
                imageSrc={item.imageSrc}
                altText={item.altText}
                width={item.width}
                height={item.height}
            />
        ))}
    </div>
);

// Componente principal de clientes
/**
 * Renderiza la sección de clientes que confían en la empresa.
 */
const Clientes = () => {
    const clientesData: ClientItem[] = [
        {
            imageSrc: "/utils/eec.png",
            altText: "EEC",
            width: "27vw",
            height: "10vh"
        },
        {
            imageSrc: "/utils/acciona.svg",
            altText: "Acciona",
            width: "14vw",
            height: "10vh"
        },
        {
            imageSrc: "/utils/ferrero-rocher.png",
            altText: "Ferrero Rocher",
            width: "10vw",
            height: "10vh"
        },
        {
            imageSrc: "/utils/lafabril.png",
            altText: "La Fabril",
            width: "9vw",
            height: "12vh"
        },
        {
            imageSrc: "/utils/cnel.jpg",
            altText: "CNEL",
            width: "15vw",
            height: "25vh"
        },
        {
            imageSrc: "/utils/alcaldia-cuenca.png",
            altText: "Alcaldía Cuenca",
            width: "9vw",
            height: "15vh"
        },
        {
            imageSrc: "/utils/eeq.png",
            altText: "EEQ",
            width: "13vw",
            height: "12vh"
        },
        {
            imageSrc: "/utils/canala.svg",
            altText: "Canala",
            width: "20vw",
            height: "6.5vh"
        },
    ];

    return (
        <section className="clientes" id="Clientes">
            <div>
                <h2>CLIENTES QUE CONFÍAN EN NOSOTROS</h2>
            </div>
            <div className="detail-container">
                {/* Primera fila de clientes */}
                <ClienteDetail items={clientesData} time="0s" />
                {/* Segunda fila de clientes con desplazamiento */}
                <ClienteDetail items={clientesData} time="12.5s" transform="-438vw" />
            </div>
        </section>
    );
};

export default Clientes;
