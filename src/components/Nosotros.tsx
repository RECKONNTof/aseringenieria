import React from "react";

// Definición de la interfaz que especifica laS propiedades
// para cada item del apartado Nostros
interface ItemProps {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
}

/**
 * Componente Item que contiene los botones de WhatsApp y Home.
 * Este componente recibe como prop la URL de redirección para el botón Home.
 * 
 * @param redirectParent - URL a la que se redirige el botón Home.
 */
const Item: React.FC<ItemProps> = ({ title, description, backgroundImage, backgroundColor }) => (
  <div className="item">
    <div
      className="image"
      role="img"
      aria-label={title}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {title}
    </div>
    <div className="description" style={{ fontSize: "2.5vh", backgroundColor }}>
      {description}
    </div>
  </div>
);

const Nosotros: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "MISIÓN",
      description:
        "Proporcionar a nuestros clientes servicios de la mayor calidad en investigación, desarrollo, innovación y consultoría en el sector de la energía eléctrica, con altos valores de ética y compromiso social.",
      backgroundImage: "/utils/mision.jpg",
      backgroundColor: "var(--gray)",
    },
    {
      title: "VISIÓN",
      description:
        "Posicionarnos como una empresa líder en investigación, desarrollo, innovación y consultoría en el sector de la energía eléctrica.",
      backgroundImage: "/utils/vision.jpg",
      backgroundColor: "var(--light-green)",
    },
    {
      title: "VALORES",
      description:
        "Creemos en el conocimiento como motor para transformar la sociedad, mejorando la calidad de vida a través de proyectos de infraestructura en energía eléctrica, basados en ética profesional, responsabilidad y compromiso social y ambiental.",
      backgroundImage: "/utils/valores.jpg",
      backgroundColor: "var(--dark-green)",
    },
  ];

  return (
    <section className="nosotros" id="Nosotros">
      <div className="presentation">
        Somos una empresa con sede en Quito, especializada en la investigación y desarrollo en diversas áreas de la
        ingeniería y tecnología. Brindamos servicios de asesoría y consultoría en tópicos relevantes de la transición
        energética y economía energética.
      </div>

      <div className="detail">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Nosotros;
