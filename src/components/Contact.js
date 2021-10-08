import React from 'react';
import ContactIcons from './ContactIcons.js';
import Footer from './Footer.js';

function Contact() {
  return (
    <div id="Contact">
        <div id="ContactBackground"></div>
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle FontGradient">Contact</h2>
        <div id="ContactContainer">
            <div id="ProfilePicture"></div>
            <div id="ContactText">
              Do you have any questions for me?
            </div>
            <div id="ContactText">
              Let's connect on LinkedIn!
            </div>
            <ContactIcons></ContactIcons>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Contact;
