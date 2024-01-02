"use client";
import {useState} from 'react'
import Image from 'next/image'
import {globalTokens, colors, spacing} from '../../styles/token.stylex'
import * as stylex from '@stylexjs/stylex';
const bg = '/images/newsletter_bg.jpg';


export default function Newsletter() {

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [form, setForm] = useState({
        email: ""
    })

    const handleChange = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
            alert(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
    }

    return (
        <>
            <div {...stylex.props(s.main)} style={{backgroundImage: `url('${bg}')`}}>
                <div {...stylex.props(s.mainInner)}>
                    <div  {...stylex.props(s.formWrap)}>
                        <p {...stylex.props(s.textMain)}>LETS STAY IN TOUCH.</p>
                        <p {...stylex.props(s.textSub)}>Keep up to date with everything STEDI™</p>
                        <form {...stylex.props(s.form)} onSubmit={handleSubmit}>
                            <input type="email" {...stylex.props(s.input)} onChange={handleChange} placeholder="Enter your email"/>
                            <button {...stylex.props(s.button)} type="submit">Subscribe</button>
                            {!isEmailValid ? <p {...stylex.props(s.danger)}>Please enter a valid email address</p> : null}
                        </form>
                    </div>
                </div>         
            </div>
        </>
    )
}

const MOBILE = '@media (max-width: 767px)';
const s = stylex.create({
    main: {
        width: '100%',
        backgroundPosition: 'bottom right',
        objectFit: 'cover',
        backgroundSize: '64%',
        backgroundRepeat: "no-repeat",
        minHeight: '300px'
    },
    mainInner: {
        padding: {
            default: '40px',
            [MOBILE]: spacing.space3
        }
    },
    formWrap: {
        width: '50%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto'
    },
    textMain: {
        fontSize: 30,
        color: '#fff',
        marginBottom: '0',
        textAlign: 'center'
    },
    textSub: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: '15px'
    },
    form: {
        display: 'grid',
        gap: "12px",
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
    },
    input: {
        fontSize: '17px',
        padding: '1.1em .8em',
        color: "#000",
        backgroundColor: '#fff',
        textAlign: 'left',
        border: 'none',
        borderRadius: "4px",
    },
    danger: {
        color: 'red',
        fontSize: '14px',
        gridColumn: 'span 2'
    },
    button: {
        fontSize: '16px',
        padding: '1.1em .8em',
        border: '1px solid',
        color: colors.white,
        borderColor: "rgb(232, 100, 25)",
        backgroundColor: "rgb(232, 100, 25)",
        borderRadius: "4px"
    }
})