import React from 'react'

const Tips = () => {
  return (
    <section aria-label="tips" className="tips">
                <div className="container">
                    <div className="top">
                        
                        <div className="content">
                            <h2>Make your money transfer simple and clear</h2>
                            <div className="info">
                                <li>Banking transactions are free for you</li>
                                <li>No monthly cash commission</li> 
                                <li>Manage payments and transactions online</li>
                            </div>
                            
                            <img src="Resources/stocks.svg" alt="" className="img1"/>
                    </div>
                        
                        <a href="a" className="btn btn-learn">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="bottom">

                        <div className="content">
                            <h2>Receive payment from international bank details</h2>
                            <div className="info">
                                <ul>
                                    <li>Manage your payments online. Mollis congue egestas egestas fermentum fames.</li>
                                    <li>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</li>
                                </ul>
                                
                            </div>
                            <img src="Resources/card-people.svg" alt="" className="img2"/>
                        </div>
                        

                        <a href="a" className="btn btn-learn">
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
  )
}

export default Tips