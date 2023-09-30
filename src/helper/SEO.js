import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contentOfSubtitleSeoForFormData, mainTitleSeoForFormData, subtitleSeoForFormData } from './constants';
export default function SEO({ title, description, name, type, href, image, url }) {
    return (
        <>
            <Helmet>
                { /* Standard metadata tags */}

                <title>{title}</title>
                <meta name='description' content={description} />
                <link rel="canonical" href={href} />
                { /* End standard metadata tags */}
                { /* Facebook tags */}
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url}  alt="test"/>


                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                { /* End Twitter tags */}
            </Helmet>
        </>
    )
}