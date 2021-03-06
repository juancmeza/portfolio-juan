import React from 'react';


function About() {

  const aboutAnimated = document.querySelectorAll(".AboutAnimated")

  const observer = new IntersectionObserver(entries=> {
    console.log(entries)
  })

  return (
    <div id="AboutContainer">
        <div id="AboutBackground"></div>
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle FontGradient">About Me</h2>
        <div id="About">
            <div id="About1" className='AboutAnimated'>
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
                        7 years later, I knew it was time to seek new challenges and after some exploration,
                        I decided to enroll in Flatiron's Software Engineering bootcamp, where I learned
                        RESTful APIs, agile development, and many of the technical skills below.
                    </li>
                </ul>
            </div>
            <div id="About2" className='AboutAnimated'>
                <div className="TechnicalSkills">
                    <h3 className="FontGradient">Languages</h3>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    {/* <li>R</li> */}
                    <li>HTML5</li>
                    <li>CSS3</li>
                </div>
                <div className="TechnicalSkills">
                    <h3 className="FontGradient">Frameworks</h3>
                    <li>React</li>
                    <li>Ruby on Rails</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li>Semantic UI</li>
                </div>
                <div className="TechnicalSkills">
                    <h3 className="FontGradient">Other</h3>
                    <li>RSpec</li>
                    <li>Jest</li>
                    <li>Heroku</li>
                    <li>Firebase</li>
                    <li>Netlify</li>
                    <li>Postman</li>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
