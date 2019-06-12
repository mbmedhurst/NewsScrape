import React from 'react'
import './Hero.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  
  export default function Hero() {
    const classes = useStyles();
  
    return (
      <div>
        <Paper id='heroImage' className={classes.root} elevation='2'>
          <Typography id='heroText' variant="h2" component="h3">
              Mongo Scraper
          </Typography>
          <Typography component="p">
          </Typography>
        </Paper>
      </div>
    );
  }