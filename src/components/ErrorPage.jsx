import { Link } from "react-router-dom";
import Picture from "../Images/man-holding-mobile-grabbed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const PageError = () => {
    return (
        <Helmet>
            <title>404 - Page Not Found | Rebel Design Solution</title>
            <meta name="description" content="Oops! You've landed on the missing page at Rebel Design Solution. Explore our innovative design solutions for branding, web development, and more. Don't worry, our creative team is here to guide you back on track." />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing" />

            <link rel="canonical" href="https://rebeldesignsolution.com/404-page" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/404-page"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/404-page"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/404-page"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/404-page"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="404 - Page Not Found | Rebel Design Solution"
            />
            <meta
                property="og:description"
                content="Oops! You've landed on the missing page at Rebel Design Solution. Explore our innovative design solutions for branding, web development, and more. Don't worry, our creative team is here to guide you back on track."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/404-page" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/404-page" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="404 - Page Not Found | Rebel Design Solution"
            />
            <meta
                name="twitter:description"
                content="Oops! You've landed on the missing page at Rebel Design Solution. Explore our innovative design solutions for branding, web development, and more. Don't worry, our creative team is here to guide you back on track."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};
const ErrorPage = () => {
    return (
        <>
            <PageError />
            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={Picture} alt="Rebel Design Solutions" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1>
                                    404
                                    Error
                                </h1>
                                <h6>
                                    Page Not Found
                                </h6>
                                <p>
                                    Oops! It seems like the page you're looking for has gone on a little adventure and couldn't be found. Don't worry, though! Our team of digital explorers is on the case.
                                    In the meantime, here are a few things you can try:
                                </p>

                                <ul>
                                    <li>
                                        Double-check the URL for any typos or errors.
                                    </li>
                                    <li>
                                        Navigate back to our homepage to start your journey anew.
                                    </li>
                                    <li>
                                        Use our search bar to track down the missing content.
                                    </li>
                                    <li>
                                        If you followed a link to get here, please let us know so we can fix it.
                                    </li>
                                </ul>
                                <p>
                                    While you're here, why not explore some of our popular pages:
                                </p>
                                <Link className="animated-button" to="/">
                                    <span>Home</span>
                                    <span></span>
                                </Link>
                                <Link className="animated-button" to="/">
                                    <span>Services</span>
                                    <span></span>
                                </Link>
                                <Link className="animated-button" to="/">
                                    <span>Blogs</span>
                                    <span></span>
                                </Link>
                                <Link className="animated-button" to="/contact-us">
                                    <span>Contact</span>
                                    <span></span>
                                </Link>
                                <p>
                                    If you continue to encounter this error, feel free to contact our support team for assistance. We apologize for any inconvenience and appreciate your patience!
                                </p>
                                <br />
                                <Link to="mailto:info@rebeldesignsolution.com"><FontAwesomeIcon icon={faEnvelope} /> info@rebeldesignsolution.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage