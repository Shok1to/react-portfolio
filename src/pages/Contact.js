import React, { useState } from 'react';
import "../styles/Contact.css";
export default function Contact() {

  // const [formState, setFormState]=useState({
  //   name:'', 
  //   email:'',
  //   message:'',
  // })
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [errAlert, setErrAlert]=useState('');
  // const [ name, email, message] = formState;

  
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

    if (!validateEmail(email)) {
      setErrAlert('Email is invalid');
      return;
    };
    
    const validateEmail = (email) => {
      const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return re.test(email);
    };
  
    // Alert the user their first and last name, clear the inputs
    alert(`Hello`);
    setName('');
    setEmail('');
    setMessage('');
    setErrAlert('');
  };


  return (
    <div>
      <h1>Contact</h1>
      <p>I am always open to networking and collaboration opportunities.</p>
      <p>Let's connect and create something amazing together!</p>

      <form className='contact'>
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
          <input 
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="message"
          
          
        />
          {/* {/* <textarea rows="4" id="message" name="message" required /> */}
        </div>
        <button type="submit" onClick={handleFormSubmit}>submit</button>
      </form>




    </div>
  );
}