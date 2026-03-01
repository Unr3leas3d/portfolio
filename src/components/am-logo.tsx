import * as React from "react";

export function AmLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* 
        A clean, geometric path representing the intertwined letters A and M.
        Left peak (A), right peak (M in front of right leg of A), middle valley.
      */}
            <path d="M15 85 L40 20 L60 60 L80 20 L85 85" />
            {/* The crossbar of the 'A' */}
            <path d="M25 60 L70 60" />
        </svg>
    );
}
