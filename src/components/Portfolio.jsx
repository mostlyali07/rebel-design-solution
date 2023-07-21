import React from 'react';
import { Helmet } from "react-helmet";
import { Tabs, Tab, Row, Col } from 'react-bootstrap';


const Portfoliopage = () => {
    return (
        <Helmet>
            <title>Rebel Design Solution Portfolio | Captivating Creations</title>
            <meta name="description" content="Explore Rebel Design Solution's captivating portfolio showcasing our creative and innovative design solutions. Witness the power of digital ingenuity!" />
        </Helmet>
    );
};
const WebsiteDesigns = (
    <div className='row py-5'>
        <div className="col-md-4">
            <div className="portfolio-div Tab-div1">
                <div className="content">
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="portfolio-div Tab-div2">
                <div className="content">
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="portfolio-div Tab-div3">
                <div className="content">
                </div>
            </div>
        </div>
    </div>
);

const LogoDesigns = (
    <div>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
    </div>
);

const Smp = (
    <div>
        <h2>Tab 4 Content</h2>
        <p>This is the content for Tab 4.</p>
    </div>
);

const Portfolio = () => {
    return (
        <>
            <Portfoliopage />
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold fs-3'>
                                    Elevating Brands to New Heights:
                                    <span style={{ color: '#222222' }}> A Glimpse into Our Remarkable Portfolio</span>
                                </h1>
                                <p>
                                    Welcome to Rebel Design Solution's captivating portfolio, where we showcase our extraordinary design and digital solutions that have elevated brands and left a lasting impression. Each entry in our portfolio reflects our passion for crafting captivating solutions that transform brands and bring visions to life in the digital landscape.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <div className="container">
                <Row>
                    <Col md={12}>
                        <Tabs defaultActiveKey="tab1" id="gallery-tabs" className="portfolio-tabs">
                            <Tab eventKey="tab1" title="All">
                                {WebsiteDesigns}
                            </Tab>
                            <Tab eventKey="tab2" title="Website Designs">
                                {WebsiteDesigns}
                            </Tab>
                            <Tab eventKey="tab3" title="Logo Designs">
                                {LogoDesigns}
                            </Tab>
                            <Tab eventKey="tab4" title="Social Media Posts">
                                {Smp}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Portfolio