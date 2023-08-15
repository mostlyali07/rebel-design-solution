import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ContactUsForm from './ContactUsForm';

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
    // onHide={() => setShowPopup(false)}
    return (
        <Modal show={showPopup} onHide={() => setShowPopup(false)} centered className="modal-xl">
            <Modal.Body >
                <div className="row">
                    <div className="col-md-6 pop-img">
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-end">
                            <button className="popup-close-btn mx-2" onClick={() => setShowPopup(false)}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </div>
                        <div className="p-3">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </Modal.Body >
        </Modal>
    );
};
export default Popup