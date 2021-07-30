import React, { ReactElement, useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface Props {
  isLanding: Boolean
}

const MobileHeader = (_props: Props): ReactElement => {
  const [ isExpanded, setExpanded ] = useState(false);

  return (
    <header
      className={`block sm:hidden bg-gable ${
        _props.isLanding ? (isExpanded ? "bg-opacity-100" : "bg-opacity-0 delay-300") + " transition-all duration-500 ease-in-out fixed right-0 left-0 z-10" : ""
      }`}
    >
      <div className="flex w-full max-w-6xl m-auto py-7 px-8">
        <div className="flex-auto text-white mb-2">
          <Link to="/">
            <StaticImage
              src="../images/logo.svg"
              alt="Nuclearis"
              placeholder="none"
              width={150}
            />
          </Link>
        </div>
        <div onClick={() => setExpanded(!isExpanded)} className={`${isExpanded ? 'tham-active' : 'tham'} tham tham-e-squeeze tham-w-8 mt-2 z-50`}>
          <div className="tham-box">
            <div className="bg-white tham-inner"/>
          </div>
        </div>
      </div>
      <div className={`${isExpanded ? 'max-h-screen opacity-100 pb-5' : 'max-h-0 opacity-0'} overflow-hidden px-8 w-full transition-all duration-500 ease-in-out block z-40 text-white text-xl`}>
        <Link to="/" className="block py-2 hover:text-pelorous">
          Home
        </Link>
        <Link
          to="/about"
          className="block py-2 hover:text-pelorous"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="block py-2 hover:text-pelorous"
        >
          Services
        </Link>
        <Link
          to="/works"
          className="block py-2 hover:text-pelorous"
        >
          Our Work
        </Link>
        <Link to="/contact" className="block py-2 hover:text-pelorous">
          Contact Us
        </Link>
      </div>
    </header>
  )
}

const DesktopHeader = (_props: Props): ReactElement => {

  return (
    <header
      className={`${
        _props.isLanding ? "fixed right-0 left-0 z-10" : "bg-gable"
      }`}
    >
      <nav>
        <div className="flex w-full max-w-5xl m-auto py-7 px-8">
          <div className="flex-auto text-white mb-2">
            <a href="/">
              <StaticImage
                src="../images/logo.svg"
                alt="Nuclearis"
                placeholder="none"
                width={150}
              />
            </a>
          </div>
          <div className="flex-auto text-right">
            <div className="text-xs text-white font-bold tracking-wide uppercase mt-3">
              <Link to="/" className="mr-7 inline-block hover:text-pelorous">
                Home
              </Link>
              <Link
                to="/about"
                className="mr-7 inline-block hover:text-pelorous"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="mr-7 inline-block hover:text-pelorous"
              >
                Services
              </Link>
              <Link
                to="/works"
                className="mr-7 inline-block hover:text-pelorous"
              >
                Our Work
              </Link>
              <Link to="/contact" className="inline-block hover:text-pelorous">
                Contact Us
              </Link>
              {!_props.isLanding && (
                <div className="hidden">
                  <a
                    href="https://www.instagram.com/nuclearis.nrs"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-14 mr-3 inline-block w-4 -mb-1"
                  >
                    <StaticImage
                      src="../images/instagram.svg"
                      placeholder="none"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/nuclearis.nrs"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 inline-block w-4 -mb-1"
                  >
                    <StaticImage
                      src="../images/facebook.svg"
                      placeholder="none"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nuclearis"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-4 -mb-1"
                  >
                    <StaticImage
                      src="../images/linkedin.svg"
                      placeholder="none"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Header = (_props: Props) => {
  const [loadingBar, setLoadingBar] = useState("w-0");

  useEffect(() => {
    setLoadingBar("w-1/2");
    setTimeout(() => setLoadingBar("w-full"), 500);
  }, [])
  
  return (
    <>
      <div className={`z-20 absolute h-1 block top-0 ${loadingBar} bg-submarine transition-all duration-1000 ease-in-out`}></div>
      <div className="block sm:hidden">
        <MobileHeader isLanding={_props.isLanding} />
      </div>
      <div className="hidden sm:block">
        <DesktopHeader isLanding={_props.isLanding} />
      </div>
    </>
  )
}

export default Header
