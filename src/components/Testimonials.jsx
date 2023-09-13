import React from 'react'
import { Helmet } from "react-helmet";
import Reviews from './Reviews';
import Maps from './Maps';
import VertForm from './Vert-Form';


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
        <>
            <Testimonialspage />
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold'
                                >Our valueable<span style={{ color: '#222222' }}>  Testimonials </span>
                                </h1>
                                <p>
                                    Here are some testimonials from our valued customers who have shared their viewpoints and feedback with us through the form:
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                        <VertForm />
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div >
            <Maps />
            <Reviews
                CustomerNameOne={"John Smith, CEO"}
                CustomerDescOne={"Rebel Design Solution transformed our outdated website into a captivating digital masterpiece. Their team's expertise in design and digital technologies brought our vision to life, creating a seamless user experience that leaves a lasting impression. We couldn't be happier with the stunning visual designs and the elevated brand presence they delivered."}
                CustomerNameTwo={"Emily Thompson, Marketing Manager"}
                CustomerDescTwo={"Rebel Design Solution's SEO service has made a significant impact on our online presence. Their team's expertise in search engine optimization has helped us rank higher in search results, resulting in increased organic traffic and improved visibility. They conducted thorough keyword research, optimized our website content, and implemented effective strategies that have generated tangible results. We are impressed with their professionalism, transparency, and the measurable growth we have experienced. Rebel Design Solution is our trusted partner for SEO, and we highly recommend their services."}
                CustomerNameThree={"Laura Thompson, Marketing Director"}
                CustomerDescThree={"Rebel Design Solution's content marketing service has been instrumental in enhancing our brand's online presence. Their team's expertise in creating engaging and informative content has helped us establish thought leadership in our industry. They took the time to understand our target audience and crafted content that resonated with them. From blog posts to social media content, Rebel Design Solution consistently delivered high-quality and compelling content that drove traffic to our website and increased customer engagement. We are extremely pleased with the results and highly recommend their content marketing service."}
            />

        </>
    )
}

export default Testimonials