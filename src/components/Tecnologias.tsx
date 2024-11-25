import React from "react";

/**
 * Props para el componente `SoftwareItem`.
 */
interface SoftwareItemProps {
  imageSrc: string; // URL de la imagen del software
  height: string; // Altura de la imagen en unidades CSS (e.g., "10vh")
  altText: string; // Texto alternativo para la imagen
}

/**
 * Componente para renderizar un ítem de software especializado.
 */
const SoftwareItem: React.FC<SoftwareItemProps> = ({ imageSrc, height, altText }) => (
  <img className="item" style={{ height }} src={imageSrc} alt={altText} />
);

/**
 * Props para el componente `EquipoItem`.
 */
interface EquipoItemProps {
  imageSrc: string; // URL de la imagen del equipo
  height: string; // Altura de la imagen en unidades CSS (e.g., "10vh")
  description: string; // Descripción del equipo
  imageFirst: boolean; // Indica si la imagen debe mostrarse antes que la descripción
}

/**
 * Componente para renderizar un ítem de equipo especializado.
 */
const EquipoItem: React.FC<EquipoItemProps> = ({ imageSrc, height, description, imageFirst }) => (
  <div className="item">
    {imageFirst ? (
      <>
        <img style={{ height }} src={imageSrc} alt={description} />
        <div>{description}</div>
      </>
    ) : (
      <>
        <div>{description}</div>
        <img style={{ height }} src={imageSrc} alt={description} />
      </>
    )}
  </div>
);

/**
 * Componente principal para la sección de tecnologías.
 * 
 * Este componente muestra tanto los softwares como los equipos especializados que se utilizan.
 */
const Tecnologias: React.FC = () => {
  /**
   * Datos del software especializado.
   */
  const softwareData: SoftwareItemProps[] = [
    { imageSrc: "/utils/DIgSILENT.png", height: "10vh", altText: "DIgSILENT" },
    { imageSrc: "/utils/cyme.png", height: "7vh", altText: "Cyme" },
    { imageSrc: "/utils/leap.jpg", height: "10vh", altText: "LEAP" },
    { imageSrc: "/utils/sddp.png", height: "9vh", altText: "SDDP" },
    { imageSrc: "/utils/PVsyst.png", height: "10vh", altText: "PVsyst" },
    { imageSrc: "/utils/ArcGIS.jpg", height: "11vh", altText: "ArcGIS" },
    { imageSrc: "/utils/dltcad.png", height: "7vh", altText: "DLTCAD" },
    { imageSrc: "/utils/autocad.png", height: "11vh", altText: "AutoCAD" },
  ];

  /**
   * Datos de los equipos especializados.
   */
  const equiposData: EquipoItemProps[] = [
    {
      description: "PCs de última generación",
      imageSrc: "/utils/laptop.webp",
      height: "10vh",
      imageFirst: false,
    },
    {
      description: "Energy master Q4 MI 2885 Metrel hasta 3000 Amp",
      imageSrc: "/utils/mi2885.png",
      height: "10vh",
      imageFirst: true,
    },
    {
      description: "Energy master 2883 Metrel hasta 3000 Amp",
      imageSrc: "/utils/mi2883.png",
      height: "10vh",
      imageFirst: false,
    },
    {
      description: "Power Quality Analyzer Fluke 434 hasta 6000 Amp",
      imageSrc: "/utils/fluke435.webp",
      height: "10vh",
      imageFirst: true,
    },
    {
      description: "Micro Ohm hasta 10 Amp Metrel MI 3250",
      imageSrc: "/utils/mi3250.png",
      height: "10vh",
      imageFirst: false,
    },
  ];

  return (
    <section className="tecnologia" id="Tecnologias">
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>TRABAJAMOS CON LA MEJOR TECNOLOGÍA</h2>
      </div>

      {/* Software Especializado */}
      <div className="software">
        <h3>Software Especializado</h3>
        <div className="software-container">
          {softwareData.map((item, index) => (
            <SoftwareItem
              key={index}
              imageSrc={item.imageSrc}
              height={item.height}
              altText={item.altText}
            />
          ))}
        </div>
      </div>

      {/* Equipos Especializados */}
      <div className="equipos">
        <h3>Equipos Especializados</h3>
        <div className="equipos-container">
          {equiposData.map((item, index) => (
            <EquipoItem
              key={index}
              imageSrc={item.imageSrc}
              height={item.height}
              description={item.description}
              imageFirst={item.imageFirst}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
