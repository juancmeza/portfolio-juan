import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    action: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#a0d0ec',
      marginRight: 10,
      marginLeft: 10,
      marginBottom: -5,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    }
  }));

function Footer() {

  const styles = useStyles();

  return (
    <div id="Footer">
        <div style={{height: '2vh'}}></div>
        {/* <div id="FooterContainer"> */}
            <CopyrightIcon className={styles.action}></CopyrightIcon>
            <p className="ComponentTitle FontGradient">Juan Carlos Meza</p>
        {/* </div> */}
    </div>
  );
}

export default Footer;
