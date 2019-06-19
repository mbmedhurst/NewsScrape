import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Article from '../../Utils/articles.js'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))


export default function ArtComp({ wapoArr, title, summary, url, componentDidMount, handleSaveArticle }) {
  const classes = useStyles()
  return (
    wapoArr.map(({ _id, title, summary, url }) => {
      return <Paper id='article' style={{ marginTop: '20px', marginLeft: '5%', marginRight: '5%', backgroundColor: '#749393', color: 'white' }} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography id='title' variant="h5" component="h3">
              <a href={{ url }} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </Typography>
            <Typography id='summary' component="p">
              {summary}
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ margin: 'auto', textAlign: 'center' }}>
            <Button id='saveArticle' style={{ backgroundColor: '#80724b', color: 'white' }} onClick={() => handleSaveArticle()}>
              Save Article
            </Button>
          </Grid>
        </Grid>
      </Paper>
    })
  )
}