import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import { CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 110,
        maxHeight: 50,
        padding: theme.spacing(1),
        background: "#0D3A71"
        
    },
    content: {
        flex: '1 0 auto',
    },
    title: {
        fontSize: 12,
        overflow: 'auto',
        color: "white",
        fontWeight: "600"
    },
  
}));

export default function TaggedCards(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            
                <Typography className={classes.title} color="textSecondary">
                    {props.tagName}
                    {/* Pass in props here */}
                </Typography>

        </Card>
    );
}