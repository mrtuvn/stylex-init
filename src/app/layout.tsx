import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from "@/ui/common/Header"
import Footer from "@/ui/common/Footer"
//import Card from "@/app/components/Card"
import Newsletter from "@/ui/common/Newsletter"
import * as stylex from '@stylexjs/stylex';
import ReactTest from "@/app/components/ReactTest"


export const metadata: Metadata = {
  title: 'StyleX + Next',
  description: 'StyleX with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body {...stylex.props(s.body)}>
        <Header />
        <main {...stylex.props(s.main)}>
          <div id="demo"></div>
          <ReactTest/>
          {children}
          {/* <Card title="this is title" body="body content with test" href="https://google.com/search"/> */}
          <Newsletter />
        </main>
        <Footer />
      </body>
    </html>
  )
}

const MEDIA_MOBILE = '@media (max-width: 700px)';

const s = stylex.create({
  body: {
    fontSize: '16px',
    fontFamily: 'system-ui, sans-serif',
  },
  nav: {
    display: 'flex',
    width: '100%',
    maxWidth: 1240,
    marginInline: 'auto',
    gap: 4,
    padding: 32,
  },
  spacer: {
    flexGrow: 1,
  },
  main: {
    paddingInline: 32,
    minHeight: '100vh',
    width: '100%',
    maxWidth: 1240,
    marginInline: 'auto',
  },
});
