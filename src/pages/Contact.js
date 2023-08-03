import React, { useState } from 'react';

export default function Contact() {

  const [formState, setFormState]=useState({
    name:'', 
    email:'',
    message:'',
  })

  const [ name, email, message] = formState;

  // handleSubmit function -> not much 

  // ** handleChange function -> check to make sure contents of field are valid

  //  ** onBlur attributes to input and textarea elements onBlur = {handleChange}

  return (
    <div>
      <h1>Contact</h1>
      <p>
      
       I am always open to networking and collaboration opportunities.

Let's connect and create something amazing together!
      </p>

      <form className='contact'>
        <div className="form-field">
          <label for="name">name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-field">
          <label for="email">email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label for="message">message:</label>
          <textarea rows="4" id="message" name="message" required />
        </div>
        <button type="submit">submit</button>
      </form>




    </div>
  );
}