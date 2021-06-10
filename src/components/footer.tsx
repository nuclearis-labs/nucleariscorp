import React, { ReactElement } from "react"
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
                        nuclearis
                    </a>
                    <div
                    className="grid grid-cols-12 gap-20 pb-6 mb-4 border-b border-submarine text-submarine"
                    >
                        <div className="mt-auto col-span-5">
                            <p>General Balcarce 160</p> 
                            <p>Villa Martelli, Buenos Aires.</p> 
                            <p>Argentina 1603</p>
                        </div>
                        <div className="col-span-4">
                            <p>+54 11 5264-2700</p>
                            <p>info@nuclearis.com</p>
                            <p>rrhh@nuclearis.com</p>
                        </div>
                        <div className="col-span-3 ml-auto mt-auto">
                            <a
                            href="https://www.instagram.com/nuclearis.nrs"
                            className="mr-3 inline-block w-6"
                            >
                            <img src="icons/instagram_dark.svg" alt="instagram"/>
                            </a>
                            <a
                            href="https://www.facebook.com/nuclearis.nrs"
                            className="mr-3 inline-block w-6"
                            >
                            <img src="icons/facebook_dark.svg" alt="facebook"/>
                            </a>
                            <a
                            href="https://www.linkedin.com/company/nuclearis"
                            className="inline-block w-6"
                            >
                            <img src="icons/linkedin_dark.svg" alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                    <p className="text-submarine">© 2021. Nuclearis. NRS, S.A. - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer