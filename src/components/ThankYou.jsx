import { Link } from "react-router-dom";
import TickPicture from "../Images/success-tick.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";


const ThankYouHelmet = () => {
    return (
        <Helmet>
            <title>Thank You for Your Submission | Rebel Design Solution</title>
            <meta name="description" content="Thank you for submitting the form at Rebel Design Solution. We appreciate your interest in our services. Our creative team is excited to assist you with your design and branding needs." />
            <meta name="keywords" content="Thank You Page, Form Submission, Design Services, Creative Team, Rebel Design Solution" />

            <link rel="canonical" href="https://rebeldesignsolution.com/thank-you" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/thank-you"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/thank-you"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/thank-you"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/thank-you"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Thank You for Your Submission | Rebel Design Solution"
            />
            <meta
                property="og:description"
                content="Thank you for submitting the form at Rebel Design Solution. We appreciate your interest in our services. Our creative team is excited to assist you with your design and branding needs."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/thank-you" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/thank-you" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Thank You for Your Submission | Rebel Design Solution"
            />
            <meta
                name="twitter:description"
                content="Thank you for submitting the form at Rebel Design Solution. We appreciate your interest in our services. Our creative team is excited to assist you with your design and branding needs."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};
const ThankYou = () => {
    return (
        <>
            <ThankYouHelmet />
            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <img src={TickPicture} alt="Rebel Design Solution" className="success-img" />
                                <h1>
                                    Thank you!
                                </h1>
                                <h6>
                                    Thank you for submitting the form at Rebel Design Solution
                                </h6>
                                <p>
                                    We've sent your free report to your inbox so it's easy to access. You can find <br />
                                    more information on our website and social pages.
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

export default ThankYou