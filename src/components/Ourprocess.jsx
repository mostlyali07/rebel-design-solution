
const Ourprocess = ({ prcsMain, prcsPara, prcsOne, prcsTwo, prcsThree, prcsFour, prcsFive }) => {
    return (
        <>
            <div className="container pt-5 mt-5">
                <div className="row">
                    {/* <h5 className='fs-5 text-center pb-2'>
                        OUR SEO PROCESS
                    </h5> */}
                    <h2 className='fw-bold text-center pb-2'>
                        {prcsMain}
                        {/* The <span style={{ color: '#f75515' }}> Roadmap to Extraordinary</span>: Inside Our Process */}
                    </h2>
                    <p className="text-center pb-4">
                        {prcsPara}
                    </p>
                    <div className="col-md-12">
                        <div className="mid-main">
                            <div className="one text-center">
                                <h6>
                                    1
                                </h6>
                                <h5>
                                    {prcsOne}

                                </h5>
                            </div>
                            <div className="one text-center">
                                <h6>
                                    2
                                </h6>
                                <h5>
                                    {prcsTwo}
                                   
                                </h5>
                            </div>
                            <div className="one text-center">
                                <h6>
                                    3
                                </h6>
                                <h5>
                                    {prcsThree}
                                    
                                </h5>
                            </div>
                            <div className="one text-center">
                                <h6>
                                    4
                                </h6>
                                <h5>
                                    {prcsFour}
                                  
                                </h5>
                            </div>
                            <div className="one text-center">
                                <h6>
                                    5
                                </h6>
                                <h5>
                                    {prcsFive}
                                    
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
                            <button className="btns-three" type="submit">Analyze My Site</button> &nbsp;&nbsp;
                            <button className="btns-three" type="submit">Explore Site</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourprocess