import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

import "./EditModal.scss";

const EditModal = ({ setShow, show, fetchEdit, data }) => (
    <Modal className="my-modal" show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
            <Modal.Title>Редактирование</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form</Modal.Body>
        <Modal.Footer>
            <Button variant="orange" onClick={() => console.log("click")}>
                Ок
            </Button>
        </Modal.Footer>
    </Modal>
);

EditModal.propTypes = {
    setShow: PropTypes.func,
    show: PropTypes.bool,
    fetchEdit: PropTypes.func,
    data: PropTypes.object
};

export default EditModal;
