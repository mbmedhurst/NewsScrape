import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Article from '../../Utils/articles';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

function Comment(_id, comment) {
    const [open, setOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = event => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    const handleAddComment = event => {
        console.log('who am I?')
        // Article.putOne(_id, Article)
        // this.setState({...newArt._id})
        // console.log(newArt._id)
        handleClose()
      }

    return (
        <div>
            <Button id='openModal' style={{ backgroundColor: '#80724b', color: 'white' }} onClick={handleOpen}>Add a Comment</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Add a comment"
                        style={{ width: '100%', marginLeft: '0%', marginRight: '0%' }}
                        multiline
                        rows="4"
                        defaultValue=""
                        className={classes.textField}
                        variant="outlined"
                    />
                    <Button
                        id='addComment'
                        variant="contained"
                        style={{marginLeft: '60%'}}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleAddComment()}
                        >
                        Add Comment
                    </Button>
                    <Modal />
                </div>
            </Modal>
        </div>
    );
}

export default Comment