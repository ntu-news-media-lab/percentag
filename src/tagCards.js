/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 110,
    maxHeight: 50
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
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
    fontSize: 12,
    overflow: 'auto',
    color: "black",
    
  },
  addIcon: {
    height: 10,
    width: 10,
  },
}));


function saveTag(tagName) {
  let tagArray = [];
  chrome.storage.local.get(['tags'], function(result){
    var tags = result.tags;
    // if (typeof tags === "undefined") {
    //   tagArray.push(tagName);
    //   chrome.storage.local.set({ tags: tagArray }, function () {
    //     console.log('Value is set to ' + tagArray);
    //   });
    // } else {
      tagArray = [...tags];
      tagArray.push(tagName)
      chrome.storage.local.set({ tags: tagArray }, function () {
        tagArray.map(e => console.log(e))
      });
    // }
  })
}



export default function TagCards(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.controls}>
          <Typography className={classes.title} color="textSecondary">
            {props.tagName}
            {/* Pass in props here */}
          </Typography>
          <IconButton aria-label="play/pause" onClick={() => saveTag(props.tagName)}>
            <AddIcon className={classes.addIcon} />
          </IconButton>

        </div>
      </div>

    </Card>
  );
}