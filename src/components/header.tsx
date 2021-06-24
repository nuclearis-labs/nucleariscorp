import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {hasBackground: Boolean}

const MobileHeader = (_props: Props): ReactElement =>  {
    return (
        <header className={`block sm:hidden ${_props.hasBackground ? 'bg-gable' : 'fixed right-0 left-0 z-10'}`}>
            <nav>
                <div className="flex w-full max-w-6xl m-auto py-7 px-8">
                <div className="flex-auto text-white mb-2">
                    <a
                        href="/"
                    >
                        <StaticImage src="../images/logo.svg" alt="Nuclearis" placeholder="none" width={150} />
                    </a>
                </div>
                <div
                    className="flex-auto text-right"
                >
                    <div className="text-xs text-white font-bold tracking-wide uppercase mt-3">
                        <a
                            href="/"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Home
                        </a>
                        <a
                            href="about"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            About Us
                        </a>
                        <a
                            href="services"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Services
                        </a>
                        <a
                            href="works"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Works
                        </a>
                        <a
                            href="contact"
                            className="inline-block hover:text-pelorous"
                        >
                            Contact Us
                        </a>
                        {!_props.hasBackground && <>
                            <a
                                href="https://www.instagram.com/nuclearis.nrs"
                                className="ml-14 mr-3 inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/instagram.svg" placeholder="none" alt="Instagram" />
                            </a>
                            <a
                                href="https://www.facebook.com/nuclearis.nrs"
                                className="mr-3 inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/facebook.svg" placeholder="none" alt="Facebook" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/nuclearis"
                                className="inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/linkedin.svg" placeholder="none" alt="Linkedin" />
                            </a>
                        </>}
                    </div>
                </div>
                </div>
            </nav>
        </header>
    )
}

const DesktopHeader = (_props: Props): ReactElement => {
    return (
        <header className={`${_props.hasBackground ? 'bg-gable' : 'fixed right-0 left-0 z-10'}`}>
            <nav>
                <div className="flex w-full max-w-6xl m-auto py-7 px-8">
                <div className="flex-auto text-white mb-2">
                    <a
                        href="/"
                    >
                        <StaticImage src="../images/logo.svg" alt="Nuclearis" placeholder="none" width={150} />
                    </a>
                </div>
                <div
                    className="flex-auto text-right"
                >
                    <div className="text-xs text-white font-bold tracking-wide uppercase mt-3">
                        <a
                            href="/"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Home
                        </a>
                        <a
                            href="about"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            About Us
                        </a>
                        <a
                            href="services"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Services
                        </a>
                        <a
                            href="works"
                            className="mr-9 inline-block hover:text-pelorous"
                        >
                            Works
                        </a>
                        <a
                            href="contact"
                            className="inline-block hover:text-pelorous"
                        >
                            Contact Us
                        </a>
                        {!_props.hasBackground && <>
                            <a
                                href="https://www.instagram.com/nuclearis.nrs"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-14 mr-3 inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/instagram.svg" placeholder="none" alt="Instagram" />
                            </a>
                            <a
                                href="https://www.facebook.com/nuclearis.nrs"
                                target="_blank"
                                rel="noreferrer"
                                className="mr-3 inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/facebook.svg" placeholder="none" alt="Facebook" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/nuclearis"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block w-4 -mb-1"
                            >
                                <StaticImage src="../images/linkedin.svg" placeholder="none" alt="Linkedin" />
                            </a>
                        </>}
                    </div>
                </div>
                </div>
            </nav>
        </header>
    )
}

const Header  = (_props: Props) => {
    return (
        <>
            <div className="block sm:hidden">
                <MobileHeader hasBackground={_props.hasBackground}/>
            </div>
            <div className="hidden sm:block">
                <DesktopHeader hasBackground={_props.hasBackground}/>
            </div>
        </>
    )
}

export default Header