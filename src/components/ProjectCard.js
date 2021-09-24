import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@material-ui/core/IconButton';

// import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    background: 'rgba(0,0,0,0.5)',
    margin: 'auto',
    borderRadius: '0.91em', 
    transition: '0.3s',
    boxShadow: '0px 14px 30px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: '90vw',
    height: '73vh',
    marginLeft: 'auto',
    overflow: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'column',
      maxWidth: '50vw',
    },
  },
  media: {
    minWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '55%',
    borderRadius: '0.9em 0.9em 0 0',
    backgroundColor: '#fff',
    position: 'relative',
    top: 0,
    marginTop: 0,
    [breakpoints.up('md')]: {
      width: '100%',
      marginTop: 0,
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 0.9,
    },
  },
  content: {
    // background: 'rgba(0,0,0,0.5)',
    padding: 9,
    width: '90%',
    textAlign: 'center',
    fontFamily: "Metal Mania",
    marginTop: -10,
    marginBottom: -10,
    // marginLeft: spacing(2),
    fontSize: '3.0vh',
    [breakpoints.up('md')]: {
        textAlign: 'left',
        fontSize: 21,
      },
  },
  cta: {
    marginTop: 4,
    textTransform: 'initial',
  },
}));

export const ProjectCard = React.memo(function BlogCard({data}) {
  const styles = useStyles();

  return (
    <Card className={cx(styles.root)}>
      <CardMedia
        className={styles.media}
        image={
            Object.values(data.image)[0]
        }
      />
      <CardContent>
        <p className={styles.content}>
            {data.text}
        </p>
      </CardContent>
    </Card>
  );
});

export default ProjectCard