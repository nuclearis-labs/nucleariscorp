import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

interface Props {}

function Services(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true}/>
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">Servicios</h1>
            <h1 className="font-bold text-5xl mb-7 pr-32 text-gable tracking-wide">Building creative products, activating ideas and growing companies</h1>
            <p className="pr-40 mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h1 className="font-bold text-3xl mb-1 text-gable tracking-wide">Fabricación de componentes</h1>
            <p className="mb-6 pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h1 className="font-bold text-3xl mb-1 text-gable tracking-wide">Ingeniería</h1>
            <p className="pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-span-4">
            <img className="w-full ml-auto" src="/static/services.jpg" alt="Servicios"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Services
