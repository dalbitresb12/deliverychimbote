import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto px-3 md:pr-0 pt-8 lg:pt-0 pb-16">
          <div className="max-w-6xl flex items-center md:overflow-hidden mx-auto">
            <div className="flex-auto w-128 md:flex-shrink-0 md:pr-16">
              <h1 className="max-w-xl font-extrabold text-3xl sm:text-5xl leading-none mb-6">
                {content.titleBlue}{' '}
                <span className="text-orange">{content.titleOrange}</span>
              </h1>
              <p className="max-w-xl text-indigo-light text-base sm:text-lg md:text-xl mb-8">
                {content.description}
              </p>
              <div className="sm:-m-2">
                <Link href="/list">
                  <a className="w-full sm:w-auto rounded h-12 btn btn-primary inline-flex items-center mb-3 sm:m-2">
                    {content.find}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
                <Link href="/submit">
                  <a className="w-full sm:w-auto rounded h-12 btn btn-secondary inline-flex items-center sm:m-2">
                    {content.add}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <img
              src="/assets/hero-illu-alt.png"
              alt="Vin og sjov"
              className="hidden md:block w-128 h-128"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'es-PE': {
    titleBlue: 'Ayudemos a los negocios locales a',
    titleOrange: 'sobrellevar la pandemia',
    description: `Encuentra negocios en Chimbote que te pueden llevar lo que necesites a la puerta de tu casa.`,
    find: 'Buscar negocios',
    add: 'Registra tu negocio',
  },
  'en-US': {
    titleBlue: 'Support local businesses',
    titleOrange: 'cope with the pandemic',
    description: `Find businesses in Chimbote that can bring what you need to your door.`,
    find: 'Find businesses',
    add: 'Add your business',
  },
}
