import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Footer(_props: Props): ReactElement {
  return (
    <footer>
      <div className="bg-zircon">
        <div className="w-full max-w-5xl m-auto pt-14 pb-8 px-8">
          <a
            href="/"
            className="block text-gable mb-8 text-4xl tracking-wide font-bold"
          >
            <StaticImage
              src="../images/logofooter.svg"
              alt="Nuclearis"
              placeholder="none"
              width={150}
            />
          </a>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-5 pb-6 mb-4 border-b border-submarine text-submarine text-sm sm:text-base">
            <div className="mt-auto md:col-span-3 lg:col-span-5">
              <p>7620 Jefferson St NE, Suite 7</p>
              <p>Albuquerque, New Mexico</p>
              <p>USA 87109</p>
            </div>
            <div className="md:col-span-2 lg:col-span-4">
              <p>+1 505 926 1022</p>
              <p>sales@nuclearis.com</p>
            </div>
            <div className="hidden col-span-2 md:col-span-1 lg:col-span-3 mx-auto md:ml-auto md:mr-0 mt-5 md:mt-auto">
              <a
                href="https://www.instagram.com/nuclearis.nrs"
                className="mr-3 inline-block w-6"
              >
                <StaticImage
                  src="../images/instagramdark.svg"
                  placeholder="none"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/nuclearis.nrs"
                className="mr-3 inline-block w-6"
              >
                <StaticImage
                  src="../images/facebookdark.svg"
                  placeholder="none"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/nuclearis"
                className="inline-block w-6"
              >
                <StaticImage
                  src="../images/linkedindark.svg"
                  placeholder="none"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
          <p className="text-submarine text-sm text-center">
              &copy; 2021. Nuclearis Corp - All rights reserved.
              {` //`} Designed by
              <a
                href="https://www.stereotypo.com.ar/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-bold text-gable"
              >
                Stereotypo
              </a>
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
