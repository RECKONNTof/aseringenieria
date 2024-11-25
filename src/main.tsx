import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import Nosotros from "./components/Nosotros.tsx";
import Servicios from "./components/Servicios.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Noticias from "./components/Noticias.tsx";
import Clientes from "./components/Clientes.tsx";
import Tecnologias from "./components/Tecnologias.tsx";
import Contacto from "./components/Contacto.tsx";
import ServiciosDetail from "./pages/ServiciosDetail.tsx";
import FooterActions from "./components/FooterActions.jsx";
import Scroll2Section from "./components/Scroll2Section.tsx";
import "./assets/style.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <HeroSection />
              <Nosotros />
              <Servicios />
              <Proyectos />
              <Noticias />
              <Clientes />
              <Tecnologias />
              <Contacto />
              <Scroll2Section />
            </div>
          }
        />

        {/* Ruta dinámica para detalles de productos */}
        <Route
          path="/detalleServicios"
          element={
            <>
              <ServiciosDetail />
              <FooterActions
                redirectParent="Servicios"
              />
              <Scroll2Section />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
