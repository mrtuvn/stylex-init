import * as stylex from "@stylexjs/stylex"

const DARK_MODE = '@media (prefers-color-scheme: dark)';
const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

export const globalTokens = stylex.defineVars({
    maxWidth: `${MAX_WIDTH}px`,
    fontMono:
    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
    fontSans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
})

export const typograph = stylex.defineVars({
    fontfamily: {
        default: "system-ui",
        "sans": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        "serif": "serif"
    },
    fontWeight: {
        default: "400",
        regular: "400",
        semibold: "600",
        bold: "900",
        extraBold: "1000"
    },
    lineHeight: {
        default: "1.5"
    },
    fontSynthesis: {
        default: "none"
    },
    textRender: {
        default: "optimizeLegibility"
    },
    fontSmooth: {
        default: "antialiased"
    }
})

export const spacing = stylex.defineVars({
    space1: {
        default: "8px"
    },
    space2: {
        default: "12px"
    },
    space3: {
        default: "16px"
    },
    space4: {
        default: "24px"
    },
    space5: {
        default: "32px"
    },
    space6: {
        default: "48px"
    },
    space7: {
        default: "64px"
    }
});

export const size = stylex.defineVars({
    size1: {
       default: '0.25rem'
    },
    size2: {
        default: '0.5rem'
    },
    size3: {
     default: "0.75rem"
    },
    size4: {
        default: "1rem"
    },
    size5: {
         default: "1.25rem"
    },
    size6: {
        default: "1.5rem"
    },
    size7: {
        default: "1.75rem"
    },
    size8: {
        default: "2rem"
    },
    size9: { 
        default: "2.5rem"
    },
    size10: {
        default: "3rem"
    },
    size11: {
        default: "4rem"
    },
    size12: {
        default: "5rem"
    },
    size13: {
        default: "6rem"
    },
    size14: {
        default: "8rem"
    },
    size15: {
        default: "10rem"
    }
})

export const colors = stylex.defineVars({
    white: {
        default: '#fff'
    },
    black: {
        default: '#000'
    },
    primaryColor: {
        default:  "#000"
    },
    buttonColorBackground: {
        default: "rgb(232, 100, 25)"
    },
    buttonColor: {
        default: '#fff'
    }
})