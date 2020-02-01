import React from 'react';

export const HamburgerIcon = ({ fill, size }) => {
    const iconFill = fill || '#fff';
    const iconSize = size || '32';

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 512 512" 
            aria-labelledby="title"
        >
            <title id="title">Menu Icon</title>
            <rect x="32" y="96" width="448" height="64" rx="14.11" fill={iconFill} />
            <rect x="32" y="224" width="448" height="64" rx="14.11" fill={iconFill} />
            <rect x="32" y="352" width="448" height="64" rx="14.11" fill={iconFill} />
        </svg>
    );
}

export const DumbbellIcon = ({ fill, size }) => {
    const iconFill = fill || '#fff';
    const iconSize = size || '32';

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 512 512" 
            aria-labelledby="title"
        >
            <title id="title">Dumbbell Icon</title>
            <path d="M80 160H48a16 16 0 0 0-16 16v48H0v64h32v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16z" fill={iconFill}/>
            <rect x="-16" y="224" width="320" height="64" rx="16" transform="rotate(90 144 256)" fill={iconFill}/>
            <rect x="208" y="224" width="320" height="64" rx="16" transform="rotate(90 368 256)" fill={iconFill}/>
            <path d="M480 224v-48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48h32v-64zM192 224h128v64H192z" fill={iconFill}/>
        </svg>
    );
}

export const DashboardIcon = ({ fill, size }) => {
    const iconFill = fill || '#fff';
    const iconSize = size || '32';

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 512 512" 
            aria-labelledby="title"
        >
            <title id="title">Dashboard Icon</title>
            <path fill={iconFill} d="M256 96C132.29 96 32 196.29 32 320a224.23 224.23 0 0 0 9.29 64h429.42a224.23 224.23 0 0 0 9.29-64c0-123.71-100.29-224-224-224zm-9 48a9 9 0 0 1 18 0v32a9 9 0 0 1-18 0zM112 329H80a9 9 0 0 1 0-18h32a9 9 0 0 1 0 18zm27.09-76.5a9 9 0 0 1-12.3 3.29l-27.71-16a9 9 0 0 1 4.5-16.79 9 9 0 0 1 4.5 1.21l27.71 16a9 9 0 0 1 3.3 12.29zm49.41-49.41a9 9 0 0 1-12.29-3.3l-16-27.71a9 9 0 0 1 7.79-13.5 9 9 0 0 1 7.79 4.5l16 27.71a9 9 0 0 1-3.29 12.3zm149.9 45.49c-.16.2-.33.4-.51.59l-54.68 63.62A28 28 0 1 1 263 292.55l63.62-54.69a7.6 7.6 0 0 1 .61-.52l2.31-2 .56.58a8 8 0 0 1 2-.26 8 8 0 0 1 7.73 10.05l.57.55zm13.39-76.5l-16 27.71a9 9 0 1 1-15.58-9l16-27.71a9 9 0 0 1 7.79-4.5 9 9 0 0 1 7.79 13.5zM380.71 257a9 9 0 0 1-4.5-16.79l27.71-16a9 9 0 0 1 4.5-1.21 9 9 0 0 1 4.5 16.79l-27.71 16a9 9 0 0 1-4.5 1.21zM432 329h-32a9 9 0 0 1 0-18h32a9 9 0 0 1 0 18z"/>
        </svg>
    );
}

export const GraphIcon = ({ fill, size }) => {
    const iconFill = fill || '#fff';
    const iconSize = size || '32';

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 512 512" 
            aria-labelledby="title"
        >
            <title id="title">Graph Icon</title>
            <path d="M448 468H64a20 20 0 0 1-20-20V64a20 20 0 0 1 40 0v364h364a20 20 0 0 1 0 40z" fill={iconFill} />
  <path d="M416 164c-20.59-.53-34.75 23.2-24.77 41l-65.65 87.53a28.12 28.12 0 0 0-15 1.07l-28.21-28.2c12.7-49.19-65.45-49.16-52.74 0l-92.23 92.23C119.72 351 99.63 365 100 384c1.9 43.29 67.14 31.95 54.37-9.4l92.23-92.23a28.08 28.08 0 0 0 18.8 0l28.23 28.23C287 328.28 301 348.36 320 348c20.59.53 34.75-23.2 24.77-41l65.65-87.53c39.95 6.77 46.07-54.18 5.58-55.47zM126.28 395.86c-14.42-2-13-23.89 1.72-23.86 16.87.24 14.89 26.09-1.72 23.86zM244 256c.1-15.7 23.91-15.69 24 0-.07 15.69-23.93 15.7-24 0zm75.19 76c-15.09-1-14.42-23.95.81-24 16.26.15 15.32 25-.81 24zM428 192.27c-.35 15.43-23.94 15.32-24-.27.13-15.9 24.27-15.54 24 .27z" fill={iconFill} />
        </svg>
    );
}
