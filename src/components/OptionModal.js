import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption &&  <p className="modal__body">{props.selectedOption}</p>}
        <button
            onClick={props.closeModal}
            className="button"
        >
            Close Modal
        </button>
    </Modal>
);

export default OptionModal;
