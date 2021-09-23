import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: '0.91em', // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 30px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: '85vw',
    marginLeft: 'auto',
    overflow: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    // paddingTop: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'column',
      maxWidth: '60vw',
    //   paddingTop: spacing(2),
    },
  },
  media: {
    minWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: spacing(-1),
    paddingBottom: '55%',
    borderRadius: '0.9em 0.9em 0 0',
    backgroundColor: '#fff',
    position: 'relative',
    top: 0,
    marginTop: 0,
    [breakpoints.up('md')]: {
      width: '100%',
    //   marginLeft: spacing(-3),
      marginTop: 0,
    //   transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    //   height: '100%',
    //   borderRadius: spacing(2), // 16
      opacity: 0.9,
    },
  },
  content: {
    padding: 9,
    width: '90%',
    color: 'black',
    textAlign: 'center',
    fontFamily: "Raleway",
    marginTop: -10,
    marginBottom: -10,
    // marginLeft: spacing(2),
    fontSize: 19,
    [breakpoints.up('md')]: {
        textAlign: 'left',
      },
  },
  cta: {
    marginTop: 4,
    textTransform: 'initial',
  },
}));

export const ProjectCard = React.memo(function BlogCard({data}) {
  const styles = useStyles();
//   const shadowStyles = useOverShadowStyles();
console.log('here', data.text)

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