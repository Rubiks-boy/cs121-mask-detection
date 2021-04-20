import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    gitButton: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
    },
    gitButtonSm: {
        marginRight: theme.spacing(-1),
    },
}))

export default function GitButton() {
    const classes = useStyles()
    return (
        <>
            <Hidden xsDown>
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
            </Hidden>

            <Hidden smUp>
                <IconButton
                    aria-label="github link"
                    component="span"
                    className={classes.gitButtonSm}
                    onClick={() =>
                        window.open(
                            'https://github.com/Rubiks-boy/cs121-mask-detection',
                            '_blank',
                            'noopener, noreferrer'
                        )
                    }
                >
                    <GitHubIcon />
                </IconButton>
            </Hidden>
        </>
    )
}
