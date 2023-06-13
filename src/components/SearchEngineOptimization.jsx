
import WEB from "../Images/third-sec.webp";
import VertForm from './Vert-Form';

const SearchEngineOptimization = () => {
    return (
        <div className="service-banner">
            <div className="container">
                <div className="row">
                    <div className='col-md-6 banner-left d-flex align-items-center'>
                        <div>
                            <h5 className='fw-bold'>Service page</h5>
                            <h1>
                                Creating Memorable Brands through <span style={{ color: '#222222' }}> Exceptional Design and Marketing</span>
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
    )
}

export default SearchEngineOptimization