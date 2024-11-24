import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-content">
          <div className="footer-logo">
            <img src="./src/assets/images/logo/white_logo.svg" alt="Logo de My Market" />
            <h2>My Market</h2>
          </div>
          <p>Calidad siempre a tu alcance</p>
        </div>
        <div className="footer-links">
          <h3>Información</h3>
          <ul>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Términos de uso</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <section className="footer-social-media">
          <h3>Síguenos en nuestras redes sociales</h3>
          <div className="social-media">
            <a href="#" aria-label="Síguenos en X">
              <img src="./src/assets/icons/x_twitter.svg" alt="Twitter" />
            </a>
            <a href="#" aria-label="Síguenos en Instagram">
              <img src="./src/assets/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Síguenos en TikTok">
              <img src="./src/assets/icons/tiktok.svg" alt="TikTok" />
            </a>
          </div>
        </section>
      </div>
      <section className="footer-copy">
        <p>&copy; 2024 My Market. Todos los derechos reservados.</p>
      </section>
    </footer>
  );
};

export default Footer;
