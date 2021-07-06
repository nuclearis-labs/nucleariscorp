import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Contact(_props: Props): ReactElement {
  return (
    <>
      <Header hasBackground={true} />
      <div className="w-full max-w-6xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <h1 className="font-bold text-3xl mb-5 text-gable tracking-wide">
              Contact Us
            </h1>
            <input
              className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
              type="text"
              placeholder="Company (optional)"
            />
            <input
              className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
              type="text"
              placeholder="Phone"
            />
            <textarea
              className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2 h-28"
              placeholder="Message"
            ></textarea>
            <button className="bg-pelorous px-7 py-2 text-white tracking-wide hover:bg-gable">
              Send
            </button>
          </div>
          <div className="col-span-6 pt-16 px-20">
            <StaticImage src="../images/usa.svg" alt="USA" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
