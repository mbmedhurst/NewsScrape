import React from 'react'
import '../../Home/Hero/Hero.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }))
  
  export default function Hero2() {
    const classes = useStyles();
  
    return (
      <div>
        <Paper id='heroImage' className={classes.root} elevation='2'>
          <Typography id='heroText1' variant="h2" component="h3">
              Saved Articles
              <p id='subHero' style={{fontSize: '25px'}}>Your Saved Articles</p>
          </Typography>
        </Paper>
      </div>
    )
  }