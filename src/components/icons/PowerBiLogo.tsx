
import { cn } from "@/lib/utils";

const PowerBiLogo = ({ className }: { className?: string }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 256 256"
            className={cn("h-6 w-6", className)}
        >
            <defs>
                <linearGradient id="a" x1="56.2" x2="56.2" y1="256" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fcd116"></stop>
                <stop offset="1" stopColor="#fceb12"></stop>
                </linearGradient>
                <linearGradient id="b" x1="199.7" x2="199.7" y1="256" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f3ca13"></stop>
                <stop offset=".5" stopColor="#f7d912"></stop>
                <stop offset="1" stopColor="#fceb12"></stop>
                </linearGradient>
            </defs>
            <path d="M0 0v256h112.5L0 0z" fill="url(#a)"></path>
            <path d="M112.5 256h143.2l-112-127.7z" fill="url(#b)"></path>
            <path fill="#fceb12" d="M112.5 256L0 0h112.5z"></path>
            <path fill="#252423" d="M112.5 0v170.7L46.9 83z"></path>
            <path fill="#414040" d="M112.5 0v170.7l65.6-87.7z"></path>
        </svg>
    )
}

export default PowerBiLogo;
