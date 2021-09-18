import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({

    action: {
      backgroundColor: 'rgba(0, 0, 0, .5)',
      color: 'rgb(212, 222, 230, 0.9)',
      marginBottom: -100,
      marginTop: -80,
      marginRight: 10,
      marginLeft: 10,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#C0C0C0',
      },
    }
  }));  

function About() {

  const styles = useStyles();

  return (
    <div>
        <a href="https://www.linkedin.com/in/juan-meza-36065974/">
            <IconButton className={styles.action}>
                <LinkedInIcon fontSize="large"></LinkedInIcon>
            </IconButton>
        </a>
        <a href="https://github.com/juancmeza">
            <IconButton className={styles.action}>
                <GitHubIcon fontSize="large"></GitHubIcon>
            </IconButton>
        </a>
        <a href="https://www.instagram.com/juanforthebookz/">
            <IconButton className={styles.action}>
                <InstagramIcon fontSize="large"></InstagramIcon>
            </IconButton>
        </a>
    </div>
  );
}

export default About;
