import React, { ReactElement, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import worksContent from "./worksContent.json"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  data: any
}

type Work = {
  id: string
  title: string
  shortDescription: string
  fullDescriptiion: string
  year: number
}

function Works(_props: Props): ReactElement {
  const [expandedWork, setExpandedWork] = useState<Work | null>(null)
  const [workSlide, setWorkSlide] = useState(1)

  const compressWork = () => {
    setExpandedWork(null)
    setWorkSlide(1)
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
      <Header hasBackground={true} />
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">
          Our Work
        </h1>
        <div className="grid grid-cols-12">
          {expandedWork && (
            <div className="col-span-12 text-center relative">
              <img
                className="w-full"
                src={
                  _props.data[expandedWork.id].edges[workSlide].node
                    .childImageSharp.fluid.src
                }
                alt={expandedWork.shortDescription}
              />
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-black block bg-opacity-70">
                <div className="absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 w-4/5">
                  <h2 className="text-pelorous font-bold text-3xl">
                    {expandedWork.title}
                  </h2>
                  <h3 className="text-pelorous font-light text-2xl mb-20">
                    {expandedWork.year}
                  </h3>
                  <p
                    className="text-white text-justify text-xl font-light"
                    dangerouslySetInnerHTML={{
                      __html: expandedWork.fullDescriptiion,
                    }}
                  />
                </div>
                <button
                  className="absolute top-14 right-14 opacity-50 hover:opacity-100 focus:outline-none transition-all"
                  onClick={() => compressWork()}
                >
                  <StaticImage
                    src="../images/close.svg"
                    alt="Close"
                    placeholder="none"
                    width={22}
                  />
                </button>
                <button
                  className="absolute top-1/2 left-8 transform -translate-y-2/4 opacity-50 hover:opacity-100 focus:outline-none transition-all"
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
                  className="absolute top-1/2 right-8 transform -translate-y-2/4 opacity-50 hover:opacity-100 focus:outline-none transition-all"
                  onClick={() => changeWorkSlide("next")}
                >
                  <StaticImage
                    src="../images/right-arrow-light.svg"
                    alt="Left"
                    placeholder="none"
                    width={40}
                  />
                </button>
              </div>
            </div>
          )}
          {!expandedWork &&
            worksContent.map((work: Work, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div className="col-span-4 relative">
                    <img
                      src={
                        _props.data[work.id].edges[0].node.childImageSharp.fluid
                          .src
                      }
                      alt={work.title}
                    />
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-0 block transition-all bg-opacity-50 hover:opacity-100">
                      <div className="absolute top-1/2 left-1/2 transform w-full text-center -translate-y-2/4 -translate-x-2/4">
                        <h2 className="text-pelorous font-bold text-2xl mb-2">
                          {work.title}
                        </h2>
                        <p className="text-white">{work.shortDescription}</p>
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
