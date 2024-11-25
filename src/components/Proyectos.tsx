import React from "react";

/**
 * Representa el contenido de cada proyecto.
 * @property title - Título del proyecto (nombre del contratante o actividad principal).
 * @property description - Descripción detallada del proyecto, puede contener HTML o JSX.
 */
interface ProyectoContent {
    title: string;
    description: React.ReactNode;
}

/**
 * Representa la estructura de un proyecto.
 * @property color - Color de acento utilizado para representar el proyecto en el timeline (referencia a una variable CSS).
 * @property fecha - Año de realización del proyecto.
 * @property contenido - Lista de detalles asociados al proyecto, incluye títulos y descripciones.
 */
interface Proyecto {
    color: string;
    fecha: number;
    contenido: ProyectoContent[];
}

/**
 * Props del componente `CardProyecto`.
 * @property year - Año del proyecto.
 * @property accentColor - Color de acento del proyecto.
 * @property content - Lista de contenido del proyecto, incluyendo títulos y descripciones.
 */
interface CardProyectoProps {
    year: number;
    accentColor: string;
    content: ProyectoContent[];
}

/**
 * Componente que representa un proyecto individual dentro de un timeline.
 * @param year - Año del proyecto.
 * @param accentColor - Color de acento definido como variable CSS.
 * @param content - Detalles del proyecto, una lista con títulos y descripciones.
 */
const CardProyecto: React.FC<CardProyectoProps> = ({ year, accentColor, content }) => {
    return (
        <li style={{ "--accent-color": `var(${accentColor})` } as React.CSSProperties}>
            <div className="date">{year}</div>
            <div className="descr">
                {content.map((proyecto, index) => (
                    <div key={index} aria-labelledby={`project-${year}-${index}`}>
                        <div className="title" id={`project-${year}-${index}`}>
                            {proyecto.title}
                        </div>
                        <div className="description">{proyecto.description}</div>
                    </div>
                ))}
            </div>
        </li>
    );
};

/**
 * Componente principal que lista todos los proyectos realizados en un timeline.
 * Contiene información categorizada por año y visualmente representada con colores.
 */
