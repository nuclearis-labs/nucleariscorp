import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

interface Props {}

function About(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true}/>
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <h1 className="font-bold text-3xl mb-5 text-gable tracking-wide">Contact Us</h1>
            <input className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2" type="text" placeholder="Firstname"/>
            <input className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2" type="text" placeholder="Email"/>
            <input className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2" type="text" placeholder="Company (optional)"/>
            <input className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2" type="text" placeholder="Phone"/>
            <textarea className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2 h-28" placeholder="Message"></textarea>
            <button className="bg-pelorous px-7 py-2 text-white tracking-wide hover:bg-gable">Send</button>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
      <div className="w-full bg-pattens-blue">
        <div className="max-w-6xl m-auto px-8">
          <div className="grid grid-cols-12 py-20">
            <div className="col-span-4 leading-tight">
              <h3 className="font-bold text-pelorous">Oficinas Corporativas</h3>
              <p className="text-gable">General Balcarce 160</p>
              <p className="text-gable">Villa Martelli, Buenos Aires.</p>
              <p className="text-gable">Argentina 1603</p>
              <p className="text-gable">Teléfono +54 11 5263-2700</p>
              <p className="text-gable">Fax +54 11 5263-2701</p>
              <p className="text-gable">info@nuclearis.com</p>
            </div>
            <div className="col-span-4 leading-tight border-gable border-r border-l pl-14">
              <h3 className="font-bold text-pelorous">Oficinas Comerciales USA</h3>
              <p className="text-gable">Suite 1200. 500 Marquette Av. NW.</p>
              <p className="text-gable">Albuquerque, Nuevo México</p>
              <p className="text-gable">USA 87102</p>
              <p className="text-gable">Teléfono +1 505 365-1123</p>
            </div>
            <div className="col-span-4 leading-tight pl-14">
              <h3 className="font-bold text-pelorous">Oficinas Comerciales en China</h3>
              <p className="text-gable">1-3/F Shanghai Base Fuxing.</p>
              <p className="text-gable">569 Xizang Road</p>
              <p className="text-gable">Huangpu Distric, Shanghai.</p>
              <p className="text-gable">China 201100</p>
              <p className="text-gable">Teléfono +86 21 615-77465</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
