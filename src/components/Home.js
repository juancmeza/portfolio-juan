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
                <div className="FontGradient"> World!!!</div>
            </TypeWriter>
            <div style={{height: '5vh'}}></div>
            {displayHomeParagraph ? 
                <div id="HomeParagraph">
                    <div>
                        My name is 
                        <span style={{color: '#ebb216'}}> JUAN CARLOS MEZA </span>
                        and I'm a 
                        <span style={{color: '#ebb216'}}> JUNIOR FULL-STACK SOFTWARE ENGINEER </span>
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
