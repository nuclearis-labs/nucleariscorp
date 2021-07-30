import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Contact(_props: Props): ReactElement {
  return (
    <>
      <Seo/>
      <Header isLanding={false} />
      <div className="w-full max-w-5xl m-auto py-20 px-8">
        <div className="grid grid-cols-12 sm:gap-10">
          <div className="col-span-12 sm:col-start-3 sm:col-span-8 md:col-span-6">
            <h1 className="font-bold text-3xl mb-5 text-gable tracking-wide">
              Contact Us
            </h1>
            <form
              action="https://nuclearis.us7.list-manage.com/subscribe/post?u=e585a2414f24a8ee147a6c478&amp;id=7d7872dd3e"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <input
                className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
                type="text"
                placeholder="* Name"
                name="NAME"
                required
              />
              <input
                className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
                type="text"
                placeholder="* Email"
                name="EMAIL"
                required
              />
              <input
                className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
                type="text"
                name="COMPANY"
                placeholder="Company"
              />
              <input
                className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2"
                type="text"
                name="PHONE"
                placeholder="Phone"
              />
              <textarea
                className="w-full block bg-zircon placeholder-gable mb-5 px-3 py-2 h-28"
                placeholder="* Message"
                name="MESSAGE"
                required
              ></textarea>
              <input
                type="submit"
                id="submit-button"
                className="bg-pelorous px-7 py-2 text-white tracking-wide hover:bg-gable"
                value="Send"
              />
            </form>
          </div>
          <div className="col-span-6 pt-16 px-0 lg:px-2 hidden md:block">
            <StaticImage src="../images/usa.svg" alt="USA" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
