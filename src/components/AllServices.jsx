import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faSquarePollVertical, faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
const AllServices = () => {
    return (
        <>
            <div className="container py-5 your-animation-class">
                <div className="row">
                    <h2 className='fw-bold text-center pb-4'>
                        Design. Develop. Deliver: Experience Our Suite of Services
                    </h2>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                        <h4 className='fw-bold'>Graphics Design</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        Our graphic design services bring your brand to life through visually captivating and impactful designs,
                                        ensuring your message stands out and resonates with your audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faSquarePollVertical} />
                                        <h4 className='fw-bold'>Website Design & Development</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        We create stunning and user-friendly websites that visually impress and provide seamless user experiences, helping you establish a strong online presence and drive conversions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faCode} />
                                        <h4 className='fw-bold'>App Development</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>Our expert team designs and develops innovative mobile applications for iOS and Android platforms, customized to meet your specific business needs and deliver engaging experiences to your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPenNib} />
                                        <h4 className='fw-bold'>Search Engine Optimization (SEO)</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        Our SEO services focus on improving your website's visibility and organic rankings on search engines. We employ strategies such as keyword optimization, content enhancement, and technical optimizations to drive targeted traffic and increase your online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPenNib} />
                                        <h4 className='fw-bold'>Google Ads Management</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        Our Google Ads management services revolve around creating and optimizing pay-per-click (PPC) advertising campaigns on the Google Ads platform. We develop targeted ads, conduct keyword research, monitor performance, and refine strategies to maximize your ad spend and generate valuable leads or conversions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPenNib} />
                                        <h4 className='fw-bold'>Social Media Marketing</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        Leveraging the power of social media platforms, we design and implement strategic marketing campaigns to boost brand awareness, engage your audience, and drive meaningful interactions that result in tangible business outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front d-flex align-items-center justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faPenNib} />
                                        <h4 className='fw-bold'>Content Marketing</h4>
                                    </div>
                                </div>
                                <div className="flip-box-back d-flex align-items-center">
                                    <p>
                                        Our content marketing services focus on creating valuable and compelling content that tells your brand's story, engages your audience, and drives organic growth, positioning your business as an industry authority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default AllServices