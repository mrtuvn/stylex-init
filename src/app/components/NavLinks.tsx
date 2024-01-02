'use client'
import Image from 'next/image'
import Link from 'next/link'
import {globalTokens as $} from '../../styles/token.stylex'
import { usePathname } from 'next/navigation';
import * as stylex from '@stylexjs/stylex';
import categoryData from '../../data/categories.json'

export default function NavLinks(){
    const categories = [...categoryData];
    const pathname = usePathname();

    return(
        <>
        <div {...stylex.props(s.navWrap)}>
            <nav {...stylex.props(s.nav)}>
                {categories.map((category) => (
                    <li key={category.categoryId} {...stylex.props(s.navItem)}>
                        <Link href={category.url} {...stylex.props(s.navItemLink)}>{category.name}</Link>
                    </li>
                ))}
            </nav>
        </div>
        </>
    )
}

const s = stylex.create({
    navWrap: {
        maxWidth: $.maxWidth,
        marginInline: 'auto'
    },
    nav: {
        display: 'inline-flex',
        gap: '10px',
        textAlign: 'left',
    },
    navItem: {
        listStyle: 'none'
    },
    navItemLink: {
        textDecoration: 'none',
        textTransform: 'uppercase'
    }
})