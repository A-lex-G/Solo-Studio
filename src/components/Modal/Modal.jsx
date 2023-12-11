import { useEffect } from "react";
import { Backdrop, Content } from "./Modal.styled";
import { createPortal } from "react-dom";
import {
    disableBodyScroll,
    // enableBodyScroll,
    clearAllBodyScrollLocks
} from 'body-scroll-lock';

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onToogleModal }) => {    

    const handleMouseClose = (e) => {
        if (e.currentTarget === e.target) {
            onToogleModal();
        };
    };

    useEffect(() => {
        disableBodyScroll(document.body);
        const handleEscapeClose = (e) => {
            if (e.key === 'Escape') {
                onToogleModal(e);
            };
        };

        window.addEventListener('keydown', handleEscapeClose);
        return () => {
            window.removeEventListener('keydown', handleEscapeClose);
            clearAllBodyScrollLocks();
        };
    }, [onToogleModal]);
    
    return createPortal(
        <Backdrop
            onClick={handleMouseClose}>
            <Content>
                {children}
            </Content>
        </Backdrop>,
        modalRoot,
    );
}