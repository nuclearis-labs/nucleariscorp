import React, { ReactElement, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import partnersContent from "../content/partners.js"

interface Props {
  data: any
}

function About(_props: Props): ReactElement {
  const [ currenTrajectory, setCurrentTrajectory ] = useState(0)

  function handleTrajectoryBackward() {
    currenTrajectory === 0 ? setCurrentTrajectory(partnersContent.length - 1) : setCurrentTrajectory(currenTrajectory - 1)
  }

  function handleTrajectoryForward() {
    currenTrajectory === partnersContent.length - 1 ? setCurrentTrajectory(0) : setCurrentTrajectory(currenTrajectory + 1)
  }

  return (
    <>
      <Seo/>
      <Header isLanding={false} />
      <div className="w-full max-w-5xl m-auto pt-20 px-8">
        <div className="grid grid-cols-12 sm:gap-10">
          <div className="col-span-12 sm:col-span-7 pb-14">
            <h1 className="font-bold text-3xl mb-6 text-gable tracking-wide">
              About us
            </h1>
            <h2 className="font-bold text-4xl text-gable tracking-wide mb-4">
              Nuclearis Corp is a US company established in 2018 in Albuquerque,
              New Mexico.
            </h2>
            <p className="text-gable md:text-justify mb-4">
              We deliver engineered turnkey solutions to support nuclear
              utilities and laboratories for both plant operations and
              refurbishment projects. The company has a solid professional young
              team with a background in process automation, design, simulation,
              and manufacturing of mechanical components and devices for the
              nuclear industry.
            </p>
            <p className="text-gable md:text-justify">
              We are passionate about complex technology challenges and we
              approach them with professionalism to deliver state of the art
              solutions for our customers.
            </p>
          </div>
          <div className="col-span-5 hexagon"></div>
        </div>
      </div>
      <div className="w-full bg-pattens-blue">
        <div className="max-w-5xl m-auto px-8">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 sm:col-span-6 pt-7 pb-12 relative">
              <h2 className="font-bold text-3xl mb-1 text-gable tracking-wide">
                Partners 
              </h2>
              <h3 className="text-2xl mb-4 text-gable tracking-wide">
                {partnersContent[currenTrajectory].title}
              </h3>
              <p 
                className="text-gable sm:pr-10 text-justify"
                dangerouslySetInnerHTML={{
                  __html: partnersContent[currenTrajectory].text,
                }}
              />
              <div className="absolute bottom-5 right-0 sm:right-10">
                <button 
                  className={`focus:outline-none ${currenTrajectory === 0 ? "hidden" : ""}`}
                  onClick={handleTrajectoryBackward}
                >
                  <StaticImage
                    src="../images/left-arrow.svg"
                    width={18}
                    alt="Left Arrow"
                  />
                </button>
                <button 
                  className={`focus:outline-none ${currenTrajectory === partnersContent.length - 1 ? "hidden" : ""}`}
                  onClick={handleTrajectoryForward}
                >
                  <StaticImage
                    src="../images/right-arrow.svg"
                    width={18}
                    alt="Right Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="sm:col-span-6 about-us hidden sm:block" style={{backgroundImage: "url(" + _props.data[partnersContent[currenTrajectory].id].edges[0].node
                    .childImageSharp.fluid.src + ")"}}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About

export const pageQuery = graphql`
  {
    partner_1: allFile(filter: { relativeDirectory: { eq: "partners/partner_1" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    partner_2: allFile(filter: { relativeDirectory: { eq: "partners/partner_2" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`