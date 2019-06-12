import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'darkBlue'}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} style={{flexGrow: '0.05'}}>
            Mongo Scraper
          </Typography>
          <Button style={{marginLeft: '15px'}} color="inherit">Home</Button>
          <Button style={{marginLeft: '15px'}} color="inherit">Saved Articles</Button>
          <Button style={{marginLeft: '15px', backgroundColor: 'red'}} color="inherit">Scrape New Articles</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
