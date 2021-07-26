import React, { ReactElement, useState } from "react"

interface Props {}

function Cookies(_props: Props): ReactElement {
  const [cookiesAllowed, setCookiesAllowed] = useState(() => typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem("allow-cookies")) : false)
  const closeDialog = () => {
    setCookiesAllowed(true)
    if(typeof localStorage !== 'undefined') {
      localStorage.setItem("allow-cookies", "true");
    }
  }
  return (
    <>
      {!cookiesAllowed && (
        <div className="fixed bottom-0 w-full bg-pelorous py-3 px-8 text-center">
          <p className="text-white text-sm">
            <span>
              This website uses cookies to improve yout experience. We'll assume
              you're ok with this, but you can opt-out if you wish.{" "}
            </span>
            <span className="font-bold text-gable">Cookie settings</span>
            <button
              onClick={() => closeDialog()}
              className="font-semibold tracking-wide focus:outline-none block m-auto mt-3 lg:inline lg:ml-10 lg:mt-0"
            >
              ACCEPT
            </button>
          </p>
        </div>
      )}
    </>
  )
}

export default Cookies
