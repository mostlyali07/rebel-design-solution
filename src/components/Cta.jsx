import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faCube } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Cta = ({ ctAtext, ctAdescrp }) => {
    return (
        <>
            <div className="ctas py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h3 className="fw-bold">{ctAtext}</h3>
                                <p>
                                    {ctAdescrp}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 text-end d-flex align-items-end justify-content-around flex-column">
                            <div className="mobile-cta-btn">
                                <Link className="btns-seven" to="contact-us" ><FontAwesomeIcon icon={faCube} />&nbsp; SELECT
                                    PACKAGE</Link>&nbsp;&nbsp;
                                <Link className="btns-eight" to="contact-us"><FontAwesomeIcon icon={faFilePen} />&nbsp;
                                    REQUEST
                                    A QUOTE</Link>
                            </div>
                            <div className="numChat">
                                <Link to="mailto:marketing@rebeldesignsolution.com"><i className="fa-solid fa-phone-volume"></i>Email Us: marketing@rebeldesignsolution.com</Link>
                                {/* &nbsp;&nbsp;&nbsp;
                                <a href="#"><i className="fa-sharp fa-solid fa-comments"></i>&nbsp;Start Live Chat</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta