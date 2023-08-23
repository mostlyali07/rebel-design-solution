import { Helmet } from 'react-helmet';


const BlogsPage = () => {
    return (
        <Helmet>
            <title>Revamp Your Space with Rebel Design: Creative Solutions for Modern Living</title>
            <meta name="description" content="Discover innovative design ideas and solutions for your modern living spaces with Rebel Design Solution. Transform your home today!" />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing" />

            <link rel="canonical" href="https://rebeldesignsolution.com/blogs" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blogs"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blogs"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/blogs"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/blogs"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Revamp Your Space with Rebel Design: Creative Solutions for Modern Living"
            />
            <meta
                property="og:description"
                content="Discover innovative design ideas and solutions for your modern living spaces with Rebel Design Solution. Transform your home today!"
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/blogs" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/blogs" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Revamp Your Space with Rebel Design: Creative Solutions for Modern Living"
            />
            <meta
                name="twitter:description"
                content="Discover innovative design ideas and solutions for your modern living spaces with Rebel Design Solution. Transform your home today!"
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};


const Blogs = () => {
    return (
        <>
            <BlogsPage />
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold'>
                                    Our <span style={{ color: '#222222' }}>Blogs</span>
                                </h1>
                                <p>
                                    Discover innovative design ideas and solutions for your modern living spaces with Rebel Design Solution. Transform your home today!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
        </>
    )
}

export default Blogs