import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Footer(_props: Props): ReactElement {
    return (
        <footer>
            <div className="bg-zircon">
                <div className="w-full max-w-6xl m-auto pt-14 pb-8 px-8">
                    <a
                        href="/"
                        className="block text-gable mb-8 text-4xl tracking-wide font-bold"
                    >
                        <StaticImage src="../images/logofooter.svg" alt="Nuclearis" placeholder="none" width={150} />
                    </a>
                    <div
                    className="grid grid-cols-12 gap-20 pb-6 mb-4 border-b border-submarine text-submarine"
                    >
                        <div className="mt-auto col-span-5">
                            <p>Suite 1200. 500 Marquette Av. NW.</p> 
                            <p>Albuquerque, New Mexico</p> 
                            <p>USA 87102</p>
                        </div>
                        <div className="col-span-4">
                            <p>+1 505 365-1123</p>
                            <p>info@nuclearis.com</p>
                            <p>rrhh@nuclearis.com</p>
                        </div>
                        <div className="col-span-3 ml-auto mt-auto">
                            <a
                            href="https://www.instagram.com/nuclearis.nrs"
                            className="mr-3 inline-block w-6"
                            >
                                <StaticImage src="../images/instagramdark.svg" placeholder="none" alt="Instagram" />
                            </a>
                            <a
                            href="https://www.facebook.com/nuclearis.nrs"
                            className="mr-3 inline-block w-6"
                            >
                                <StaticImage src="../images/facebookdark.svg" placeholder="none" alt="Facebook" />
                            </a>
                            <a
                            href="https://www.linkedin.com/company/nuclearis"
                            className="inline-block w-6"
                            >
                                <StaticImage src="../images/linkedindark.svg" placeholder="none" alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                    <p className="text-submarine">© 2021. Nuclearis CORP - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer