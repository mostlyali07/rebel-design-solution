import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';

const BlogsOnePage = () => {
    return (
        <Helmet>
            <title>Top SEO Blogs 2023 | Stay Informed on Search Engine Optimization</title>
            <meta name="description" content="Stay up-to-date with the latest in search engine optimization (SEO). Explore the top SEO blogs to follow in 2023 for valuable insights." />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing, Search Engine Optimization" />

            <link rel="canonical" href="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Top SEO Blogs 2023 | Stay Informed on Search Engine Optimization"
            />
            <meta
                property="og:description"
                content="Stay up-to-date with the latest in search engine optimization (SEO). Explore the top SEO blogs to follow in 2023 for valuable insights."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/blog/top-seo-blogs-to-follow-in-2023" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Top SEO Blogs 2023 | Stay Informed on Search Engine Optimization"
            />
            <meta
                name="twitter:description"
                content="Stay up-to-date with the latest in search engine optimization (SEO). Explore the top SEO blogs to follow in 2023 for valuable insights."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};


const BlogThree = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const url = 'https://rebel-design-solutions-default-rtdb.firebaseio.com/blogs.json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data['-NeJLhDaU8f09apmyACM']) {
                    const blogData = data['-NeJLhDaU8f09apmyACM'];
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
export default BlogThree