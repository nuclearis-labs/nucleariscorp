import React, { ReactElement } from "react"
import Header from "../components/header"

interface Props {}

function Index(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={false}/>
      <video playsInline autoPlay muted loop poster="static/poster.jpg" id="bgvid">
        <source src="static/background.mp4" type="video/mp4"/>
      </video>
    </>
  )
}

export default Index
