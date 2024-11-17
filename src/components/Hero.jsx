import React from 'react'

const Hero = () => {
  return (
    <section aria-label="showcase" className="showcase">
                <div className="container">
                    <div className="headline">
                        <h1 className="d4">Manage All Your Money in One App</h1>
                    </div>
                    <div className="content">
                        <p className="text-lg">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                        <div className="buttons">
                            <a className="btn-download-app" href="#"><img src="Resources/appstore.svg" alt="appstore"/></a>
                            <a className="btn-download-app" href="#"><img src="Resources/googleplay.svg" alt=""/></a>
                        </div>

                        <a className="discover-more">
                            <span href="#features" className="btn-circle">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                            <span>Discover more</span>    
                        </a>

                    </div>

                    <div className="phones-img">
                        <img src="Resources/phones-yourcrads-mybudget.svg" alt="" className="img"/>
                    </div>
                </div>
            </section>
  )
}

export default Hero