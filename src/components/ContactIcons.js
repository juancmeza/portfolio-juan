import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({

    action: {
      backgroundColor: 'rgba(0, 0, 0, .5)',
      color: '#a0d0ec',
      marginRight: 10,
      marginLeft: 10,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
      '&:hover': {
        backgroundColor: '#304369',
        // color: '#376ec0',
      },
    }
  }));  

function ContactIcons() {

  const styles = useStyles();

  return (
    <div className="ContactIcons">
        <a href="https://www.linkedin.com/in/juan-meza-36065974/">
            <IconButton className={styles.action}>
                <LinkedInIcon fontSize="large"></LinkedInIcon>
            </IconButton>
        </a>
        {/* <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jcmezadev@gmail.com">
            <IconButton className={styles.action}>
                <EmailIcon fontSize="large"></EmailIcon>
            </IconButton>
        </a> */}
    </div>
  );
}

export default ContactIcons;
