import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

type Props = Readonly<{
  title: string;
  body: string;
  href: string;
}>;

export default function Card({ ...props }: Props) {
  return (
    <Link
      href={props.href}
      {...stylex.props(s.container)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 {...stylex.props(s.h2)}>
        {props.title} <span {...stylex.props(s.span)}>→</span>
      </h2>
      <p {...stylex.props(s.p)}>{props.body}</p>
    </Link>
  );
}

const MOBILE = '@media (max-width: 700px)';
const REDUCE_MOTION = '@media (prefers-reduced-motion: reduce)';
const DARK = '@media (prefers-color-scheme: dark)';

const s = stylex.create({
  container: {
    display: {
      default: 'flex',
      [MOBILE]: 'block',
    },
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderRadius: 4,
    backgroundColor: {
      default: 'rgba(172,175,176,0.1)',
      [DARK]: 'rgba(108,108,108,0.1)',
    },
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: {
      default: 'rgba(180,185,188,0.1)',
      [DARK]: 'rgba(100,100,100,0.1)',
    },
    fontFamily: 'system-ui, sans-serif',
    padding: 4,
    textAlign: 'center',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: {
      default: '1em',
      [MOBILE]: '0.5em',
    },
  },
  span: {
    display: 'inline-block',
    transitionProperty: 'transform',
    transitionDuration: {
      default: '200ms',
      [REDUCE_MOTION]: '0s',
    },
  },
  p: {
    margin: 0,
    opacity: 0.6,
    fontSize: '1rem',
    textWrap: 'balance',
    lineHeight: 1.5,
    maxWidth: '30ch',
  },
});
