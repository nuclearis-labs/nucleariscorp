import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Services(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true} />
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">
              Services
            </h1>
            <h1 className="font-bold text-4xl mb-7 pr-32 text-gable tracking-wide">
              We have a solid background providing support to nuclear facilities
              including nuclear power plants, SMR and Laboratories.
            </h1>
            <p className="pr-40 mb-7 text-justify">Our expertise covers:</p>
            <h1 className="font-bold text-2xl mb-1 text-gable tracking-wide">
              ENGINEERING
            </h1>
            <p className="mb-6 pr-20 text-justify">
              1. Basic and detailed engineering
            </p>

            <h1 className="font-bold text-2xl mb-1 text-gable tracking-wide">
              FABRICATION
            </h1>
            <p className="mb-2 pr-20 text-justify">
              2. Manufacture of special mechanical components
            </p>
            <p className="mb-2 pr-20 text-justify">
              3. Electroplating / Special Coatings
            </p>
            <p className="mb-6 pr-20 text-justify">
              4. Full-scale mechanical mockups
            </p>

            <h1 className="font-bold text-2xl mb-1 text-gable tracking-wide">
              FABRICATION
            </h1>
            <p className="mb-6 pr-20 text-justify">5. Equipment automation</p>

            <h1 className="font-bold text-2xl mb-1 text-gable tracking-wide">
              PROJECT MANAGEMENT
            </h1>
            <p className="mb-6 pr-20 text-justify">
              6. Design, fabrication and equipment installation of special
              mechanical components
            </p>
          </div>
          <div className="col-span-4">
            <StaticImage src="../images/services.jpg" alt="Services" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
