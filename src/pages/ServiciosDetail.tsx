import React from "react";

interface Servicio {
  title: string;
  description: string;
  details: string[];
  backgroundColor: string;
  imageUrl: string;
  idName: string;
}

const Servicios: React.FC = () => {
  // Lista de servicios con sus propiedades.
  const servicios: Servicio[] = [
    {
      title: "Estudios Eléctricos",
      description:
        "Realizamos estudios eléctricos estado estacionario, dinámico y transitorio para la conexión de sistemas de generación eléctrica a las redes de transmisión y distribución. Utilizamos software avanzado para garantizar soluciones robustas y conformes a la normativa vigente.",
      details: [
        "Centrales hidroeléctricas, térmicas, fotovoltaicas, eólicas",
        "Clientes industriales",
        "Empresas petroleras",
        "Líneas de transmisión y subestaciones de 13,8 kV a 500 kV",
      ],
      backgroundColor: "var(--gray-blue)",
      imageUrl: "/utils/estudios-electricos.jpg",
      idName: "estElect",
    },
    {
      title: "Energías Renovables",
      description:
        "Ofrecemos asesoramiento técnico y acompañamiento a promotores de proyectos de generación eléctrica, incluyendo investigación de mercado y consultoría regulatoria y tarifaria. Nuestro enfoque se centra en garantizar el cumplimiento normativo y la viabilidad de los proyectos.",
      details: [
        "Asesoría, diseño, construcción, operación y mantenimiento de centrales fotovoltaicas y eólicas",
        "Diseño e instalación de colectores solares térmicos",
        "Asesoría en financiamiento",
        "Pruebas de comisionamiento",
        "Asesoría integral en proyectos",
        "Análisis de la normativa aplicable",
      ],
      backgroundColor: "var(--light-green)",
      imageUrl: "/utils/energias-renovables.jpg",
      idName: "enReno",
    },
    // Continúan los servicios restantes con el mismo formato...
  ];

  return (
    <>
      <div className="productos-title">Nuestros Servicios</div>
      <div className="productos-detail">
        {servicios.map((servicio, index) => (
          <div
            className="item"
            style={{ height: "73vh" }}
            key={servicio.idName}
            id={servicio.idName}
          >
            {index % 2 === 0 ? (
              <>
                <div
                  className="line"
                  style={{
                    marginLeft: "2.5vw",
                    backgroundColor: servicio.backgroundColor,
                  }}
                ></div>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${servicio.imageUrl})` }}
                ></div>
                <div
                  className="detail"
                  style={{
                    marginRight: "2.5vw",
                    backgroundColor: servicio.backgroundColor,
                    height: "65vh",
                  }}
                >
                  <h2>{servicio.title}</h2>
                  <h3>{servicio.description}</h3>
                  <ul>
                    {servicio.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div
                  className="detail"
                  style={{
                    marginLeft: "2.5vw",
                    backgroundColor: servicio.backgroundColor,
                    height: "65vh",
                  }}
                >
                  <h2>{servicio.title}</h2>
                  <h3>{servicio.description}</h3>
                  <ul>
                    {servicio.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${servicio.imageUrl})` }}
                ></div>
                <div
                  className="line"
                  style={{
                    marginRight: "2.5vw",
                    backgroundColor: servicio.backgroundColor,
                  }}
                ></div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Servicios;
