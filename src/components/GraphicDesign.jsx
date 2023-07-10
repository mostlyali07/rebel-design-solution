import GraphImg from "../Images/graphic-1.png";
import VertForm from './Vert-Form';
import ContentSec from './ContentSec';
import GraphTwo from "../Images/graphic-2.png"
import GraphThree from "../Images/graphic-3.png"
import GraphFour from "../Images/graphic-4.png"
import GraphFive from "../Images/graphic-5.png"
import Ourprocess from './Ourprocess';
import PricingTabs from './PricingTabs';
import Cta from './Cta';
import Awards from './Awards';
import Faqs from './Faqs';


const GraphicDesign = () => {
    return (
        <>
            <div className="service-banner">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 banner-left d-flex align-items-center'>
                            <div>
                                <h5 className='fw-bold'>Graphic Design</h5>
                                <h1>
                                    Unleash Your Brand's Creativity with Rebellious
                                    <span style={{ color: '#222222' }}> Graphic Design Services</span>
                                </h1>
                                <p>
                                    Rebel Design Solution is the ultimate destination for graphic design services that push the boundaries of creativity. Our team of visionaries and innovators merges design expertise with digital ingenuity to craft captivating solutions that elevate brands to new heights. From stunning logos to immersive web designs, we blend the art of design with the power of digital innovation, ensuring that your brand stands out in the digital landscape.
                                </p>
                                <button className="btns-two" type="submit">Explore Site</button> &nbsp;&nbsp;
                                <button className="btns-one" type="submit">Analyze My Site</button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={GraphImg} className="cust-front" />
                        </div>
                        <VertForm />
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <ContentSec
                src={GraphTwo}
                text={"Make a Bold Statement with Captivating Logo Designs"}
                descrp={"Your logo is the face of your brand, and at Rebel Design Solution, we understand its importance. Our rebellious graphic designers create captivating logos that leave a lasting impression. We dive deep into your brand's identity to craft a logo that reflects your uniqueness and resonates with your target audience. Trust us to create a visual symbol that becomes the iconic representation of your brand."}
            />
            <Cta
                ctAtext="Revive Your Brand's Heritage with Vintage Logo Design"
                ctAdescrp="Unleash the power of nostalgia and embrace your brand's heritage with our vintage logo design services. Our rebellious designers combine timeless aesthetics with a modern twist, creating logos that capture the essence of your brand's history while making a bold statement in today's competitive market."
            />
            <Ourprocess
                prcsMain="Designing the Extraordinary: How We Create Captivating Graphics for Your Brand"
                prcsPara="Ignite your brand's visual presence with our exceptional graphic design expertise, where we blend creativity and innovation to craft captivating graphics that leave a lasting impression on your audience."
                prcsOne="Discovery and Consultation"
                prcsTwo="Conceptualization and Ideation"
                prcsThree="Design Development"
                prcsFour="Iterative Feedback and Revisions"
                prcsFive="Finalization and Delivery"
            />

            <ContentSec
                src={GraphThree}
                text={"Turn Heads with Striking Print and Illustration Designs"}
                descrp={"In the physical world, Rebel Design Solution brings your brand to life with striking print and illustration designs. Whether it's brochures, posters, or packaging, our rebellious designers infuse your brand's personality into every design element. With attention to detail and a rebellious touch, we create visually captivating prints and illustrations that demand attention and leave a lasting impact."}
            />
            <PricingTabs />
            <ContentSec
                src={GraphFour}
                text={"Spark Engagement with Dynamic Motion Graphics and Social Media Graphics"}
                descrp={"In the fast-paced digital world, Rebel Design Solution helps your brand stand out with dynamic motion graphics and social media graphics. Our rebellious designers create visually captivating animations and graphics that breathe life into your brand's online presence. From eye-catching social media posts to attention-grabbing motion graphics, we ensure your brand stays ahead of the curve."}
            />
            <Cta
                ctAtext="Unleash Your Brand's Creativity with Custom Graphic Design"
                ctAdescrp="From logo design to branding, web design, and UI/UX design, our rebellious graphic design services cater to every aspect of your brand's visual identity. Let our creative experts craft custom solutions that elevate your brand and leave a lasting impression on your audience."
            />
            <ContentSec
                src={GraphFive}
                text={"Join the Rebellion and Transform Your Brand's Visual Identity"}
                descrp={"Are you ready to rebel against ordinary design? Trust Rebel Design Solution to transform your brand's visual identity. Our rebellious graphic design services encompass a wide range of creative solutions, from logo design to motion graphics. With our fusion of design and digital ingenuity, we bring your brand's vision to life and ensure every design element leaves a rebellious impression in the digital landscape. Let's embark on this design revolution together."}
            />
            <Faqs
                faqOneQ="Q: What is graphic design?"
                faqOneA="A: Graphic design is the art of creating visual content to communicate messages, ideas, or concepts. It involves the use of typography, colors, images, and other design elements to produce visually appealing and effective designs for various mediums such as print, digital, and social media."
                faqTwoQ="Q: What is the difference between vintage logo design and modern logo design?"
                faqTwoA="A: Vintage logo design is characterized by nostalgic elements that evoke a sense of the past, often inspired by retro aesthetics and classic design styles. Modern logo design, on the other hand, focuses on contemporary and minimalist approaches, incorporating clean lines, bold typography, and simplicity to represent a brand's modern identity."
                faqThreeQ="Q: How important is logo design for a brand?"
                faqThreeA="A: Logo design is crucial for a brand as it serves as the visual representation of its identity. A well-designed logo creates brand recognition, establishes credibility, and communicates the brand's values and personality to the target audience. It plays a vital role in shaping the overall perception of a brand."
                faqFourQ="Q: What is involved in the branding process?"
                faqFourA="A: The branding process includes defining a brand's unique positioning, identifying the target audience, developing a brand strategy, creating a visual identity (logo, color palette, typography), and establishing brand guidelines. It aims to create a consistent and memorable brand experience that resonates with the target market."
                faqFiveQ="Q: What is UI/UX design?"
                faqFiveA="A: UI (User Interface) design focuses on the visual elements and layout of a digital product or website, aiming to create an intuitive and visually appealing user interface. UX (User Experience) design, on the other hand, focuses on enhancing the overall user experience by optimizing usability, accessibility, and interaction design."
            />
            <Awards />
        </>
    )
}

export default GraphicDesign