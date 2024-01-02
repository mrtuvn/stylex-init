"use client";
import Image from 'next/image'
import {colors, spacing, typograph} from '../../styles/token.stylex'
import * as stylex from '@stylexjs/stylex';
import NavLinks from '@/app/components/NavLinks';

export default function Header() {
    return (
        <>
            <div>
                <div {...stylex.props(s.headerContainer)}>
                    <Image src="/logo_anim.svg" width={170} height={30} alt="Header Logo" priority />

                </div>
                <div >
                    <NavLinks/>

                    <div>
                        <button {...stylex.props(s.button)}>This is trick button 1</button>                
                    </div>
                </div>
                
            </div>
        </>
    )
}

const MOBILE = '@media (max-width: 767px)';
const s = stylex.create({
    headerContainer: {
        paddingInline: 32,
        paddingBlock: 12,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: {
            default: colors.buttonColorBackground,
            [MOBILE]: 'blue'
        } 
    }
})