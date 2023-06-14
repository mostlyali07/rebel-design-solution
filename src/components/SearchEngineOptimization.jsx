
import WEB from "../Images/third-sec.webp";
import VertForm from './Vert-Form';
import ContentSec from './ContentSec';
import secImg from "../Images/sec-img.png"
import Ourprocess from './Ourprocess';
import PricingTabs from './PricingTabs';
import Cta from './Cta';
import Awards from './Awards';
import Faqs from './Faqs';


const SearchEngineOptimization = () => {
    return (
        <>
            <div className="service-banner">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 banner-left d-flex align-items-center'>
                            <div>
                                <h5 className='fw-bold'>Service page</h5>
                                <h1>
                                    Lorem ipsum dolor sit<span style={{ color: '#222222' }}>  amet consectetur adipisicing elit</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum atque,
                                    voluptas voluptate esse quis molestiae odit! Nihil, itaque, earum atque esse excepturi corrupti, eum incidunt dicta laboriosam nam fuga.
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
                text={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
                descrp={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum atque, voluptas voluptate esse quis molestiae odit! Nihil, itaque, earum atque esse excepturi corrupti, eum incidunt dicta laboriosam nam fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum atque, voluptas voluptate esse quis molestiae odit! Nihil, itaque, earum atque esse excepturi corrupti, eum incidunt dicta laboriosam nam fuga."}
            />
            <Cta
                ctAtext="Join the Rebellion for Extraordinary Results!"
                ctAdescrp="Step into a world of limitless possibilities where creativity knows no bounds. Take advantage of this opportunity to join the rebellion and unlock the path to unprecedented success."
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