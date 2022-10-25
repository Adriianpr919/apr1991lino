import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Mentionslegales = () => {
  return (
    <>
      <Header />
      <main className="barba-container" data-namespace="index" data-title="DISEÑO TU PÁGINA WEB ULTIMA Tecnologías Web FRONT-END DEVELOPER&reg;.">
        <div className="smooth-scroll">
          <section className="white">
            <div className="row align-center">
              <div className="column medium-9 large-8">
                <h1 data-emergence="hidden" className="shift">TÉRMINOS Y CONDICIONES DE SERVICIOS DIGITALES.</h1>
                <p data-emergence="hidden" className="shift" style={{ textAlign: 'justify' }}>
                  <b><strong><span>SERVICIO DE HOSTING:</span></strong></b>
                  Este sitio web es propiedad exclusiva de Studio MOTIO. El servicio de hosting ofrecido por Studio MOTIO a sus clientes tiene como objetivo brindar una plataforma de alojamiento
                  acorde a las necesidades de las tiendas online o virtuales. Este servicio se ofrece en el primer año de forma gratuita para los
                  proyectos contratados con nuestra empresa.<br />
                  El servicio de hosting permite al cliente contar con una cuenta de Cpanel licenciada, un certificado SSL y un sistema de
                  correos corporativos. Studio MOTIO brindara soporte sobre el correcto funcionamiento de estos 3 temas mencionados
                  anteriormente. El uso y la información almacenada en estas cuentas es responsabilidad del cliente y se compromete a
                  acatar la reglamentación legal Colombiana y los lineamientos que en estos términos se expresan.<br />
                  Uso adecuado de su plataforma es asumido por el cliente, excepto en aquellos
                  casos donde el cliente tiene un plan de soporte o mantenimiento que cubra estos puntos. En el caso de planes activos es
                  necesario que las tareas y sus recurrencia están manifestadas por escrito para determinar el alcance de responsabilidades.
                </p>
              </div>
            </div>
            <div className="row align-center">
              <article className="column medium-9 large-8">
                <p data-emergence="hidden" className="shift">
                  <b><strong><span>EDICIÓN:</span></strong></b>
                </p>
                <p className="no-margin shift" data-emergence="hidden">
                  <b><strong><span>DISEÑO TU PÁGINA WEB ULTIMA Tecnologías Web FRONT-END DEVELOPER&reg;.</span></strong></b><br />
                  Mi Ciudad: <b>Acaci&aacute;s (Meta), Colombia.</b><br />
                  Mi Celular: <b>+57 (322-829-4953)</b><br />
                  Mi Correo: <a href="mailto:apr.1991lino@gmail.com" className="highlight in-footer" rel="noopener noreferrer"><b>apr.1991lino@gmail.com</b></a>
                </p>
              </article>
            </div>
          </section>
        </div>
        <Footer />
      </main>
      <div className="dot">
        <svg viewBox="0 0 100 100">
          <circle cx={50} cy={50} r="5.15" />
        </svg>
      </div>
    </>
  );
};

export default Mentionslegales;