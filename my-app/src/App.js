import './index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dzy220j', 'template_xite6q4', form.current, 'CdolNR6B-_vn2-VUo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="App">
     <div className='div_one'>
       <nav>
         <h1>alumnna</h1>
         <button><a href='https://expo.dev/@yefim94/alumnna'>LINK TO BETA</a></button>
       </nav>
     </div>
     <div className='div_two'>
       <h2>The task manager for your daily tasks</h2>
       <img src='https://cdn.discordapp.com/attachments/829914581039579166/967845764497801276/Screen_Shot_2022-04-24_at_1.53.20_PM.png' />
     </div>
     <div className='div_three'>
       <h2>How to download:</h2>
       <img width='500' src='https://cdn.discordapp.com/attachments/829914581039579166/968625075765018624/Screen_Shot_2022-04-26_at_5.29.15_PM.png' />
     </div>
     <div className='div_four'>
       <h2>Email for IOS users:</h2>
       <p>unfortunaulty due to IOS policy we have to manually add you to expo go to install the app...Put your email below to gain access</p>
       <form ref={form} className='form' onSubmit={sendEmail}>
      <label className='inputheading'>Name</label>
      <input type="text" name="user_name" placeholder='name' />
      <label className='inputheading'>Email</label>
      <input type="email" name="user_email" placeholder='email' />
      <label className='inputheading'>Message</label>
      <textarea name="message" placeholder='message'/>
      <input className='submit-button' type="submit" value="Send" placeholder='name' />
    </form>
     </div>
    </div>
  );
}

export default App;