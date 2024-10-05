import SvgIcon from '@mui/material/SvgIcon';

export default function TechVerseIcon() {
    return (
        <SvgIcon sx={{ height: 21, width: 120, mr: 2 }}>
            <svg
                width={120}
                height={24}
                viewBox="0 0 120 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Globe Icon */}
                <circle cx="12" cy="12" r="10" stroke="#4876EE" strokeWidth="2" fill="none" />
                <path
                    d="M12 2C15.866 2 19 5.134 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2Z"
                    stroke="#4876EE"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M2 12C2 15.866 5.13401 19 9 19C12.866 19 16 15.866 16 12"
                    stroke="#4876EE"
                    strokeWidth="1"
                    fill="none"
                />

                {/* TechVerse Text */}
                <text x="28" y="12" fill="#4876EE" fontSize="12" fontWeight="bold" fontFamily="Arial">
                    TechVerse Insights
                </text>
            </svg>
        </SvgIcon>
    );
}
