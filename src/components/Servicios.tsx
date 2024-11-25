import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Props para el componente `ProductCard`.
 */
interface ProductCardProps {
  imageUrl: string; // URL de la imagen que se mostrará en la tarjeta
  title: string; // Título que describe el servicio
  idRoute: string; // Ruta asociada al servicio
}

/**
 * Componente para representar una tarjeta de producto/servicio.
 * 
 * Cada tarjeta incluye una imagen, un título y un botón que redirige al detalle del servicio.
 */
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, idRoute }) => {
  const navigate = useNavigate();

  /**
   * Navega a la página de información detallada del servicio.
   */
  const goToProductInformation = () => {
    navigate(`/detalleServicios${idRoute}`);
  };

  return (
    <div className="card">
      {/* Imagen de fondo */}
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* Título de la tarjeta */}
      <div className="card-title">{title}</div>
      {/* Botón para redirigir a más información */}
      <button onClick={goToProductInformation} type="button" className="card-option">
        Conoce más
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

/**
 * Componente principal que representa la sección de servicios.
 * 
 * Contiene múltiples tarjetas con información de los servicios ofrecidos.
 */
const Servicios: React.FC = () => {
  /**
   * Información de las tarjetas de productos/servicios.
   */
  const productos: ProductCardProps[] = [
    {
      imageUrl: "/utils/estudios-electricos.jpg",
      title: "Estudios Eléctricos",
      idRoute: "#estElect",
    },
    {
      imageUrl: "/utils/energias-renovables.jpg",
      title: "Energías Renovables",
      idRoute: "#enReno",
    },
    {
      imageUrl: "/utils/lineas-transmision.jpg",
      title: "Líneas de Transmisión y Subestaciones",
      idRoute: "#linTrSb",
    },
    {
      imageUrl: "/utils/eficiencia-energetica.jpg",
      title: "Eficiencia Energética",
      idRoute: "#efiEner",
    },
    {
      imageUrl: "/utils/calidad-energia.jpg",
      title: "Calidad de la Energía",
      idRoute: "#caliEner",
    },
    {
      imageUrl: "/utils/cartografia.jpg",
      title: "Actividades Cartográficas y de Información Espacial",
      idRoute: "#actCartInf",
    },
    {
      imageUrl: "/utils/capacitacion.jpg",
      title: "Capacitación",
      idRoute: "#capa",
    },
  ];

  return (
    <section className="productos" id="Servicios">
      <div>
        <h2>NUESTROS SERVICIOS</h2>
      </div>
      <div className="detail">
        {productos.map((producto, index) => (
          <ProductCard
            key={index}
            imageUrl={producto.imageUrl}
            title={producto.title}
            idRoute={producto.idRoute}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
