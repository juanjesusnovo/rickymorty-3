import React from 'react'
import portal1 from "../images/portal1.png"
import Header from "./Header"
import Footer from "./Footer"


export default function NotFound() {
  return (
    <div>
      <Header />
      <div className='Error'>
        <section className="ErrorS">
              <h1>
                  ERROR 404
              </h1>
        </section>
        <img className="portal" src={portal1} alt="portal"/>
      </div>
      <Footer />
    </div>
  )
}
