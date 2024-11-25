import React, { useState } from "react";
import axios from "axios";

/**
 * Componente de contacto que permite a los usuarios enviar sus datos mediante un formulario.
 * El formulario valida los datos antes de enviarlos al servidor.
 */
const Contacto: React.FC = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombres: "",
        correo: "",
        celular: "",
    });

    /**
     * Maneja los cambios en los campos del formulario.
     * Actualiza el estado `formData` cuando el usuario escribe en los campos.
     * 
     * @param e - El evento de cambio (change event) del campo de formulario.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    /**
     * Maneja el envío del formulario.
     * Valida los datos y, si son válidos, envía los datos al servidor utilizando Axios.
     * 
     * @param e - El evento de envío (submit event) del formulario.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación básica de los campos del formulario
        if (!formData.nombres || !formData.correo || !formData.celular) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Enviar los datos al servidor
            const response = await axios.post(
                `http://localhost:8081/send-email`, // URL del servidor
                formData
            );
            alert(response.data); // Mostrar el mensaje recibido desde el servidor
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un error al enviar tu solicitud. Inténtalo nuevamente.");
        }
    };

    return (
        <section className="contacto" id="Contáctanos">
            <div className="container">
                {/* Imagen de fondo en el contenedor */}
                <div
                    className="image"
                    style={{ backgroundImage: "url('/utils/contacto.png')" }}
                ></div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h3>
                            ¡Contáctanos y descubre cómo nuestras soluciones eléctricas
                            inteligentes pueden optimizar tu eficiencia energética!
                        </h3>
                        {/* Campo de texto para nombres */}
                        <input
                            type="text"
                            id="nombres"
                            placeholder="Nombres y Apellidos"
                            value={formData.nombres}
                            onChange={handleChange}
                        />
                        {/* Campo de correo electrónico */}
                        <input
                            type="email"
                            id="correo"
                            placeholder="Correo Electrónico"
                            value={formData.correo}
                            onChange={handleChange}
                        />
                        {/* Campo de celular */}
                        <input
                            type="text"
                            id="celular"
                            placeholder="Número Celular"
                            value={formData.celular}
                            onChange={handleChange}
                        />
                        {/* Botón para enviar el formulario */}
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
