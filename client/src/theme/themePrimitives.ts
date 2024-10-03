import { createTheme, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        highlighted: true;
    }
}

// Correctly extending PaletteColor with custom ColorRange
declare module '@mui/material/styles/createPalette' {
    interface ColorRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }

    interface PaletteColor {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
    50: 'hsl(210, 100%, 95%)',
    100: 'hsl(210, 100%, 92%)',
    200: 'hsl(210, 100%, 80%)',
    300: 'hsl(210, 100%, 65%)',
    400: 'hsl(210, 98%, 48%)',
    500: 'hsl(210, 98%, 42%)',
    600: 'hsl(210, 98%, 55%)',
    700: 'hsl(210, 100%, 35%)',
    800: 'hsl(210, 100%, 16%)',
    900: 'hsl(210, 100%, 21%)',
};

// Other color definitions...

export const getDesignTokens = (mode: PaletteMode) => {
    customShadows[1] =
        mode === 'dark'
            ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
            : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

    return {
        palette: {
            mode,
            primary: {
                light: brand[200],
                main: brand[400],
                dark: brand[700],
                contrastText: brand[50],
                ...(mode === 'dark' && {
                    contrastText: brand[50],
                    light: brand[300],
                    main: brand[400],
                    dark: brand[700],
                }),
            },
            // Other palette definitions...
        },
        typography: {
            fontFamily: ['"Inter", "sans-serif"'].join(','),
            h1: {
                fontSize: defaultTheme.typography.pxToRem(48),
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: -0.5,
            },
            // Other typography definitions...
        },
        shadows: customShadows,
    };
};
