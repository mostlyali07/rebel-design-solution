import React from 'react'

const ContentSec = ({ text, descrp, src }) => {
    return (
        <div className='right-side your-animation-class'>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src={src} className="cus-width" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2 className='pb-2'>{text}</h2>
                            <p className='pb-3'>{descrp}</p>
                            <a href="" className="btns-three">START PROJECT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSec;