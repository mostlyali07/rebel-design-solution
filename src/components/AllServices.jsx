import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faSquarePollVertical, faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
const AllServices = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <h2 className='fw-bold text-center pb-4'>
                        OUR SERVICES
                    </h2>
                    <div className="col-md-3">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                        <h4 className='fw-bold'>Search Engine Optimization</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quidem soluta porro optio sint officiis reiciendis ipsa consequuntur!
                                        Deserunt nihil laborum fugit, odit quisquam nobis nesciunt, id laboriosam expedita in itaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faSquarePollVertical} />
                                        <h4 className='fw-bold'>Social Media Marketing</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quidem soluta porro optio sint officiis reiciendis ipsa consequuntur!
                                        Deserunt nihil laborum fugit, odit quisquam nobis nesciunt, id laboriosam expedita in itaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faCode} />
                                        <h4 className='fw-bold'>Website Designing Development</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quidem soluta porro optio sint officiis reiciendis ipsa consequuntur!
                                        Deserunt nihil laborum fugit, odit quisquam nobis nesciunt, id laboriosam expedita in itaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPenNib} />
                                        <h4 className='fw-bold'>Logo Design</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quidem soluta porro optio sint officiis reiciendis ipsa consequuntur!
                                        Deserunt nihil laborum fugit, odit quisquam nobis nesciunt, id laboriosam expedita in itaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllServices