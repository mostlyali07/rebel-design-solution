import React from 'react'
import { Link } from 'react-router-dom';

const ContentSec = ({ text, descrp, src }) => {
    return (
        <div className='right-side'>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="tilt-container">
                            <img className="tilt-image cus-width" src={src} alt="Rebel" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2 className='pb-2'>{text}</h2>
                            <p className='pb-3'>{descrp}</p>
                            <Link to="contact-us" className="btns-three">START PROJECT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSec;