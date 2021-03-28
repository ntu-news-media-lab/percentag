/*global chrome*/
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

function removeTag(tagName){
    let tempArray = [];
   
    chrome.storage.local.get(['tags'], function (result) {
        // console.log("retrieved tags is" + result.tags);
        tempArray = result.tags;
       
        tempArray = tempArray.filter(item => item !== tagName);
        console.log("test" + tempArray)
        chrome.storage.local.set({ tags: tempArray }, function () {
            console.log("saved: " + tempArray);
        })
    });
    window.location.reload(true);
  }

export default function TaggedCards(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root} onDoubleClick={()=>{ removeTag(props.tagName)}}>
            
                <Typography className={classes.title} color="textSecondary">
                    {props.tagName}
                    {/* Pass in props here */}
                </Typography>

        </Card>
    );
}