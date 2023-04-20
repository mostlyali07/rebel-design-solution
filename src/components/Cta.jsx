
const Cta = () => {
    return (
        <>
            <div className="ctas py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="fw-bold">Let's Talk!</h2>
                            <p>Share your project details and get a budget-friendly quote <br>
                                right away!</p>
                        </div>
                        <div className="col-md-6 text-end d-flex align-items-end justify-content-around flex-column">
                            <div className="mobile-cta-btn">
                                <button className="btns-seven" type="submit"><i className="fa-solid fa-cube"></i>&nbsp; SELECT
                                    PACKAGE</button>&nbsp;&nbsp;
                                <button className="btns-eight" type="submit"><i className="fa-solid fa-file-signature"></i>&nbsp;
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