import { createPortal } from "react-dom"

export default function ModalLayout({isOpen, children}){
    return isOpen ? createPortal(children, document.querySelector("#modal")) : null;
}