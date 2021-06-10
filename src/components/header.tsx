import React, { ReactElement } from "react"
interface Props {hasBackground: Boolean}

function Header(_props: Props): ReactElement {
    // const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <header className={`${_props.hasBackground ? 'bg-gable' : 'fixed right-0 left-0 z-10'}`}>
            <nav>
                <div className="flex w-full max-w-6xl m-auto py-7 px-8">
                <div className="flex-auto text-white">
                    <a
                        href="/" 
                        className="text-4xl tracking-wide font-bold"
                    >
                    nuclearis
                    </a>
                </div>
                <div
                    className="flex-auto text-right"
                >
                    <div className="text-xs text-white font-bold tracking-wide uppercase mt-3">
                        <a
                            href="/"
                            className="mr-8 inline-block hover:text-pelorous"
                        >
                            Inicio
                        </a>
                        <a
                            href="nosotros"
                            className="mr-8 inline-block hover:text-pelorous"
                        >
                            Nosotros
                        </a>
                        <a
                            href="servicios"
                            className="mr-8 inline-block hover:text-pelorous"
                        >
                            Servicios
                        </a>
                        <a
                            href="trabajos"
                            className="mr-8 inline-block hover:text-pelorous"
                        >
                            Trabajos
                        </a>
                        <a
                            href="contacto"
                            className="mr-10 inline-block hover:text-pelorous"
                        >
                            Contacto
                        </a>
                        <a
                            href="https://www.instagram.com/nuclearis.nrs"
                            className="mr-3 inline-block w-4 -mb-1"
                        >
                            <img src="icons/instagram.svg" alt="instagram"/>
                        </a>
                        <a
                            href="https://www.facebook.com/nuclearis.nrs"
                            className="mr-3 inline-block w-4 -mb-1"
                        >
                            <img src="icons/facebook.svg" alt="facebook"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/nuclearis"
                            className="inline-block w-4 -mb-1"
                        >
                            <img src="icons/linkedin.svg" alt="linkedin"/>
                        </a>
                    </div>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header