import React from 'react';
interface IconinformativeProps{
    className?:string;
    width?:number;
    height?:number;
}

const Iconinformative: React.FC<IconinformativeProps> = ({ className, width , height}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 4 16" xmlns="http://www.w3.org/2000/svg" fill='none'> 
        <path d="M0.73291 0.291992H3.24091V2.66799H0.73291V0.291992ZM0.73291 4.62599H3.24091V16H0.73291V4.62599Z" fill="black"/>
    </svg>
);
export default Iconinformative;