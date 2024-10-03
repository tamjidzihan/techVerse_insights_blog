import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { PaletteMode } from '@mui/material/styles';

interface ToggleColorModeProps extends IconButtonProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

export default function ToggleColorMode({
    mode,
    toggleColorMode,
    ...props
}: ToggleColorModeProps) {
    return (
        <IconButton
            onClick={toggleColorMode}
            color="primary"
            size="small"
            aria-label="Theme toggle button"
            {...props}
        >
            {mode === 'dark' ? (
                <WbSunnyRoundedIcon fontSize="small" />
            ) : (
                <ModeNightRoundedIcon fontSize="small" />
            )}
        </IconButton>
    );
}