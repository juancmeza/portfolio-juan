import React, {useState} from 'react';
import TypeWriter from "react-typewriter";


function About() {

//---------------------------------------- Set State -------------------------------------------

  return (
    <div id="AboutContainer">
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle">About Me</h2>
        <div id="About">
            <div id="About1">
                <ul>
                    <li>
                        After leaving my hometown in Mexico at the age of fourteen, I graduated
                        from UC Berkeley with a degree in Geophysics.
                    </li>
                    <li>
                        Spending years studying a subject I was not genuinely passionate about made me realize
                        the importance of loving what you do and went on to explore the food and beverage industry, where I
                        found a newly sparked interest in the creative possibilities of the cocktail world.
                    </li>
                    <li>
                        7 years later, I knew it was time to seek new challenges and after some exploration,
                        I decided to enroll in Flatiron's Software Engineering bootcamp, where I learned
                        most of the skills below.
                    </li>
                </ul>
            </div>
            <div id="About2">
                <div className="TechnicalSkills">
                    <h3>Languages</h3>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>R</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </div>
                <div className="TechnicalSkills">
                    <h3>Frameworks</h3>
                </div>
                <div className="TechnicalSkills">
                    <h3>Other</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
