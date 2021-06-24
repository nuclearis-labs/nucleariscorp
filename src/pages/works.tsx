import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function About(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true}/>
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">Works</h1>
          </div>
          <div className="col-span-4">
            <StaticImage src="../images/services.jpg" alt="Works" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
