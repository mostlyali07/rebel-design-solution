import { Helmet } from "react-helmet";
import ContentSec from './ContentSec';
import aboutImg from "../Images/about-us-img.png"
import apart from "../Images/about-apart.png"
import vision from "../Images/vision-about.png"
import Cta from './Cta';
const AboutPage = () => {
    return (
        <Helmet>
            <title>Visionary Design and Digital Ingenuity | Rebel Design Solution</title>
            <meta name="description" content="Discover Rebel Design Solution, a team of visionaries passionate about pushing the boundaries of creativity, crafting captivating digital solutions for brands." />
        </Helmet>
    );
};
const AboutUs = () => {
    return (
        <>
            <AboutPage />
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold' >
                                    Welcome to
                                    <span style={{ color: '#222222' }}>  Rebel Design Solution</span>
                                </h1>
                                <p>
                                    Rebel Design Solution is a web design and digital marketing agency. We specialize in developing websites that are creative, responsive and performant. Our team of talented designers, developers and strategists work collaboratively to create engaging websites and digital marketing strategies that are best suited for your business needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <ContentSec
                src={aboutImg}
                text={"How Rebel Design Solution Came to Be"}
                descrp={"Rebel Design Solution was founded by a group of web designers and digital marketing professionals who saw a need for custom, effective, and affordable solutions for businesses looking to succeed online. With a passion for helping businesses grow, we set out to create a company that would provide expert services and personalized support to our clients. Since our founding, we have helped countless businesses around the world achieve their online goals, and we continue to be driven by a desire to be the go-to provider of web design and digital marketing services. We are proud of the company that we have built and are excited to continue helping businesses thrive online."}
            />
            <Cta
                ctAtext="Get in Touch to Learn More About How We Can Help Your Business Thrive"
                ctAdescrp="If you're ready to take your business to the next level online, we'd love to hear from you. Contact us today to learn more about how we can help your business thrive. We look forward to working with you and helping you achieve your online goals."
            />
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <div className="tilt-container">
                                <h3 className='fw-bold fs-3 tilt-image'>Vision</h3>
                            </div>
                            <p>
                                To be the leading provider of web design and digital marketing services, empowering businesses around the world to succeed online.
                            </p>
                            <div className="tilt-container">
                                <h3 className='fw-bold fs-3 tilt-image'>Mission</h3>
                            </div>
                            <p>
                                Our mission is to help businesses of all sizes and industries achieve their online goals through custom solutions, expert knowledge, and exceptional customer service. We strive to be a trusted partner for our clients, delivering proven results and helping them grow their businesses through effective online marketing strategies.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="tilt-container">
                            <img src={vision} alt="" className='tilt-image cus-width' />
                        </div>
                    </div>
                </div>
            </div>
            <ContentSec
                src={apart}
                text={"What We Stand For and What Sets Us Apart"}
                descrp={"At Rebel Design Solution, we believe in delivering top-quality web design and digital marketing services that help our clients succeed online. We are dedicated to providing expert knowledge, personalized support, and proven results to every one of our clients. Our team is passionate about helping businesses of all sizes and industries grow, and we take the time to understand the unique needs and goals of each of our clients. We pride ourselves on our commitment to excellence and our ability to deliver customized solutions that meet the specific needs of our clients. That's what sets us apart and what we stand for at Rebel Design Solution."}
            />
        </>
    )
}

export default AboutUs