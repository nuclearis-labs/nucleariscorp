import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function About(_props: Props): ReactElement {
  return (
    <>
      <Header isLanding={false} />
      <div className="w-full max-w-6xl m-auto pt-20 px-8">
        <div className="grid grid-cols-12 sm:gap-10">
          <div className="col-span-12 sm:col-span-7 pb-14">
            <h1 className="font-bold text-3xl mb-6 text-gable tracking-wide">
              About us
            </h1>
            <h2 className="font-bold text-4xl text-gable tracking-wide mb-4">
              Nuclearis Corp is a US company established in 2018 in Albuquerque,
              New Mexico.
            </h2>
            <p className="text-gable text-justify mb-4">
              We deliver engineered turnkey solutions to support nuclear
              utilities and laboratories for both plant operations and
              refurbishment projects. The company has a solid professional young
              team with a background in process automation, design, simulation,
              and manufacturing of mechanical components and devices for the
              nuclear industry.
            </p>
            <p className="text-gable text-justify">
              We are passionate about complex technology challenges and we
              approach them with professionalism to deliver state of the art
              solutions for our customers.
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
              <p className="text-gable pr-10 text-justify">
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
