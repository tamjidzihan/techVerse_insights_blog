// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, PaletteMode, ThemeProvider } from '@mui/material/styles';
// import * as React from 'react';
// import { Outlet } from 'react-router-dom';
// import AppAppBar from '../components/AppAppBar';
// import Footer from '../components/Footer';
// import getBlogTheme from '../theme/getBlogTheme';

// const Layout = () => {
//     const [mode, setMode] = React.useState<PaletteMode>('light');

//     React.useEffect(() => {
//         // Check if there is a preferred mode in localStorage
//         const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
//         if (savedMode) {
//             setMode(savedMode);
//         } else {
//             // If no preference is found, it uses system preference
//             const systemPrefersDark = window.matchMedia(
//                 '(prefers-color-scheme: dark)',
//             ).matches;
//             setMode(systemPrefersDark ? 'dark' : 'light');
//         }
//     }, []);

//     const toggleColorMode = () => {
//         const newMode = mode === 'dark' ? 'light' : 'dark';
//         setMode(newMode);
//         localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
//     };


//     return (
//         <>
//             <ThemeProvider theme={createTheme(getBlogTheme(mode))}>
//                 <CssBaseline enableColorScheme />

//                 <AppAppBar
//                     mode={mode}
//                     toggleColorMode={toggleColorMode}
//                 />

//                 <Container
//                     maxWidth="lg"
//                     component="main"
//                     sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
//                 >

//                     <Outlet />

//                 </Container>

//                 <Footer />

//             </ThemeProvider>
//         </>

//     );
// }

// export default Layout


import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import getBlogTheme from '../theme/getBlogTheme';
import { useThemeContext } from '../context/ThemeContext'; // Import the custom hook

const Layout = () => {
    const { mode, toggleColorMode } = useThemeContext(); // Access theme mode and toggle function

    return (
        <ThemeProvider theme={getBlogTheme(mode)}>
            <CssBaseline enableColorScheme />

            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <Outlet />
            </Container>

            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
