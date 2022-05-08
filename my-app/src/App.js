import './index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from './assets/business.png'
import { IoCloseSharp } from 'react-icons/io5';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yem4m8c', 'template_xite6q4', form.current, 'CdolNR6B-_vn2-VUo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("email sent")
  };
  function deleteBanner () {
    document.getElementById('banner').remove()
  }
  return (
    <div className="App">
     <div className='banner' id='banner'>
     <div><p>This website websites purpose is to show the BETA TEST of the app</p></div>
     <div><IoCloseSharp onClick={deleteBanner} className='icon-font'/></div>
     </div>
     <div className='div_two'>
       <div className='left-side'>
       <h2>Manage Your Daily Tasks with <span className='word-app'>Alumnna</span></h2>
       <p className='para'>Manage all your daily, small, stress consuming tasks in one simple app.  With due dates, emojis, and card slots, makes managing tasks quick and effective</p>
       <div className='expo-link'>
         <img src='https://static.expo.dev/static/brand/square-512x512.png' />
         <button><a href='https://expo.dev/@yefim94/alumnna'>Link to Expo</a></button>
       </div>
       <div className='github-link'>
         <img src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png' width='100' />
         <button><a href='https://expo.dev/@yefim94/alumnna'>Link to Github</a></button>
       </div>
       </div> 
       <div className='right-side'>
       <img src={image} width='700' />
         </div>      
     </div>
     <div className='div_three'>
     <h2>Download Expo Go app with QR code</h2>
       <img width='350px' src='https://cdn.discordapp.com/attachments/829914581039579166/968625075765018624/Screen_Shot_2022-04-26_at_5.29.15_PM.png' />
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
