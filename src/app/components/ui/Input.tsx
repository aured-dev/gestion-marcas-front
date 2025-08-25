"use client";

import React from "react";

type InputProps = {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full border p-2 rounded mb-3 ${className}`}
        />
    );
}
