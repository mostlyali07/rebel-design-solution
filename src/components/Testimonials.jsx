import React from 'react'
import { Helmet } from "react-helmet";


const Testimonialspage = () => {
    return (
        <Helmet>
            <title>Client Testimonials | Rebel Design Solution Reviews</title>
            <meta name="description" content="Read client testimonials and reviews for Rebel Design Solution. Discover how our creative solutions have transformed businesses and captivated audiences." />
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