import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faGlobe, faChartSimple, faRocket } from '@fortawesome/free-solid-svg-icons';
// import WEB from "../Images/WEB.png";
import VertForm from './Vert-Form';
import ContentSec from './ContentSec';
import Cta from './Cta';
import Map from './Maps';
import Awards from './Awards';
import Reviews from './Reviews';
import Faqs from './Faqs';
import AllServices from './AllServices';
import Ourprocess from './Ourprocess';


const Home = () => {
    return (
        <>
            <div className="main-banner">
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
                                <button className="btns-two" type="submit">Explore Site</button> &nbsp;&nbsp;
                                <button className="btns-one" type="submit">Analyze My Site</button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={"https://webandseoexperts.com/Assets/images/SEO-7.png"} alt="" width={450} />
                        </div>
                        <VertForm />
                    </div>
                </div>
                <div className="shape-divider"></div>

                {/* <div className="custom-shape-divider-bottom-1681685793">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div> */}

            </div>
            <ContentSec
                src={"https://gforcewebdesign.co.uk/wp-content/uploads/2021/10/web-design-agency-1080x675.png"}
                text={"Rebel Design Solution: Where Design Meets Digital Ingenuity"}
                descrp="Rebel Design Solution is the perfect fusion of design and digital ingenuity. We are a team of visionaries and innovators passionate about pushing the boundaries of creativity. With our expertise in design and deep understanding of digital technologies, we craft captivating and immersive solutions that captivate audiences and elevate brands to new heights. From stunning visual designs to seamless user experiences, we blend the art of design with the power of digital innovation, ensuring that every interaction leaves a lasting impression. Trust Rebel Design Solution to transform your brand and bring your vision to life in the digital landscape."
            />
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-3 p-4">
                        <div className="text-center four-divs py-5 px-4">
                            <FontAwesomeIcon icon={faGear} />
                            <h5>All Sizes Business</h5>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-3 p-4">
                        <div className="text-center four-divs py-5 px-4">
                            <FontAwesomeIcon icon={faGlobe} />
                            <h5>Customized SEO Strategies</h5>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-3 p-4">
                        <div className="text-center four-divs py-5 px-4">
                            <FontAwesomeIcon icon={faChartSimple} />
                            <h5>Keep You In The Loop</h5>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-3 p-4">
                        <div className="text-center four-divs py-5 px-4">
                            <FontAwesomeIcon icon={faRocket} />
                            <h5>Significant ROI</h5>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Cta
                ctAtext="Join the Rebellion for Extraordinary Results!"
                ctAdescrp="Step into a world of limitless possibilities where creativity knows no bounds. Take advantage of this opportunity to join the rebellion and unlock the path to unprecedented success."
            />
            <ContentSec
                src={"https://gforcewebdesign.co.uk/wp-content/uploads/2021/10/web-design-agency-1080x675.png"}
                text={"Design + Digital: A Dynamic Duo for Unforgettable Brand Experiences"}
                descrp="When it comes to creating unforgettable brand experiences, Design + Digital makes the perfect dynamic duo. At Rebel Design Solution, our team of creative masterminds and tech-savvy wizards come together to weave magic that captivates hearts and minds. We blend the power of striking design with the cutting-edge possibilities of digital technology to create immersive and unforgettable moments that leave a lasting impression. Get ready to embark on a journey where creativity meets innovation, where pixels and pixels collide, and where your brand's story is brought to life in ways that resonate deeply with your audience. Together, let's unleash the potential of this dynamic duo and create truly extraordinary brand experiences."
            />
            <Ourprocess />
            <Map />
            <Cta
                ctAtext="Don't Wait, Dare to Be Different - Start Your Revolution!"
                ctAdescrp="Don't wait any longer, dare to be different, and ignite a revolution for your brand's success. Start your journey today with Rebel Design Solution."
            />
            <AllServices />
            <ContentSec
                src={"https://gforcewebdesign.co.uk/wp-content/uploads/2021/10/web-design-agency-1080x675.png"}
                text={"Writing History, One Brand at a Time: Be a Part of the Rebellion"}
                descrp="At Rebel Design Solution, we are not just creating brands but writing history, one brand at a time. Join our rebellious movement and be a part of something extraordinary. Together, we challenge the norms, redefine industry standards, and leave an indelible mark on the world. We believe in the power of bold ideas, innovative designs, and rebellious thinking to shape the future. Be a trailblazer, dare to stand out, and let your brand become a timeless symbol of innovation and success. Together, we will create a legacy that transcends generations. Be a part of the rebellion and make history with us."
            />
            <Reviews />
            <Awards />
            <Faqs />
        </>
    )
}

export default Home