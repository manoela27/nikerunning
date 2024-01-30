import React from 'react';
interface ArrowleftProps{
    className?:string;
    width?:number;
    height?:number;
}

const Arrowleft: React.FC<ArrowleftProps> = ({ className, width , height}) =>(
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'> 
        <mask id="mask0_669_2069"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_669_2069)">
        <path d="M11.4 12.0008L15.3 8.10078C15.4833 7.91745 15.575 7.68411 15.575 7.40078C15.575 7.11745 15.4833 6.88411 15.3 6.70078C15.1166 6.51745 14.8833 6.42578 14.6 6.42578C14.3166 6.42578 14.0833 6.51745 13.9 6.70078L9.29995 11.3008C9.19995 11.4008 9.12912 11.5091 9.08745 11.6258C9.04578 11.7424 9.02495 11.8674 9.02495 12.0008C9.02495 12.1341 9.04578 12.2591 9.08745 12.3758C9.12912 12.4924 9.19995 12.6008 9.29995 12.7008L13.9 17.3008C14.0833 17.4841 14.3166 17.5758 14.6 17.5758C14.8833 17.5758 15.1166 17.4841 15.3 17.3008C15.4833 17.1174 15.575 16.8841 15.575 16.6008C15.575 16.3174 15.4833 16.0841 15.3 15.9008L11.4 12.0008Z" fill="white"/>
        </g>
    </svg>

);
export default Arrowleft;