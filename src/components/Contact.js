import React from 'react';
import ContactIcons from './ContactIcons.js';
import Footer from './Footer.js';

function Contact() {
  return (
    <div id="Contact">
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle FontGradient">Contact</h2>
        <div id="ContactContainer">
            <div id="ProfilePicture"></div>
            <div id="ContactText">
              Do you think I would be a good fit for your team?
            </div>
            <div id="ContactText">
              Let's connect on LinkedIn or shoot me an email.
            </div>
            <ContactIcons></ContactIcons>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Contact;
