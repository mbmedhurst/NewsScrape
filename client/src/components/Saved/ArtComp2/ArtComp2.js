import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Comment from '../Comment'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export default function ArtComp2({ _id, savedArts, title, summary, url, comment, componentDidMount, handleDeleteArticle, handleAddComment }) {
  const classes = useStyles()

   return (
    savedArts.map(({ _id, title, summary, url }) => {
      return <Paper id='article' style={{ marginTop: '20px', marginLeft: '5%', marginRight: '5%', backgroundColor: '#749393', color: 'white' }} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography id='title' variant="h5" component="h3">
              <a href={url} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                {title}
              </a>
            </Typography>
            <Typography id='summary' component="p">
              {summary}
            </Typography>
          </Grid>
          <Grid item xs={5} style={{ margin: 'auto', textAlign: 'right' }}>
            <Comment 
            />
            <Button 
              id='deleteArticle' 
              style={{ marginLeft: '15px', backgroundColor: '#837493', color: 'white' }} 
              onClick={() => handleDeleteArticle()}
              >
              Delete From Saved
            </Button>
          </Grid>
        </Grid>
      </Paper>
    })
  )
}