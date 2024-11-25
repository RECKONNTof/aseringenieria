import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Resolver __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors()); // Permitir solicitudes entre servidores
app.use(bodyParser.json()); // Analizar JSON
app.use(express.static(path.join(__dirname, "dist"))); // Servir archivos estáticos

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
    const { nombre, correo, celular } = req.body;

    // Configurar el transportador de correos
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Configurar el correo a enviar
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "josue.et.9910@gmail.com",
        subject: "Solicitud de Evaluación",
        text: `Información de contacto:
            Nombre: ${nombre}
            Correo: ${correo}
            Celular: ${celular}`,
    };

    try {
        // Enviar correo
        await transporter.sendMail(mailOptions);
        res.status(200).send("Correo enviado exitosamente");
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).send("Error al enviar el correo");
    }
});

// Ruta para manejar React
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
