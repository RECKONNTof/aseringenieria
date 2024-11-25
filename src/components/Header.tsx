import React, { useEffect, MouseEvent } from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
    /**
     * Maneja el clic en los enlaces del header y realiza la navegación suave
     * hacia las secciones correspondientes de la página.
     *
     * @param event - El evento de clic del enlace.
     * @param sectionId - El id de la sección a la que se navega.
     */
    const handleNavigation = (event: MouseEvent<HTMLLIElement>, sectionId: string) => {
        event.preventDefault();

        // Navegar a la sección
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // Actualizar la clase active en los enlaces
        document.querySelectorAll(".header-link").forEach((link) => {
            (link as HTMLElement).classList.remove("active");
        });
        (event.target as HTMLElement).classList.add("active");
    };

    useEffect(() => {
        // Cambiar estilos del header según la visibilidad de la sección hero
        const hero = document.querySelector(".hero");
        const header = document.querySelector(".header");

        const headerObserverOptions: IntersectionObserverInit = {
            root: null,
            threshold: 0.8,
        };

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const headerElement = header as HTMLElement;
                if (entry.isIntersecting) {
                    headerElement.style.backgroundColor = "transparent";
                    headerElement.style.padding = "2vh 0";
                } else {
                    headerElement.style.backgroundColor = "var(--dark-green)";
                    headerElement.style.padding = "0.5vh 0";
                }
            });
        }, headerObserverOptions);

        if (hero) headerObserver.observe(hero);

        // Agregar clase active según el scroll y la sección visible
        const sections = document.querySelectorAll("section");
        const headerLinks = document.querySelectorAll(".header-link");

        const sectionObserverOptions: IntersectionObserverInit = {
            root: null,
            threshold: 0.15,
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    headerLinks.forEach((link) => {
                        if (link.textContent === sectionId) {
                            (link as HTMLElement).classList.add("active");
                        } else {
                            (link as HTMLElement).classList.remove("active");
                        }
                    });
                }
            });
        }, sectionObserverOptions);

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        // Cleanup: desconectar ambos observers al desmontar el componente
        return () => {
            headerObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    /**
     * Maneja la visibilidad del menú de selección de idiomas (Español / English).
     * Al hacer clic en el enlace de idiomas, muestra u oculta el menú.
     */
    const toggleLanguageMenu = () => {
        const element = document.querySelector(".language-menu");
        const elementHtml = element as HTMLElement;
        if (element && elementHtml.offsetWidth > 0 || elementHtml.offsetHeight > 0) {
            elementHtml.style.display = "none";
        } else {
            elementHtml.style.display = "block";
        }
    };

    return (
        <section className="header">
            {/* Logo del sitio */}
            <Logo />
            <div className="menu">
                <ul>
                    {/* Enlaces de navegación que llaman a handleNavigation */}
                    <li
                        className="active header-link"
                        onClick={(e) => handleNavigation(e, "Home")}
                    >
                        Home
                    </li>
                    <li
                        className="header-link"
                        onClick={(e) => handleNavigation(e, "Nosotros")}
                    >
                        Nosotros
                    </li>
                    <li
                        className="header-link"
                        onClick={(e) => handleNavigation(e, "Servicios")}
                    >
                        Servicios
                    </li>
                    <li
                        className="header-link"
                        onClick={(e) => handleNavigation(e, "Proyectos")}
                    >
                        Proyectos
                    </li>
                    <li
                        id="headerContactLink"
                        className="header-link"
                        onClick={(e) => handleNavigation(e, "Contáctanos")}
                    >
                        Contáctanos
                    </li>
                    {/* Enlace de idiomas */}
                    <li
                        style={{ display: "flex" }}
                        className="lg-select header-link"
                        onClick={toggleLanguageMenu}
                    >
                        <div className="language"></div>
                        <i className="fa-solid fa-caret-down"></i>
                        {/* Menú desplegable de idiomas */}
                        <div className="language-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <div className="esp"></div>Español
                                    </li>
                                    <li>
                                        <div className="eng"></div>English
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Header;
