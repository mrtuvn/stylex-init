'use client'

import {
    globalTokens as $,
    spacing
} from '../../styles/token.stylex';
import stylex from "@stylexjs/stylex";
import { fonts } from "@stylexjs/open-props/lib/fonts.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import Image from 'next/image'
import {useState} from 'react';




export default function ReactTest () {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <p {...stylex.props(X.test)}>test react</p>
      {/* <button onClick={handleClick}>Click me</button><br/>
      Count: {count} */}
    </>
  )
}

const X = stylex.create({
  test: {
    fontSize: '25px',
    color: colors.red5,
    fontFamily: fonts.sans,
  },
});