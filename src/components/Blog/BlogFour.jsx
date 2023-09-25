import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';

const BlogsFourPage = () => {
    return (
        <Helmet>
            <title>Future of SEO with AI</title>
            <meta name="description" content="Dive into the exciting world where AI meets SEO. Discover how AI tools are shaping the future of SEO with unparalleled insights and efficiency." />
            <meta name="keywords" content="SEO insights, SEO efficiency, AI meets SEO, Exciting world of AI and SEO, Shaping SEO with AI, Unparalleled SEO insights" />

            <link rel="canonical" href="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Future of SEO with AI"
            />
            <meta
                property="og:description"
                content="Dive into the exciting world where AI meets SEO. Discover how AI tools are shaping the future of SEO with unparalleled insights and efficiency."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/blog/the-future-of-seo-with-ai-a-visionary-perspective" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Future of SEO with AI"
            />
            <meta
                name="twitter:description"
                content="Dive into the exciting world where AI meets SEO. Discover how AI tools are shaping the future of SEO with unparalleled insights and efficiency."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};


const BlogFour = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const url = 'https://rebel-design-solutions-default-rtdb.firebaseio.com/blogs.json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data['-NfCDXmMTzKW8lJUwGGO']) {
                    const blogData = data['-NfCDXmMTzKW8lJUwGGO'];
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
                    <BlogsFourPage />
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
export default BlogFour