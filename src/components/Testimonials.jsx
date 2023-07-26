import React from 'react'
import { Helmet } from "react-helmet";


const Testimonialspage = () => {
    return (
        <Helmet>
            <title>Client Testimonials | Rebel Design Solution Reviews</title>
            <meta name="description" content="Read client testimonials and reviews for Rebel Design Solution. Discover how our creative solutions have transformed businesses and captivated audiences." />
            <meta name="keywords" content="Testimonials, Client Reviews, Customer Feedback" />

            <link rel="canonical" href="https://rebeldesignsolution.com/testimonials" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/testimonials"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/testimonials"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/testimonials"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/testimonials"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Client Testimonials | Rebel Design Solution Reviews"
            />
            <meta
                property="og:description"
                content="Read client testimonials and reviews for Rebel Design Solution. Discover how our creative solutions have transformed businesses and captivated audiences."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/testimonials" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/testimonials" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Client Testimonials | Rebel Design Solution Reviews"
            />
            <meta
                name="twitter:description"
                content="Read client testimonials and reviews for Rebel Design Solution. Discover how our creative solutions have transformed businesses and captivated audiences."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};
const Testimonials = () => {
    return (
        <div>
            <Testimonialspage />
            Testimonials
        </div>
    )
}

export default Testimonials