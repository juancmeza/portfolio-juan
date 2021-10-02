import React, {useState} from 'react';
import TypeWriter from "react-typewriter";
import SocialMedia from './SocialMedia'


function Home() {

//---------------------------------------- Set State -------------------------------------------
    const [displayHomeParagraph, setDisplayHomeParagraph] = useState(false)

  return (
    <div id="HomeContainer">
        <div style={{height: '10vh'}}></div>
        <div id="Home">
            <TypeWriter typing={0.5} onTypingEnd={() => setDisplayHomeParagraph(true)}>
                Hello
                <div style={{color: '#ebb216'}}> World!!!</div>
            </TypeWriter>
            <div style={{height: '5vh'}}></div>
            {displayHomeParagraph ? 
                <div id="HomeParagraph">
                    <div id="HomeIntro">
                        My name is 
                        <span> JUAN CARLOS MEZA </span>
                        and I'm a 
                        <span> FULL-STACK SOFTWARE ENGINEER </span>
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

export default Home;
