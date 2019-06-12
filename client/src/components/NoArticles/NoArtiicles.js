import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function NoArticles() {
  const classes = useStyles();

  return (
    <div>
      <Paper id='noArticles' style={{marginTop: '20px', marginLeft: '5%', marginRight: '5%', backgroundColor: '#eda725', color: 'white'}} className={classes.root}>
        <Typography style={{textAlign: 'center'}} variant="h5" component="h3">
          Uh Oh. Looks like we don't have any new articles.
        </Typography>
      </Paper>
    </div>
  );
}
