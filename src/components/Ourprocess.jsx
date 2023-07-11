import React from 'react';
import { Link } from "react-router-dom"

const Ourprocess = ({ prcsMain, prcsPara, prcsOne, prcsTwo, prcsThree, prcsFour, prcsFive }) => {
    return (
        <>
            <div className="container pt-5 mt-5">
                <div className="row">
                    <h2 className='fw-bold text-center pb-2'>
                        {prcsMain}
                    </h2>
                    <p className="text-center pb-4">
                        {prcsPara}
                    </p>
                    <div className="col-md-12">
                        <div className="mid-main">
                            <div className="one one-main text-center">
                                <h6>
                                    1
                                </h6>
                                <h5>
                                    {prcsOne.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                            <div className="two one-main text-center">
                                <h6>
                                    2
                                </h6>
                                <h5>
                                    {prcsTwo.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                            <div className="three one-main text-center">
                                <h6>
                                    3
                                </h6>
                                <h5>
                                    {prcsThree.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                            <div className="four one-main text-center">
                                <h6>
                                    4
                                </h6>
                                <h5>
                                    {prcsFour.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                            <div className="five one-main text-center">
                                <h6>
                                    5
                                </h6>
                                <h5>
                                    {prcsFive.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center my-5">
                            <Link className="btns-three" to="contact-us">Analyze My Site</Link> &nbsp;&nbsp;
                            <Link className="btns-three" to="contact-us">Explore Site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourprocess