import React, {useState} from 'react';
import TypeWriter from "react-typewriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@material-ui/core/IconButton';
import SocialMedia from './SocialMedia'


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
        <div style={{height: '10vh'}}></div>
        <div id="About">
            <TypeWriter typing={0.5} onTypingEnd={() => setDisplayAboutParagraph(true)}>
                Hello
                <div style={{color: '#3b79ac'}}> World!!!</div>
            </TypeWriter>
            <div style={{height: '5vh'}}></div>
            {displayAboutParagraph ? 
                <div id="AboutParagraph">
                    <div>
                        My name is 
                        <span style={{color: '#ebb216'}}> JUAN CARLOS MEZA </span>
                        and I'm a 
                        <span style={{color: '#ebb216'}}> JUNIOR FULL-STACK WEB DEVELOPER </span>
                        based in the San Francisco Bay Area currently working at AAK-TELESCIENCE, INC.
                    </div>
                    <div className="SocialMedia">
                        <SocialMedia></SocialMedia>
                    </div>
                </div>
                :
                null
            }
        </div>
    </div>
  );
}

export default About;
