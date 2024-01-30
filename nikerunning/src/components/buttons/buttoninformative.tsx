import Iconinformative from "../icons/iconinformative";
import { useState } from "react";
import ModalInformative from "../modalinformative";

function ButtonInformative (){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
        setModalIsOpen(true);
        console.log('clicou')
      };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <>
        <button onClick={openModal} className="button-informative">
            <Iconinformative width={4} height={18}></Iconinformative>
        </button>
        <ModalInformative
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ></ModalInformative>
        </> 
    );
}
export default ButtonInformative;