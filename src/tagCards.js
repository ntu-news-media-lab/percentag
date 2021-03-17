import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 75,
    maxHeight:50
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  addIcon: {
    height: 12,
    width: 12,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.controls}>
        <Typography className={classes.title} color="textSecondary">
            Apple
            {/* Pass in props here */}
          </Typography>
          <IconButton aria-label="play/pause">
            <AddIcon className={classes.addIcon} />
          </IconButton>
        
        </div>
      </div>
      
    </Card>
  );
}