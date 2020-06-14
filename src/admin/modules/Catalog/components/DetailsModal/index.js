import React from "react";
import PropTypes from "prop-types";
import { Table, Modal, Button } from "react-bootstrap";

import "./DetailsModal.scss";

const DetailsModal = ({ setShow, show, details }) => (
    <Modal
        className="my-modal modal-details"
        show={show}
        onHide={() => setShow(false)}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Характеристики</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table size="sm">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Форма:</td>
                        <td>{details.shape || "---"}</td>
                    </tr>
                    <tr>
                        <td>Материалы:</td>
                        <td>
                            {details.material && details.material[0] !== ""
                                ? details.material.map(
                                      (item, index) => (index ? ", " : "") + item
                                  )
                                : "---"}
                        </td>
                    </tr>
                    <tr>
                        <td>Стиль:</td>
                        <td>{details.style || "---"}</td>
                    </tr>
                    <tr>
                        <td>Цвет:</td>
                        <td>
                            {details.color && details.color[0] !== ""
                                ? details.color.map(
                                      (item, index) => (index ? ", " : "") + item
                                  )
                                : "---"}
                        </td>
                    </tr>
                    <tr>
                        <td>Коллекция:</td>
                        <td>{details.collection || "---"}</td>
                    </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="link" size="lg" onClick={() => setShow(false)} block>
                Ок
            </Button>
        </Modal.Footer>
    </Modal>
);

DetailsModal.propTypes = {
    setShow: PropTypes.func,
    show: PropTypes.bool,
    details: PropTypes.object
};

export default DetailsModal;
