import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        textAlign: 'left',
    },
    gitButton: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
    },
}))

function GitButton() {
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

export default function Header() {
    const classes = useStyles()

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Fask Mask Detector
                </Typography>
                <GitButton />
            </Toolbar>
        </AppBar>
    )
}
