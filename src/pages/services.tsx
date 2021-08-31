import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Services(_props: Props): ReactElement {
  return (
    <>
      <Seo/>
      <Header isLanding={false} />
      <div className="w-full max-w-5xl m-auto py-20 px-8">
        <div className="sm:grid sm:grid-cols-12 sm:gap-10">
          <div className="sm:col-span-8 box-border">
            <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">
              Services
            </h1>
            <h1 className="font-bold text-4xl mb-7 sm:pr-32 text-gable tracking-wide">
              We have a solid background providing support to nuclear facilities
              including nuclear power plants, SMR and Laboratories.
            </h1>

            <p className="text-gable md:text-justify mb-4">Our expertise covers basic and detailed engineering, manufacturing of special mechanical components, electroplating, special coating and full-scope mechanical mockups. We also have extensive experience in equipment automation.</p>

            <p className="text-gable md:text-justify mb-4">Nuclearis is committed to providing tailored support services to your operations, thus our services include full project management that covers design, fabrication, equipment installation and commissioning.</p>

          </div>
          <div className="col-span-4 hidden sm:block">
            <StaticImage src="../images/services.jpg" alt="Services" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
