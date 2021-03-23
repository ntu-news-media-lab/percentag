import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import TagCards from './tagCards';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.dealstreetasia.com">
        NTU and Deal Street Asia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    minWidth:"103%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto'
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function CurrentTagPaper(props) {
  const classes = useStyles();
 
 

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
            {/* From this article */}
            <Grid item xs={11}>
              <Paper className={classes.paper}>
              {/* generate all tags cards here */}
              
                {props.tagArray.map((e)=>{
                  
                  return <div key={e} style={{padding: 5}} ><TagCards tagName={e}/></div>
                })}
              
              </Paper>
            </Grid>
          
          <Box pt={4}>
            <Copyright />
          </Box>
        
        </Container>
    </div>
  );
}