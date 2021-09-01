import React, { ReactElement, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import worksContent from "../content/works.js"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  data: any
}

type Work = {
  id: string
  title: string
  shortText: string
  overlayText: string
  fullText: string
}

function Works(_props: Props): ReactElement {
  console.log(_props);
  const [expandedWork, setExpandedWork] = useState<Work | null>(null)
  const [workSlide, setWorkSlide] = useState(1)
  const [showAllText, setShowAllText] = useState(false)

  const compressWork = () => {
    setExpandedWork(null)
    setWorkSlide(1)
    setShowAllText(false)
  }

  const changeWorkSlide = (direction: string) => {
    if (expandedWork) {
      const worksSlidesLength = _props.data[expandedWork.id].edges.length - 1
      if (direction === "previous") {
        if (workSlide === 1) {
          setWorkSlide(worksSlidesLength)
        } else {
          setWorkSlide(workSlide - 1)
        }
      } else if (direction === "next") {
        if (workSlide === worksSlidesLength) {
          setWorkSlide(1)
        } else {
          setWorkSlide(workSlide + 1)
        }
      }
    }
  }

  return (
    <>
      <Seo/>
      <Header isLanding={false} />
      <div className="w-full max-w-5xl m-auto py-20 px-8">
        <div className="grid grid-cols-12">
          <h1 className="font-bold col-span-4 text-3xl mb-7 text-gable tracking-wide">
            Our Work
          </h1>
          {expandedWork && (
            <div className="text-right col-span-8">
              <h1 className="hidden sm:inline-block font-normal text-base sm:text-2xl mt-2 text-gable tracking-wide">
                {expandedWork.title}
              </h1>
              <button
                className="inline-block pt-3 sm:pt-0 sm:ml-4 opacity-50 hover:opacity-100 focus:outline-none outline-none transition-all"
                onClick={() => compressWork()}
              >
                <StaticImage
                  src="../images/close.svg"
                  alt="Close"
                  placeholder="none"
                  width={17}
                />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-12">
          {expandedWork && (
            <>
            <div className="col-span-12 text-center relative">
              <img
                className="w-full"
                src={
                  _props.data[expandedWork.id].edges[workSlide].node
                    .childImageSharp.fluid.srcWebp
                }
                alt={expandedWork.shortText}
              />
              <button
                className={`${
                  showAllText ? "hidden" : ""
                } absolute top-1/2 md:top-1/3 left-8 transform -translate-y-2/4 opacity-50 hover:opacity-100 focus:outline-none outline-none transition-all`}
                onClick={() => changeWorkSlide("previous")}
              >
                <StaticImage
                  src="../images/left-arrow-light.svg"
                  alt="Left"
                  placeholder="none"
                  width={40}
                />
              </button>
              <button
                className={`${
                  showAllText ? "hidden" : ""
                } absolute top-1/2 md:top-1/3 right-8 transform -translate-y-2/4 opacity-50 hover:opacity-100 focus:outline-none outline-none transition-all`}
                onClick={() => changeWorkSlide("next")}
              >
                <StaticImage
                  src="../images/right-arrow-light.svg"
                  alt="Left"
                  placeholder="none"
                  width={40}
                />
              </button>
              <div
                onMouseLeave={() => setShowAllText(false)}
                className={`hidden md:block absolute ${
                  showAllText ? "top-0" : "top-2/3"
                } transition-all right-0 left-0 bottom-0 bg-black block bg-opacity-70`}
              >
                <div className="absolute top-10 left-1/2 transform -translate-x-2/4 w-11/12">
                  <p
                    className="text-sm md:text-sm lg:text-base text-white text-justify font-light"
                    dangerouslySetInnerHTML={{
                      __html: showAllText
                        ? expandedWork.fullText
                        : expandedWork.overlayText,
                    }}
                  />
                  {!showAllText ? (
                    <div className="text-right">
                      <button
                        className="text-sm md:text-sm lg:text-base text-white font-bold"
                        onMouseOver={() => setShowAllText(true)}
                      >
                        Read more
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="block md:hidden col-span-12 text-justify relative">
              <h1 className="sm:hidden mt-6 font-bold text-xl text-gable tracking-wide">
                {expandedWork.title}
              </h1>
              <p
                className="text-base mt-10 text-gable text-justify font-light"
                dangerouslySetInnerHTML={{
                  __html: expandedWork.fullText
                }}
              />
            </div>
            </>
          )}
          {!expandedWork &&
            worksContent.map((work: Work, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div className="col-span-12 sm:col-span-6 md:col-span-4 relative">
                    <img
                      src={
                        _props.data[work.id].edges[0].node.childImageSharp.fluid
                          .src
                      }
                      alt={work.title}
                    />
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black sm:opacity-0 block transition-all bg-opacity-50 hover:opacity-100">
                      <div className="absolute top-1/2 left-1/2 transform w-full text-center -translate-y-2/4 -translate-x-2/4">
                        <h2 className="text-pelorous font-bold text-xl mb-2">
                          {work.title}
                        </h2>
                        <p className="text-white">{work.shortText}</p>
                        <button
                          className="bg-pelorous text-white font-bold focus:outline-none mt-4 text-sm py-2 px-4"
                          onClick={() => setExpandedWork(work)}
                        >
                          View more
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Works

export const pageQuery = graphql`
  {
    work_1: allFile(filter: { relativeDirectory: { eq: "works/work_1" } }) {
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
    work_2: allFile(filter: { relativeDirectory: { eq: "works/work_2" } }) {
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
    work_3: allFile(filter: { relativeDirectory: { eq: "works/work_3" } }) {
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
    work_4: allFile(filter: { relativeDirectory: { eq: "works/work_4" } }) {
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
    work_5: allFile(filter: { relativeDirectory: { eq: "works/work_5" } }) {
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
    work_6: allFile(filter: { relativeDirectory: { eq: "works/work_6" } }) {
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
