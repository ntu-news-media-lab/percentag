/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, 
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


function getChromeStoragefunction() {
  chrome.storage.sync.get(['Tag'], function (result) {
    console.log('Value currently is ' + result.key);
  });
}

export default function TagsPaper() {
  const classes = useStyles();
  // let showSavedTags = getChromeStoragefunction();
  
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          
            {/* From this article */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <p>
                None Yet. Start Following Tags!
                </p>
              </Paper>
            </Grid>
          </Grid>
         
        </Container>
      </main>
    </div>
  );
}