'use client'

import Head from 'next/head';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
    spec: Record<string,any>,
}

const Swagger = ({spec}:Props) => {
    return (
    <div>
    <Head>
    <title>BrowserStack Demo API</title>
    <meta name="description" content="BrowserStack Demo API Swagger" />
    <link rel="icon" href="/favicon.svg" />
    </Head>
    <SwaggerUI spec={spec} />
    </div>
    );
    };
export default Swagger