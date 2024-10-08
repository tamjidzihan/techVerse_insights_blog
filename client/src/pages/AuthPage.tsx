import { createTheme, CssBaseline, PaletteMode } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import getBlogTheme from '../theme/getBlogTheme';
import ToggleColorMode from '../components/ToggleColorMode';

const AuthPage = () => {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    React.useEffect(() => {
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
    };
    return (
        <>
            <ThemeProvider theme={createTheme(getBlogTheme(mode))}>
                <CssBaseline enableColorScheme />
                <ToggleColorMode
                    data-screenshot="toggle-mode"
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                />
                <Outlet />
            </ThemeProvider>
        </>
    )
}

export default AuthPage
