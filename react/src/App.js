import React from 'react'
import './App.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MaskApp from './components/MaskApp'
import Header from './components/header/Header'

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    )

    const paperStyle = { height: '100vh', backgroundColor: theme.palette.background.default }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Paper style={paperStyle}>
                    <Header />
                    <MaskApp />
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default App
