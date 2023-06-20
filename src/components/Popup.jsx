import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
            <Modal.Header closeButton>
                <Modal.Title>Welcome to the Popup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>This is a Bootstrap popup that appears after 4 seconds.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowPopup(false)} className='btns-three'>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default Popup