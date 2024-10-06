import SvgIcon from '@mui/material/SvgIcon';

export default function TechVerseIcon() {
    return (
        <SvgIcon sx={{ height: 24, width: 160, mr: 3, overflow: 'visible' }}>
            <svg
                width={150}
                height={24}
                viewBox="0 0 150 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Gradient Definitions */}
                <defs>
                    <linearGradient id="techGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF5733" />
                        <stop offset="100%" stopColor="#00D3AB" />
                    </linearGradient>
                    <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#4876EE" />
                        <stop offset="100%" stopColor="#FFC300" />
                    </linearGradient>
                </defs>

                {/* New Tech-Inspired Logo */}
                <circle cx="12" cy="12" r="10" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
                <path
                    d="M12 4C13.65 4 15.17 4.5 16.35 5.4C17.53 6.3 18.26 7.5 18.45 9H5.55C5.74 7.5 6.47 6.3 7.65 5.4C8.83 4.5 10.35 4 12 4Z"
                    stroke="url(#techGradient)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M12 16C10.35 16 8.83 15.5 7.65 14.6C6.47 13.7 5.74 12.5 5.55 11H18.45C18.26 12.5 17.53 13.7 16.35 14.6C15.17 15.5 13.65 16 12 16Z"
                    stroke="url(#techGradient)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <line x1="12" y1="2" x2="12" y2="22" stroke="url(#techGradient)" strokeWidth="1.5" />
                <line x1="2" y1="12" x2="22" y2="12" stroke="url(#techGradient)" strokeWidth="1.5" />
                {/* TechVerse Insights Text */}
                <text fill='url(#techGradient)' x="28" y="18" fontSize="16" fontWeight="bold">
                    TechVerse.in
                </text>
            </svg>
        </SvgIcon>
    );
}



