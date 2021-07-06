import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function About(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true} />
      <div className="w-full max-w-6xl m-auto pt-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-7 pb-14">
            <h1 className="font-bold text-3xl mb-6 text-gable tracking-wide">
              About us
            </h1>
            <h2 className="font-bold text-4xl text-gable tracking-wide mb-4">
              Nuclearis es una empresa argentina dedicada a la ingeniería y
              fabricación de componentes mecánicos para la industria nuclear
            </h2>
            <p className="text-gable">
              La compañía fue creada en 2009 para abastecer de componentes
              mecánicos de precisión para las Centrales Atómicas Atucha I,
              Atucha II y Embalse de la República Argentina. Desde entonces
              Nuclearis ha suministrado dichos componentes ininterrumpidamente y
              sin rechazos, demostrando la robustez y eficiencia de la
              tecnología involucrada.
            </p>
          </div>
          <div className="col-span-5 hexagon"></div>
        </div>
      </div>
      <div className="w-full bg-pattens-blue">
        <div className="max-w-6xl m-auto px-8">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-6 pt-7 pb-12 relative">
              <h2 className="font-bold text-3xl mb-1 text-gable tracking-wide">
                Trayectoria
              </h2>
              <h3 className="text-2xl mb-4 text-gable tracking-wide">
                Actualmente
              </h3>
              <p className="text-gable pr-10">
                <span className="font-bold">Material Organization.</span>{" "}
                Actualmente Nuclearis se encuentra en un nuevo proyecto de
                expansión a partir de la creación de una nueva unidad de
                negocios denominada Material Organization que nos permitirá
                posicionarnos como proveedores de materiales de grado nuclear
                asegurando su calidad y trazabilidad, garantizando que todas las
                operaciones, procesos y servicios relacionados a la compra,
                fabricación y provisión de los mismos estén de acuerdo al ASME
                BPVC, Section III, NCA-3800.
              </p>
              <div className="absolute bottom-5 right-10">
                <button className="focus:outline-none">
                  <StaticImage
                    src="../images/left-arrow.svg"
                    width={18}
                    alt="Right Arrow"
                  />
                </button>
                <button className="focus:outline-none">
                  <StaticImage
                    src="../images/right-arrow.svg"
                    width={18}
                    alt="Right Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="col-span-6 about-us"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
