import React,{useState} from "react";
import '../Styles/Header.css'
import MyModal from '../LoginModal';

const Header =()=>{
    const [modalIsOpen, setModalIsopen] = useState(false);

    const openModal = ()=>{
        setModalIsopen(true);
    };
    const closeModal = ()=>{
        setModalIsopen(false);
    }
    return(
        // Top header for all component with logo and Logi n logout buttons
        <div className="header">
            <div className="header-logo">
                <p>e!</p>
            </div>
            <div className="user-account">
                <button className="login" onClick={openModal}>login</button>{' '}
                <button className="signup" onClick={openModal}>Create an Account</button>
                <MyModal isOpen={modalIsOpen} onClose={closeModal}/>
            </div>
        </div>
    )
}
export default Header;