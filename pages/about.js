import { useContext } from 'react';
import Obfuscate from 'react-obfuscate';
import { LanguageContext } from '../components/LanguageSelector';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Event } from '../components/Analytics';
import { NextSeo } from 'next-seo';

const About = () => {
  const { language } = useContext(LanguageContext);
  const content = pageContent[language];
  return (
    <>
      <NextSeo title="Nosotros" />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto px-3 pt-8 sm:pt-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              {content.title}
            </h2>
            <p className="max-w-xl text-lg mb-4">
              {content.description}
              <a href="https://dinecph.dk/" target="_blank" rel="noopener noreferrer">
                Dine CPH
              </a>
              {content.and}
              <a href="https://coastapp.com/takeoutcovid/" target="_blank" rel="noopener noreferrer">
                Takeout Covid
              </a>
            </p>
            <p className="max-w-xl text-lg mb-4">
              {content.contact}
              <Obfuscate
                email="info.dch@abig.pe"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Event("Email", "Click", "info.dch")} 
              />.
            </p>
            <p className="max-w-xl text-lg">
              {content.webmaster}
              <Obfuscate
                email="soporte.dch@abig.pe"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Event("Email", "Click", "soporte.dch")}
              />.
            </p>
          </div>
          <div className="max-w-6xl mx-auto mt-4">
            <p className="text-xs text-indigo-light">
              {content.icons[0]}
              <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
                Font Awesome
              </a>
              {content.icons[1]}
              <a href="https://fontawesome.com/license" target="_blank" rel="noopener noreferrer">
                {content.icons[2]}
              </a>{'.'}
            </p>
            <p className="mt-2 text-xs text-indigo-light">
              {content.icons[3]}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

const pageContent = {
  'es-PE': {
    title: 'Nosotros',
    description: `La crisis causada por el Covid-19 ha golpeado duro a los negocios de la localidad. Muchos han empezado a ofrecer sus productos por delivery. Decidimos realizar esta página web para que sea más fácil encontrarlos — inspirado por `,
    and: ' y ',
    contact: 'Contacto: ',
    webmaster: 'Soporte del sitio web: ',
    icons: [
      'Algunos íconos en el sitio web fueron extraídos de la librería ',
      '. Estos íconos están bajo la licencia Creative Commons Attribution 4.0 International. Ningún cambio fue realizado a los íconos. La licencia se puede leer en el siguiente ',
      'enlace',
      'Cada ícono de marca es una marca registrada del propietario respectivo. El uso de esta marca no indica el respaldo del titular de la marca por parte de Delivery Chimbote, ni viceversa.'
    ],
  }
};

export default About;
