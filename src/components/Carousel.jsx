import React from 'react'

const Carousel = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
        <div className="container">
            <h2 className="h1">How Does It Work?</h2>

            <div className="carousel">
                <div className="carousel-item">
                    <img src="Resources/phone-left.svg" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="Resources/phone-front.svg" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="Resources/phone-right.svg" alt=""/>
                </div>
            </div>

            <div className="text">
                <h3 className="h4">Latest transaction history</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            </div>

        </div>
        </section>
  )
}

export default Carousel