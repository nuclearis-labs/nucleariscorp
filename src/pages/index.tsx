import React, { ReactElement } from "react"
import Header from "../components/header"
import Cookies from "../components/cookies"
import Seo from "../components/seo"

import { graphql } from "gatsby"

interface Props {
  data: any
}

function Index(_props: Props): ReactElement {
  const videoMP4 = _props.data.videoMP4.publicURL
  const videoPoster = _props.data.videoPoster.publicURL
  const seoImage = _props.data.seoImage.publicURL
  return (
    <>
      <Seo image={seoImage}/>
      <Header isLanding={true} />
      <video playsInline autoPlay muted loop poster={videoPoster} id="bgvid">
        <source src={videoMP4} type="video/mp4" />
      </video>
      <div className="absolute top-1/4 w-full">
        <div className="max-w-5xl m-auto px-8">
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-10 sm:col-start-3 sm:col-span-8 md:col-start-4 md:col-span-6 lg:col-start-8 lg:col-span-5 2xl:col-start-7 2xl:col-span-6">
              <h1 className="text-white font-light md:tracking-wide mb-8 text-center text-2xl 2xl:text-3xl lg:text-left">
                Nuclearis Corp provides engineering solutions and project
                management to support the{" "}
                <span className="font-bold">nuclear industry.</span>{" "}
              </h1>
              <span className="bg-white h-1 w-8 block m-auto lg:m-0"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-auto block w-full">
        <div className="max-w-6xl m-auto px-8">
          <div className="grid grid-cols-12">
            <div className="lg:col-start-8 lg:col-span-5 lg:h-72 2xl:col-start-7 2xl:col-span-6 2xl:h-96 hexagons"></div>
          </div>
        </div>
      </div>
      <Cookies />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  {
    videoMP4: file(
      relativePath: { eq: "video.mp4" }
      sourceInstanceName: { eq: "images" }
    ) {
      publicURL
    }
    videoPoster: file(
      relativePath: { eq: "poster.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      publicURL
    }
    seoImage: file(
      relativePath: { eq: "seo.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      publicURL
    }
  }
`
