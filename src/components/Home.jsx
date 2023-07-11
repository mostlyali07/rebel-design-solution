// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear, faGlobe, faChartSimple, faRocket } from '@fortawesome/free-solid-svg-icons';

import VertForm from './Vert-Form';
import ContentSec from './ContentSec';
import Cta from './Cta';
import Map from './Maps';
import Awards from './Awards';
import Reviews from './Reviews';
import Faqs from './Faqs';
import AllServices from './AllServices';
import Ourprocess from './Ourprocess';
import PricingTabs from './PricingTabs';
import WEB from "../Images/main-picture.png";
import secImg from "../Images/sec-img.png"
import thirdImg from "../Images/third-sec.webp"
import fouImg from "../Images/fourth-sec.png"
import Popup from './Popup';
import { Link } from 'react-router-dom';

// import Form from "./Form"


const Home = () => {

    return (
        <>
            <div className="main-banner" >
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 banner-left d-flex align-items-center'>
                            <div>
                                <h5 className='fw-bold'>Design and Marketing Agency</h5>
                                <h1>
                                    Creating Memorable Brands through <span style={{ color: '#222222' }}> Exceptional Design and Marketing</span>
                                </h1>
                                <p>
                                    At Rebel Design Solution, we specialize in creating memorable brands through our exceptional design and marketing services. Our talented designers and marketing experts collaborate to develop unique and captivating brand identities that leave a lasting impact. By combining innovative design concepts with strategic marketing techniques, we ensure that your brand stands out from the competition and resonates with your target audience.
                                    Trust us to bring your brand vision to life and create a meaningful connection with your customers through our unparalleled design and marketing expertise.
                                </p>
                                <Link className="btns-two" to="contact-us">Explore Site</Link> &nbsp;&nbsp;
                                <Link className="btns-one" to="contact-us">Analyze My Site</Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img className="fix" src={WEB} alt="Rebel" />
                        </div>
                        <VertForm />
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            {/* <Form /> */}
            <ContentSec
                src={secImg}
                text={"Rebel Design Solution: Where Design Meets Digital Ingenuity"}
                descrp="Rebel Design Solution is the perfect fusion of design and digital ingenuity. We are a team of visionaries and innovators passionate about pushing the boundaries of creativity. With our expertise in design and deep understanding of digital technologies, we craft captivating and immersive solutions that captivate audiences and elevate brands to new heights. From stunning visual designs to seamless user experiences, we blend the art of design with the power of digital innovation, ensuring that every interaction leaves a lasting impression. Trust Rebel Design Solution to transform your brand and bring your vision to life in the digital landscape."
            />

            <AllServices
                mainText={"Design. Develop. Deliver: Experience Our Suite of Services"}
                serOne={"Graphics Design"}
                desOne={"Our graphic design services bring your brand to life through visually captivating and impactful designs, ensuring your message stands out and resonates with your audience."}
                serTwo={"Website Design & Development"}
                desTwo={"We create stunning and user-friendly websites that visually impress and provide seamless user experiences, helping you establish a strong online presence and drive conversions."}
                serThree={"App Development"}
                desThree={"Our expert team designs and develops innovative mobile applications for iOS and Android platforms, customized to meet your specific business needs and deliver engaging experiences to your users."}
                serFour={"Search Engine Optimization (SEO)"}
                desFour={"Our SEO services focus on improving your website's visibility and organic rankings on search engines. We employ strategies such as keyword optimization, content enhancement, and technical optimizations to drive targeted traffic and increase your online presence."}
                serFive={"Google Ads Management"}
                desFive={"Our Google Ads management services revolve around creating and optimizing pay-per-click (PPC) advertising campaigns on the Google Ads platform. We develop targeted ads, conduct keyword research, monitor performance, and refine strategies to maximize your ad spend and generate valuable leads or conversions."}
                serSix={"Social Media Marketing"}
                desSix={"Leveraging the power of social media platforms, we design and implement strategic marketing campaigns to boost brand awareness, engage your audience, and drive meaningful interactions that result in tangible business outcomes."}
                serSeven={"Content Marketing"}
                desSeven={"Our content marketing services focus on creating valuable and compelling content that tells your brand's story, engages your audience, and drives organic growth, positioning your business as an industry authority."}
                serEight={"Website Content"}
                desEight={"Our content service creates captivating, persuasive website copy. We optimize for SEO, driving traffic and boosting conversions. With attention to detail and audience understanding, we enhance your online presence and leave a lasting impression."}
                srcOne={"graphics-design-services"}
                srcTwo={"website-design-development-services"}
                srcThree={"app-development-services"}
                srcFour={"seo-services"}
                srcFive={"google-ads-management-services"}
                srcSix={"social-media-marketing-services"}
                srcSeven={"content-marketing-services"}
                srcEight={"website-content-writing-services"}
            />
            <Cta
                ctAtext="Join the Rebellion for Extraordinary Results!"
                ctAdescrp="Step into a world of limitless possibilities where creativity knows no bounds. Take advantage of this opportunity to join the rebellion and unlock the path to unprecedented success."
            />
            <Ourprocess
                prcsMain="The Roadmap to Extraordinary: Inside Our Process"
                prcsPara="With a keen focus on detail and a commitment to excellence, our process ensures we deliver remarkable results beyond expectations."
                prcsOne={["Discovery and", <br />, "Understanding"]}
                prcsTwo={["Strategic", <br />, "Planning"]}
                prcsThree={["Creative", <br />, "Conceptualization"]}
                prcsFour={["Meticulous", <br />, "Execution"]}
                prcsFive={["Continuous", <br />, "Improvement"]}
            />
            <PricingTabs />
            <ContentSec
                src={thirdImg}
                text={"Design + Digital: A Dynamic Duo for Unforgettable Brand Experiences"}
                descrp="When it comes to creating unforgettable brand experiences, Design + Digital makes the perfect dynamic duo. At Rebel Design Solution, our team of creative masterminds and tech-savvy wizards come together to weave magic that captivates hearts and minds. We blend the power of striking design with the cutting-edge possibilities of digital technology to create immersive and unforgettable moments that leave a lasting impression. Get ready to embark on a journey where creativity meets innovation, where pixels and pixels collide, and where your brand's story is brought to life in ways that resonate deeply with your audience. Together, let's unleash the potential of this dynamic duo and create truly extraordinary brand experiences."
            />
            <Map />
            <Cta
                ctAtext="Don't Wait, Dare to Be Different - Start Your Revolution!"
                ctAdescrp="Don't wait any longer, dare to be different, and ignite a revolution for your brand's success. Start your journey today with Rebel Design Solution."
            />

            <ContentSec
                src={fouImg}
                text={"Writing History, One Brand at a Time: Be a Part of the Rebellion"}
                descrp="At Rebel Design Solution, we are not just creating brands but writing history, one brand at a time. Join our rebellious movement and be a part of something extraordinary. Together, we challenge the norms, redefine industry standards, and leave an indelible mark on the world. We believe in the power of bold ideas, innovative designs, and rebellious thinking to shape the future. Be a trailblazer, dare to stand out, and let your brand become a timeless symbol of innovation and success. Together, we will create a legacy that transcends generations. Be a part of the rebellion and make history with us."
            />
            <Reviews
                CustomerNameOne={"John Smith, CEO"}
                CustomerDescOne={"Rebel Design Solution transformed our outdated website into a captivating digital masterpiece. Their team's expertise in design and digital technologies brought our vision to life, creating a seamless user experience that leaves a lasting impression. We couldn't be happier with the stunning visual designs and the elevated brand presence they delivered."}
                CustomerNameTwo={"Emily Thompson, Marketing Manager"}
                CustomerDescTwo={"Rebel Design Solution's SEO service has made a significant impact on our online presence. Their team's expertise in search engine optimization has helped us rank higher in search results, resulting in increased organic traffic and improved visibility. They conducted thorough keyword research, optimized our website content, and implemented effective strategies that have generated tangible results. We are impressed with their professionalism, transparency, and the measurable growth we have experienced. Rebel Design Solution is our trusted partner for SEO, and we highly recommend their services."}
                CustomerNameThree={"Laura Thompson, Marketing Director"}
                CustomerDescThree={"Rebel Design Solution's content marketing service has been instrumental in enhancing our brand's online presence. Their team's expertise in creating engaging and informative content has helped us establish thought leadership in our industry. They took the time to understand our target audience and crafted content that resonated with them. From blog posts to social media content, Rebel Design Solution consistently delivered high-quality and compelling content that drove traffic to our website and increased customer engagement. We are extremely pleased with the results and highly recommend their content marketing service."}
            />
            <Faqs
                faqOneQ="Q: What differentiates Rebel Design Solution from other design and marketing agencies?"
                faqOneA="A: At Rebel Design Solution, we embrace a rebellious spirit that fuels our creativity and innovative approach. We go beyond the ordinary, pushing the boundaries of design and marketing to deliver extraordinary results that leave a lasting impression. Our team of visionary designers, digital experts, and content connoisseurs are passionate about challenging the status quo and crafting remarkable brand experiences."
                faqTwoQ="Q: What industries do you specialize in?"
                faqTwoA="A: We cater to a diverse range of industries, including but not limited to technology, fashion, hospitality, e-commerce, and healthcare. Our team's expertise allows us to adapt to various sectors and deliver tailored solutions that align with each industry's unique needs and objectives."
                faqThreeQ="Q: How do you ensure effective communication and collaboration throughout the project?"
                faqThreeA="A: Communication is key to our success. We prioritize open and transparent communication with our clients, ensuring we understand their vision, goals, and preferences. Our project management systems facilitate seamless collaboration, allowing real-time updates, feedback, and a shared understanding of project milestones and progress."
                faqFourQ="Q: Can you handle both small and large-scale projects?"
                faqFourA="A: Absolutely! We have experience working with businesses of all sizes, from startups to established enterprises. Our team is equipped to handle projects of various scales, offering customized solutions tailored to each client's unique requirements and budgets."
                faqFiveQ="Q: What is your approach to delivering measurable results?"
                faqFiveA="A: We believe in data-driven strategies and continuous improvement. Our approach combines creativity with analytics to ensure our efforts generate tangible results. We establish key performance indicators (KPIs) at the start of each project and regularly monitor and analyze metrics to measure the impact of our design and marketing efforts. This data-driven approach allows us to make data-backed decisions and optimize campaigns for significant ROI."
            />
            <Awards />
            <Popup />
        </>
    )
}

export default Home