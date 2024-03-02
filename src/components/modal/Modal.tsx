import React from 'react';
import s from './Modal.module.scss'


interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}
const Modal = ({children, onClose, title}:ModalProps) => {
    return (

        <>
            <div className={s.background} onClick={onClose}></div>
            <div className={s.modal}>
                <h1 className={s.title}>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default Modal;