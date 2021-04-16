import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help'
import Typography from '@material-ui/core/Typography'
import { nanoid } from 'nanoid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import faqQuestions from './faqQuestions'

const useStyles = makeStyles((theme) => ({
    helpButton: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
    },
    faqText: {
        color: theme.palette.text.primary,
    },
    dialogHeader: {
        color: theme.palette.text.primary,
        padding: '12px 0',
        borderBottom: '1px solid darkgrey',
    },
    dialogButton: {
        padding: theme.spacing(2),
    },
}))

export default function FaqDialog() {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const descriptionElementRef = React.useRef(null)
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef
            if (descriptionElement !== null) {
                descriptionElement.focus()
            }
        }
    }, [open])

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.helpButton}
                startIcon={<HelpIcon />}
                onClick={handleOpen}
            >
                FAQ
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="md"
            >
                <DialogTitle id="scroll-dialog-title">
                    <Typography
                        variant="h3"
                        color="inherit"
                        noWrap
                        className={classes.dialogHeader}
                    >
                        FAQ
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {faqQuestions.map((q) => (
                            <>
                                <br />
                                <Typography variant="h5" className={classes.faqText}>
                                    {q.question}
                                </Typography>
                                {q.answer.map((line) => (
                                    <Typography
                                        key={nanoid()}
                                        variant="body1"
                                        className={classes.faqText}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogButton}>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
