import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RecommendCards from './recommendCards';


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

export default function RecomPaper(props) {
  let showRecommend;
  const classes = useStyles();
  if (props.recommendation[0].title === "") {
    showRecommend = <i>
     Start Following Tags To View Articles Curated For You.
    </i>
  }
  else{
    showRecommend = <br/>
  }
 

  return (
    <div className={classes.root}>
      
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          
            {/* From this article */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                  {showRecommend}
                  {props.recommendation.map((e)=>{
                  
                  return <div key={e.title} ><RecommendCards recoCardTitle={e.title} recoCardImg={e.img} recoCardDate={e.date} recoCardMatch={e.match}/> <br/></div>
                })}
                  
              </Paper>
            </Grid>
          </Grid>
         
        </Container>
    </div>
  );
}