import React from 'react'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    gitButton: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
    },
}))

export default function GitButton() {
    const classes = useStyles()
    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.gitButton}
            startIcon={<GitHubIcon />}
            onClick={() =>
                window.open(
                    'https://github.com/Rubiks-boy/cs121-mask-detection',
                    '_blank',
                    'noopener, noreferrer'
                )
            }
        >
            GitHub
        </Button>
    )
}
