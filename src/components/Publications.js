import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@mui/icons-material/CallMade';

const useStyles = makeStyles((theme) => ({

  action: {
    backgroundColor: 'rgba(250, 250, 250, .8)',
    color: 'rgba(36, 155, 190)',
    marginBottom: -100,
    marginTop: -80,
    marginRight: 10,
    marginLeft: 10,
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: 'rgba(100, 100, 100, .5)',
      color: '#ebb216'
    },
  }
})); 

//rgba(0, 0, 0, .5)

function Publications() {

  const styles = useStyles();

  return (
    <div id="Publications">
        <div style={{height: '5vh'}}></div>
        <h2 className="ComponentTitle">Publications</h2>
        <div className="PublicationsCardsContainer">
          <div id="Carousel" className="PublicationsCard">
            <div className="LinkIcon">
              <a href="https://medium.com/nerd-for-tech/use-an-auto-rotating-carousel-to-deliver-your-apps-elevator-pitch-923d94f7130d">
                <IconButton className={styles.action}>
                    <CallMadeIcon fontSize='small'></CallMadeIcon>
                </IconButton>
              </a>
            </div>
          </div>
          <div id="Recursion" className="PublicationsCard">
            <div className="LinkIcon">
              <a href="https://juancarlosmezadelatorre.medium.com/warming-up-to-recursive-algorithms-5b27ed241f5">
                <IconButton className={styles.action}>
                    <CallMadeIcon fontSize='small'></CallMadeIcon>
                </IconButton>
              </a>
            </div>
          </div>
          <div id="Hooks" className="PublicationsCard">
            <div className="LinkIcon">
              <a href="https://juancarlosmezadelatorre.medium.com/react-from-class-components-to-hooks-4cc787290262">
                <IconButton className={styles.action}>
                    <CallMadeIcon fontSize='small'></CallMadeIcon>
                </IconButton>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Publications;
