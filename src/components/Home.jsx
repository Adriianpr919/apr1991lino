import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="barba-container" data-namespace="index" data-title="DISEÑO TU PÁGINA WEB ULTIMA Tecnologías Web FRONT-END DEVELOPER®. | Colombia.">
        <div className="smooth-scroll">
          <section className="black">
            <div className="slider">
              <svg className="motio-o-home" viewBox="0 0 100 100">
                <path className="isolation" fill="none" strokeWidth={0} d="M12 50c0-21 17-38 38-38s38 17 38 38-17 38-38 38" />
              </svg>
              <div>
                <h1 data-emergence="hidden" className="shift">
                  DISEÑO TU PÁGINA WEB ULTIMA Tecnologías Web FRONT-END DEVELOPER®. | Colombia.
                </h1>
                <a href="le-studio.html" rel="noopener noreferrer" className="button shift highlight in-footer" data-emergence="hidden" data-dot="contrast">
                  <span className="arrow" /><b><strong><span>DESCUBRIR EL ESTUDIO.</span></strong></b>
                </a>
              </div>
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

export default Home;
