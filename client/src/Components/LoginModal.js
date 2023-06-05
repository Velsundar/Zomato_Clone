import React,{useEffect,useState} from 'react';
import Modal from 'react-modal';
import './Styles/LoginModal.css';
// import {Image} from 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login';

// Modal.setAppElement('#root');

const MyModal =({isOpen, onClose})=>{
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        };
        document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

    return(
      <>
      {/* This is Login Modal */}
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Login" shouldCloseOnOverlayClick={true} className='LoginModal'>
            <div className='modalContent'>
            <button onClick={onClose} className='closeButton'>X</button>
            <h2>Sign In</h2>
            <form className='ModelForm1'>
            <label for="Uname">Username:</label>{' '}
            <input type='text' placeholder='Username' id='Uname'></input><br/><br/>
            <label fro="Password">Password:</label>{' '}
            <input type='password' placeholder='Password' id='password'></input><br/><br/>
            <button type='submit' className='LoginButton'>Login</button>
            </form>
            </div>
        </Modal >
        {/* This is Signup Modal */}
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Sigup" shouldCloseOnOverlayClick={true} className='SignupModal'>
        <div className='modalContent'>
          <button onClick={onClose} className='closeButton'>X</button>
          <h2>Sign Up</h2>
          <form className='ModelForm1'>
            <label for="Uname">Username:</label>{' '}
            <input type='text' placeholder='Username' id='Uname'></input><br/><br/>
            <label for="Uname">Email:</label>{' '}
            <input type='email' placeholder='Email' id='Email'></input><br/><br/>
            <label fro="Password">Password:</label>{' '}
            <input type='password' placeholder='Password' id='password'></input><br/><br/>
            <label for="Confirm Password">Confirm Password:</label>{' '}
            <input type='password' placeholder='Confirm Password' id='Confirm Password'></input><br/><br/>
            <button type='submit' className='LoginButton'>Login</button>
            {/* <div style={{ marginTop: '17px', fontSize: '16px', textAlign: 'center' }}>Already have an account? <a href="." onClick={switchToSignin}>Sign in now</a></div> */}
            </form>

        </div>
        </Modal>

        </>
        
        
    )
}
export default MyModal;