import React from 'react'
import WEB from "../Images/WEB.png";

const Home = () => {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 banner-left d-flex align-items-center'>
                            <div>
                                <h1>
                                    Search Engine Optimization Services To Turn <span style={{ color: '#222222' }}> Your Online Presence</span> Into A Profit Machine
                                </h1>
                                <p>
                                    Don't wait any longer to take your business to the next level - let
                                    us help you get there with our top-notch search engine optimization services! At Rebel Design Solutions,
                                    You will receive website analysis, strategy, forecast, and key
                                    performance indicators without any strings attached.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={WEB} alt="" width={450} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home