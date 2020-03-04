import React from 'react';
import { Modal as BaseModal, Button } from 'react-bootstrap';

const Modal = props => {
    return (
        <BaseModal size="lg" aria-labelledby="contained-modal-title-vcenter" centered {...props} >
            <BaseModal.Header closeButton>
                <BaseModal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </BaseModal.Title>
            </BaseModal.Header>
            <BaseModal.Body>
                {props.children}
            </BaseModal.Body>
            <BaseModal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </BaseModal.Footer>
        </BaseModal>
    )
}

export default Modal;