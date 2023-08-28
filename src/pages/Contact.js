import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

export default function Contact() {

  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'email', e.target, 'fDxGlF4nZXY1nK4Oi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }

  
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [errAlert, setErrAlert]=useState('');
 

  
  // ** handleChange function -> check to make sure contents of field are valid
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
     if(inputType === 'name'){
      setName(inputValue);
     } else if (inputType === 'email'){
      setEmail(inputValue);
     } else {
      setMessage(inputValue);
     }
    
  };
  //  ** onBlur attributes to input and textarea elements onBlur = {handleChange}
  const handleInputBlur = (e) => {    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!inputValue) {
      if (inputType === "name") {
        setErrAlert(" Name is required.");
      } else if (inputType === "email") {
        setErrAlert("Email is required.");
      } else {
        setErrAlert("Message is required.");
      }
    } else {
      setErrAlert(""); 
    }
  };
  // handleSubmit function -> not much 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const validateEmail = (email) => {
      const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return re.test(email);
    };

    if (!validateEmail(email)) {
      setErrAlert('Email is invalid');
      return;
    };
    
   
  
    // Alert the user their first and last name, clear the inputs
    
    setName('');
    setEmail('');
    setMessage('');
    setErrAlert('');

    alert(`Thank you for sending your message.`);
  };


  return (
    <div style ={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection:"column",
      height: "100%",
      width: "100%",
    }}>
      <h1>Contact</h1>
      <p>I am always open to networking and collaboration opportunities.</p>
      <p>Let's connect and create something amazing together!</p>

      <div className='contact'>
      <form onSubmit={(sendEmail)}>
        <div className="form-field">
          <label for="name">Name:</label>
          <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="name"
        />
          {/* <input type="text" id="name" name="name" required /> */}
        </div>
        <div className="form-field">
          <label for="email">Email:</label>
          <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="example@gmail.com"
        />
          {/* <input type="email" id="email" name="email" required /> */}
        </div>
        <div className="form-field">
          <label for="message">Message:</label>
          <textarea 
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="message"
          
          
        ></textarea>

           {errAlert && (
            <div>
              <p className="error-msg">{errAlert}</p>
            </div>
          )}
          {/* {/* <textarea rows="4" id="message" name="message" required /> */}
        </div>
        <button type="submit" onClick={handleFormSubmit}>submit</button>
      </form>
      </div>




    </div>
  );
}