const Proyectos: React.FC = () => {
    /**
     * Lista de proyectos realizados, organizados por año.
     * Cada proyecto incluye un color de acento, una fecha y una lista de detalles (títulos y descripciones).
     */
    const listaProyectos: Proyecto[] = [
        {
            color: "--gray-blue",
            fecha: 2024,
            contenido: [
                {
                    title: "Contratante: MRC Consultants and Transaction Advisers - América Latina y el Caribe",
                    description: (
                        <>
                            <b>Desarrollo de consultoría:</b> “Estructuración de una Estrategia de Electromovilidad para la
                            Empresa Eléctrica Quito con Consulta a Múltiples Actores”.
                            <br />
                            <b>Desarrollo de consultoría:</b> “Análisis de Costo-Beneficio de Escenarios de Transición
                            Energética para la Descarbonización del Sector Energía y Transporte a 2050 en Panamá”.
                            <br />
                            <b>Desarrollo de consultoría:</b> “Consultoría para la Actualización de la Política Energética
                            del Perú”.
                        </>
                    )
                }
            ]
        },
        {
            color: "--yellow",
            fecha: 2023,
            contenido: [
                {
                    title: "Contratante: MRC Consultants and Transaction Advisers - América Latina y el Caribe",
                    description: (
                        <>
                            <b>Desarrollo de consultoría:</b> “La Transición Energética de América Latina y el Caribe. Una
                            visión al 2050 de sus oportunidades y desafíos”.
                        </>
                    )
                }
            ]
        },
        {
            color: "--pink",
            fecha: 2021,
            contenido: [
                {
                    title: "Contratante: MRC Consultants and Transaction Advisers - Ecuador",
                    description: (
                        <>
                            <b>Asesoramiento en consultoría:</b> "Desarrollo de un Plan de Inversión para la Eficiencia
                            Energética, Difusión del Conocimiento y Fortalecimiento Institucional en las Islas Galápagos".
                        </>
                    )
                }
            ]
        },
        {
            color: "--dark-blue",
            fecha: 2018,
            contenido: [
                {
                    title: "Subcontrataciones",
                    description: (
                        <>
                            Estudios electromecánicos de la línea San Juan de Manta-El Aromo, 138kV y 5km.
                            <br />
                            Estudios electromecánicos de línea Jipijapa-Colimes de Paján, 138 kV y 30 km.
                        </>
                    )
                }
            ]
        },
        {
            color: "--sky-blue",
            fecha: 2017,
            contenido: [
                {
                    title: "Contratante: Empresa Fumitame",
                    description: (
                        <>
                            Estudios electromecánicos de línea Rocafuerte-Tosagua-San Vicente de 69kV.
                        </>
                    )
                },
                {
                    title: "Contratante: ACCIONA Ingeniería - Ecuador",
                    description: (
                        <>
                            Diseño de Coordinación de Protección para Línea de Subtransmisión Yaguachi- Babahoyo para CNEL
                            Unidad de Negocios Milagro (69 kV).
                        </>
                    )
                },
                {
                    title: "Contratante: BARRICK - Argentina",
                    description: (
                        <>
                            Modelado de generadores de combustión interna aerogeneradores, transformadores y red aislada
                            de la mina Veladero en DIgSILENT Power Factory.
                            <br />
                            Estudios de estabilidad transitoria para la conexión de una nueva planta de generación en Mina
                            Veladero.
                        </>
                    )
                }
            ]
        },
        {
            color: "--light-green",
            fecha: 2014,
            contenido: [
                {
                    title: "Contratante: ELECTRICAL ENERGY CONSULTING - Argentina",
                    description: (
                        <>
                            Estudios de flujo de potencia, para evaluar las eventuales restricciones de transporte y
                            requerimientos de ampliación.
                            <br />
                            Estudios de cortocircuito, para evaluar posibles violaciones o cambios de elementos de maniobra
                            y protección en el Sistema de Interconexión Central de Chile empleando DigSilent PowerFactory.
                            <br />
                            Estudio de variante de doble circuito en las líneas Montecristi-Manta L1 y L2 en el sector del
                            Redondel de Colorado, monumento a La Tejedora Manabita.
                        </>
                    )
                }
            ]
        },
        {
            color: "--orange",
            fecha: 2013,
            contenido: [
                {
                    title: "UNICONS S.A.",
                    description: (
                        <>
                            Diseño de línea de transmisión Doble Circuito, de 5 km para la central fotovoltaica de 2x30MW,
                            la más grande del país, en Los Bajos de Montecristi, 60 MW, incluye diseño de subestación de
                            Paso para transferir la energía proveniente del sistema fotovoltaico, a las líneas
                            Portoviejo-Manta1 y Portoviejo-Manta2.
                        </>
                    )
                }
            ]
        },
        {
            color: "--gray",
            fecha: 2011,
            contenido: [
                {
                    title: "Subcontrataciones",
                    description: (
                        <>
                            Diseño electromecánico de línea a 69 kV de S/E Montecristi 1 a El Café- Manta 2011.
                            <br />
                            Diseño electromecánico de línea a 69 kV S/E Manta 4 - Urbanización Ciudad del Mar-Manta.
                        </>
                    )
                },
                {
                    title: "Subcontrataciones",
                    description: (
                        <>
                            Diseño de sistema eléctrico y de bombeo de las aguas negras de Manta a Refinería
                            del Pacífico. Subestación El Gavilán de 10 MVA- Manta.
                        </>
                    )
                }
            ]
        }
    ];

    return (
        <section className="proyectos" id="Proyectos">
            <header>
                <h2>NUESTROS PROYECTOS</h2>
            </header>
            <div className="timeline">
                <ul>
                    {listaProyectos.map((project, index) => (
                        <CardProyecto
                            key={index}
                            year={project.fecha}
                            accentColor={project.color}
                            content={project.contenido}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Proyectos;
