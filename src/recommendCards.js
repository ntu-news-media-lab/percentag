import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: "black",
        cursor: "pointer"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    date: {
        fontSize: 10,
        overflow: 'auto'
    },
    cover: {
        width: 40,
        minWidth: "50px",
        height: "auto"
    },
    matchGreen: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        color: "green",
        fontSize: 11
    },
    matchOrange: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        color: "orange",
        fontSize: 11
    },
    matchRed: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        color: "red",
        fontSize: 11
    },
    title: {
        fontSize: 14,
        overflow: 'auto'
    }
}));

export default function RecommendCards(props) {
    const classes = useStyles();

    let matchColor;
    if (props.recoCardMatch < 50) {
        matchColor = <Typography className={classes.matchRed} color="inherit">
            {props.recoCardMatch + "% match"}
        </Typography>
    }
    else if (props.recoCardMatch > 75) {
        matchColor = <Typography className={classes.matchGreen} color="inherit">
            {props.recoCardMatch + "% match"}
        </Typography>
    } else {
        matchColor = <Typography className={classes.matchOrange} color="inherit">
            {props.recoCardMatch + "% match"}
        </Typography>
    }

    return (
        <Card className={classes.root}  onClick={() => { window.open(props.recoCardUrl); }} >
                <CardMedia
                    className={classes.cover}
                    image={props.recoCardImg}
                />
                <div className={classes.details} >
                    <CardContent className={classes.content}>
                        <Typography className={classes.title} >
                            {props.recoCardTitle}
                        </Typography>
                        <Typography className={classes.date} color="textSecondary">
                            {props.recoCardDate}
                        </Typography>
                    </CardContent>
                    {matchColor}
                </div>
             
        </Card>
    );
}