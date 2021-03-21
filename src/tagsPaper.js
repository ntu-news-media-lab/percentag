import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TaggedCards from './taggedCards';




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
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto'
  },
  fixedHeight: {
    height: 240,
  },
}));



export default function TagsPaper(props) {
  let showTagCards;
  const classes = useStyles();
  if (props.savedTagArray[0] === "") {
    showTagCards = <p>
      None Yet. Start Following Tags!
    </p>
  }
  else{
    showTagCards =  props.savedTagArray.map((e)=>{
                  
      return <div key={e} style={{marginLeft: 5, marginBottom: 2}} ><TaggedCards tagName={e}/></div>
    })
  }


  return (
    <div className={classes.root}>
      

        <Container maxWidth="lg" className={classes.container}>
          

            {/* From this article */}
            <Grid item xs={11}>
              <Paper className={classes.paper}>
                {showTagCards}
              </Paper>
            </Grid>
          

        </Container>
      
    </div>
  );
}