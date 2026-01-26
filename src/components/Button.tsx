import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'primary' | 'secondary' | 'ghost';
    disabled?: boolean;
    className?: string;
}

export default function Button({ children,
    onClick,
    type = 'primary',
    disabled = false,
}: ButtonProps) {
    let style = 'inline-flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer shadow-[0_8px_24px_rgba(15,14,19,0.18)] transition hover:translate-y-px hover:shadow-[0_12px_32px_rgba(15,14,19,0.22)] '
    if (type === 'primary') {
        style += 'bg-tangerine hover:bg-golden text-white'
    }
    else if (type === 'secondary') {
        style += 'bg-gray-900 hover:bg-gray-800 text-white'
    }
    else {
        style += '';
    }
    return (
        <button className={style} onClick={onClick} disabled={disabled}>{children}</button>
    )
}
