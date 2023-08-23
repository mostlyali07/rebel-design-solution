import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

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

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const blogsRef = ref(database, 'blogs');

        // Listen for changes in the Realtime Database and update 'blogs' state
        const unsubscribe = onValue(blogsRef, (snapshot) => {
            const blogsData = [];
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val(); // Get the data from the snapshot
                const id = childSnapshot.key; // Get the key as the ID

                blogsData.push({ id, ...data });
            });
            setBlogs(blogsData);
        });

        return () => {
            // Unsubscribe when the component unmounts
            unsubscribe();
        };
    }, []);
    const convertHtmlToPlainText = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

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
                                    Discover innovative design ideas and solutions for your modern living spaces with Rebel Design
                                    Solution. Transform your home today!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4">
                        {/* <Link to="">
                            <div class="cardd">
                                <h3 class="card__title">
                                    Evaluating The ROI Of Amazon Book Marketing Services
                                </h3>
                                <p class="card__content">
                                    Authors and book companies constantly seek effective strategies to boost book sales and increase their visibility in a highly competitive publishing industry. With the rise of online platforms like Amazon, book marketing services tailored...
                                </p>
                                <div class="card__date">

                                </div>
                                <div class="card__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link> */}
                    </div>
                    <div className="col-md-4">
                        {blogs.map(blog => {
                            let BlogOne = "-NcZODahXq6m73Vb5_C1"
                            console.log("Current Blog:", blog);
                            return (
                                <div key={blog.id}>
                                    <img src={blog.imageUrl} />
                                    <div>
                                        <h4>{blog.title}</h4>
                                        <p>{convertHtmlToPlainText(blog.content.substring(0, 200))}...</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default Blogs