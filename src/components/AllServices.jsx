import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
const AllServices = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <h2 className='fw-bold text-center'>
                        OUR SERVICES
                    </h2>
                    <div className="col-md-3">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                        <h4>Search Engine Optimization</h4>
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
                                <div className="flip-box-front d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faSquarePollVertical} />
                                        <h4>Social Media <br /> Marketing</h4>
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
                                <div className="flip-box-front d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                        <h4>Search Engine Optimization</h4>
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
                                <div className="flip-box-front d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                        <h4>Search Engine Optimization</h4>
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