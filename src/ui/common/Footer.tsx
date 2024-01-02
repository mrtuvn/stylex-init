"use client";

import Image from 'next/image'

export default function Footer () {
    return (
        <>
            <Image src="/footer-logo.png" width={170} height={30} alt="Header Logo" priority />
        </>
    )
}