import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';

// Define the type for your context value
interface ThemeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the theme context
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};


interface ThemeProviderContextProps {
    children: React.ReactNode;
    /**
     * This is for the docs site. You can ignore it or remove it.
     */
    disableCustomTheme?: boolean;
    themeComponents?: ThemeOptions['components'];
}

// Create the provider component
export const ThemeProviderContext: React.FC<{ children: React.ReactNode }> = ({
    children,
    disableCustomTheme,
    themeComponents,
}: ThemeProviderContextProps) => {
    const [mode, setMode] = useState<PaletteMode>('light');

    // Check and set initial theme mode from localStorage or system preferences
    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode);
    };

    const theme = React.useMemo(() => {
        return disableCustomTheme
            ? {}
            : createTheme({
                // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template',
                },
                colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
                typography,
                shadows,
                shape,
                components: {
                    ...inputsCustomizations,
                    ...dataDisplayCustomizations,
                    ...feedbackCustomizations,
                    ...navigationCustomizations,
                    ...surfacesCustomizations,
                    ...themeComponents,
                },
            });
    }, [disableCustomTheme, themeComponents]);
    if (disableCustomTheme) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
