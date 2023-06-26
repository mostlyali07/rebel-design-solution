
import WEB from "../Images/third-sec.webp";
import VertForm from './Vert-Form';
import ContentSec from './ContentSec';
import secImg from "../Images/sec-img.png"
import Ourprocess from './Ourprocess';
import PricingTabs from './PricingTabs';
import Cta from './Cta';
import Awards from './Awards';
import Faqs from './Faqs';
import AllServices from './AllServices';


const SearchEngineOptimization = () => {
    return (
        <>
            <div className="service-banner">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 banner-left d-flex align-items-center'>
                            <div>
                                <h5 className='fw-bold'>Fully Managed SEO Services</h5>
                                <h1>
                                    Revolutionize Your Online Presence with Rebellious
                                    <span style={{ color: '#222222' }}> SEO Services</span>
                                </h1>
                                <p>
                                    At Rebel Design Solution, we are the masters of SEO, pushing the boundaries of creativity
                                    and digital innovation. With our expertise in design and deep understanding of digital technologies,
                                    we merge the art of design with the power of SEO to ensure that your brand shines brightly in search engine results.
                                </p>
                                <button className="btns-two" type="submit">Explore Site</button> &nbsp;&nbsp;
                                <button className="btns-one" type="submit">Analyze My Site</button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={WEB} alt="" width={450} />
                        </div>
                        <VertForm />
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <ContentSec
                src={secImg}
                text={"Buy SEO Services That Deliver Results"}
                descrp={"When it comes to SEO, results matter. At Rebel Design Solution, we offer rebellious SEO services that deliver tangible outcomes for your brand. Our team of SEO experts combines technical expertise, data-driven insights, and strategic thinking to create customized solutions tailored to your unique business goals. Whether you're looking to increase website traffic, improve conversions, or enhance your online visibility, our rebellious SEO services are designed to drive meaningful results that exceed your expectations."}
            />
            <Cta
                ctAtext="Elevate Your SEO Game – Experience Advanced SEO Services!"
                ctAdescrp="Elevate your SEO strategy to new heights with our advanced services and stay ahead in the ever-evolving digital landscape."
            />

            <AllServices mainText={"SEO Unleashed: Uncover the Rebellious Arsenal of SEO Services"}
                serOne={"Local SEO"}
                desOne={"Boost your brand's visibility in local searches and dominate the local market."}
                serTwo={"Nationwide SEO"}
                desTwo={"Expand your reach across the nation and capture a wider audience with our national SEO strategies."}
                serThree={"Enterprise SEO"}
                desThree={"Scale your business to new heights with tailored SEO solutions designed for large-scale enterprises."}
                serFour={"E-commerce SEO"}
                desFour={"Drive organic traffic, increase conversions, and optimize your online store for maximum visibility and profitability."}
                serFive={"Guarantee SEO"}
                desFive={"Our revolutionary approach ensures top-notch results with a proven track record of delivering guaranteed search engine optimization success."}
                serSix={"Link Building"}
                desSix={"Build a strong online presence and authority through strategic link acquisition and high-quality backlinks."}
                serSeven={"GMB Optimization"}
                desSeven={"Optimize your Google My Business profile to enhance local visibility, attract more customers, and drive foot traffic to your business."}
            />
            <Ourprocess />
            <PricingTabs />
            <ContentSec
                src={secImg}
                text={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
                descrp={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum atque, voluptas voluptate esse quis molestiae odit! Nihil, itaque, earum atque esse excepturi corrupti, eum incidunt dicta laboriosam nam fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum atque, voluptas voluptate esse quis molestiae odit! Nihil, itaque, earum atque esse excepturi corrupti, eum incidunt dicta laboriosam nam fuga."}
            />
            <Cta
                ctAtext="Join the Rebellion for Extraordinary Results!"
                ctAdescrp="Step into a world of limitless possibilities where creativity knows no bounds. Take advantage of this opportunity to join the rebellion and unlock the path to unprecedented success."
            />
            <Faqs />
            <Awards />
        </>
    )
}

export default SearchEngineOptimization