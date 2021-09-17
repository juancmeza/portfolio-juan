import React, {useState} from 'react';
import TypeWriter from "react-typewriter";


function About() {

//---------------------------------------- Set State -------------------------------------------
    const [displayAboutParagraph, setDisplayAboutParagraph] = useState(false)
    // const [renderCounter, setRenderCounter] = useState(0)

    // const displayAboutParagraph = () => {
    //     addTagToStudent(e, id, newTag)
    //     setNewTag('')
    //     }

  return (
    <div id="AboutContainer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="About">
            <TypeWriter typing={0.5} onTypingEnd={() => setDisplayAboutParagraph(true)}>
                Hello
                <div style={{color: '#3b79ac'}}> World!!!</div>
            </TypeWriter>
            {displayAboutParagraph ? 
                <div id="AboutParagraph">
                    My name is 
                    <span style={{color: '#ebb216'}}> JUAN CARLOS MEZA </span>
                    and I'm a 
                    <span style={{color: '#ebb216'}}> JUNIOR FULL-STACK WEB DEVELOPER </span>
                    currently working at AAK-TELESCIENCE, INC.
                </div>
                :
                null
            }
        </div>
    </div>
  );
}

export default About;
