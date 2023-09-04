import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';

const BlogsOnePage = () => {
    return (
        <Helmet>
            <title>Key Considerations for Website Development | Expert Insights</title>
            <meta name="description" content="Before diving into web development, learn the crucial factors to create a successful website. Our expert insights guide your website development journey." />
            <meta name="keywords" content="Web Design And Development, Web Design And Development Services, Website Design And Development" />

            <link rel="canonical" href="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Key Considerations for Website Development | Expert Insights"
            />
            <meta
                property="og:description"
                content="Before diving into web development, learn the crucial factors to create a successful website. Our expert insights guide your website development journey."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/blog/things-to-note-before-you-develop-a-website" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Key Considerations for Website Development | Expert Insights"
            />
            <meta
                name="twitter:description"
                content="Before diving into web development, learn the crucial factors to create a successful website. Our expert insights guide your website development journey."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};


const BlogTwo = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const url = 'https://rebel-design-solutions-default-rtdb.firebaseio.com/blogs.json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data['-NdUxSI0Yto1OBHkYXWo']) {
                    const blogData = data['-NdUxSI0Yto1OBHkYXWo'];
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
export default BlogTwo