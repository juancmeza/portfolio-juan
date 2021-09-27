import React from 'react';


function About() {

//---------------------------------------- Set State -------------------------------------------

  return (
    <div id="AboutContainer">
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle FontGradient">About Me</h2>
        <div id="About">
            <div id="About1">
                <ul>
                    <li>
                        I am a lifelong learner with a great work ethic who immigrated from Mexico at the age of fourteen 
                        and went on to get a degree in Geophysics from UC Berkeley.
                    </li>
                    <li>
                        Spending years studying a subject I was not genuinely passionate about made me realize
                        the importance of loving what you do and I decided to explore the food and beverage industry, where I
                        found a newly sparked interest in the creative possibilities of the cocktail world.
                    </li>
                    <li>
                        7 years later, I knew it was time to seek new challenges, and after some exploration,
                        I decided to enroll in Flatiron's Software Engineering bootcamp, where I learned
                        RESTful APIs, agile development, and many of the technical skills below.
                    </li>
                </ul>
            </div>
            <div id="About2">
                <div className="TechnicalSkills FontGradient" >
                    <h3>Languages</h3>
                    <p>Javascript</p>
                    <p>Ruby</p>
                    <p>Python</p>
                    <p>SQL</p>
                    <p>PHP</p>
                    {/* <li>R</li> */}
                    <p>HTML5</p>
                    <p>CSS3</p>
                </div>
                <div className="TechnicalSkills FontGradient">
                    <h3>Frameworks</h3>
                    <p>React</p>
                    <p>Ruby on Rails</p>
                    <p>Bootstrap</p>
                    <p>Material UI</p>
                    <p>Semantic UI</p>
                </div>
                <div className="TechnicalSkills FontGradient">
                    <h3>Other</h3>
                    <p>RSpec</p>
                    <p>Jest</p>
                    <p>Heroku</p>
                    <p>Firebase</p>
                    <p>Netlify</p>
                    <p>Postman</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
