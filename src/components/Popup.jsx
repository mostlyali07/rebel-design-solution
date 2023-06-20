import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Modal show={showPopup} onHide={() => setShowPopup(false)} centered className="modal-xl">
            <Modal.Body closeButton>
                <div className="row">
                    <div className="pop-img">
                        <div className="col-md-6">

                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default Popup