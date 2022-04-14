import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto"> {children}</div>
    </div>
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"></div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
)

export default Layout
