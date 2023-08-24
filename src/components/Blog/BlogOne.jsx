import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';

const BlogsOnePage = () => {
    return (
        <Helmet>
            <title>Demystifying SEO Ranking Factors: Defining Digital Success</title>
            <meta name="description" content="Explore SEO USA and unravel the elements of digital success. Dive into SEO ranking factors with a trusted SEO USA company offering top-notch SEO services in USA." />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing" />

            <link rel="canonical" href="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Demystifying SEO Ranking Factors: Defining Digital Success"
            />
            <meta
                property="og:description"
                content="Explore SEO USA and unravel the elements of digital success. Dive into SEO ranking factors with a trusted SEO USA company offering top-notch SEO services in USA."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/blog/demystifying-seo-ranking-factors-a-deep-dive-into-the-elements-that-define-your-digital-success" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Demystifying SEO Ranking Factors: Defining Digital Success"
            />
            <meta
                name="twitter:description"
                content="Explore SEO USA and unravel the elements of digital success. Dive into SEO ranking factors with a trusted SEO USA company offering top-notch SEO services in USA."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};


const BlogOne = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const url = 'https://rebel-design-solutions-default-rtdb.firebaseio.com/blogs.json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data['-NcZODahXq6m73Vb5_C1']) {
                    const blogData = data['-NcZODahXq6m73Vb5_C1'];
                    setBlogData(blogData);
                } else {
                    console.log('Blog data with the specified ID not found.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            {blogData && (
                <>
                    <BlogsOnePage />
                    <div className="contect-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className='text-center pt-5 mt-5'>
                                        <h1 className='fs-2 fw-bold my-5'>
                                            {blogData.title}
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <div className="shape-divider"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 my-4 blog-content">
                                <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}
export default BlogOne