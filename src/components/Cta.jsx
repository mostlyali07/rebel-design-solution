import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faCube } from '@fortawesome/free-solid-svg-icons';
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
                                <button className="btns-seven" type="submit"><FontAwesomeIcon icon={faCube} />&nbsp; SELECT
                                    PACKAGE</button>&nbsp;&nbsp;
                                <button className="btns-eight" type="submit"><FontAwesomeIcon icon={faFilePen} />&nbsp;
                                    REQUEST
                                    A QUOTE</button>
                            </div>
                            <div className="numChat">
                                <a href="#"><i className="fa-solid fa-phone-volume"></i>&nbsp;Contact Number: 412-622-1378</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#"><i className="fa-sharp fa-solid fa-comments"></i>&nbsp;Start Live Chat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta