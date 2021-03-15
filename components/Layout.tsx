import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'Santos Pierre' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <link rel="icon" href="/logo.png" />
        </Head>
        {children}
    </div>
);

export default Layout;
