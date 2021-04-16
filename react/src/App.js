import React from 'react'
import './App.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MaskApp from './components/MaskApp'
import Header from './components/Header'

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

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Paper style={{ height: '100vh' }}>
                    <Header />
                    <MaskApp />
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default App
