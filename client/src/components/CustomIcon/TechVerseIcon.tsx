import { Box, Typography } from '@mui/material';
import logo from '../../assets/tvi_logo.png';

export default function TechVerseIcon() {
    return (
        <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
            <Box
                component="img"
                sx={{
                    height: 33,// margin-right for spacing
                }}
                alt="logo"
                src={logo}
            />
            <Typography variant="inherit" color='primary' sx={{ fontWeight: 'bold' }}>
                TechVerse Insights
            </Typography>
        </Box>
    );
}
