
import React from 'react';

interface PacmanGhostProps {
  className?: string;
}

const PacmanGhost: React.FC<PacmanGhostProps> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 14"
    className={`inline-block fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7,0C4.24,0,2,2.24,2,5v5h1.5v-1.5h1V10h1V8.5h1V10h1V8.5h1V10h1.5V5C12,2.24,9.76,0,7,0z M4,6.5 C3.45,6.5,3,6.05,3,5.5S3.45,4.5,4,4.5S5,4.95,5,5.5S4.55,6.5,4,6.5z M10,6.5C9.45,6.5,9,6.05,9,5.5S9.45,4.5,10,4.5 s1,0.45,1,1S10.55,6.5,10,6.5z"/>
    <path d="M2,11.5v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1.5H2z"/>
  </svg>
);


export default PacmanGhost;
