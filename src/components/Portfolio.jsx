import React from 'react';
import { Helmet } from "react-helmet";
import { Tabs, Tab, Row, Col } from 'react-bootstrap';


const Portfoliopage = () => {
    return (
        <Helmet>
            <title>Rebel Design Solution Portfolio | Captivating Creations</title>
            <meta name="description" content="Explore Rebel Design Solution's captivating portfolio showcasing our creative and innovative design solutions. Witness the power of digital ingenuity!" />
            <meta name="keywords" content="Portfolio, Our Work" />

            <link rel="canonical" href="https://rebeldesignsolution.com/portfolio" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/portfolio"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/portfolio"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/portfolio"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/portfolio"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Rebel Design Solution Portfolio | Captivating Creations"
            />
            <meta
                property="og:description"
                content="Explore Rebel Design Solution's captivating portfolio showcasing our creative and innovative design solutions. Witness the power of digital ingenuity!"
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/portfolio" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/portfolio" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Rebel Design Solution Portfolio | Captivating Creations"
            />
            <meta
                name="twitter:description"
                content="Explore Rebel Design Solution's captivating portfolio showcasing our creative and innovative design solutions. Witness the power of digital ingenuity!"
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
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
        <div className='row py-5'>
            <div className="col-md-3">
                <div className="Tab-div4 logo-div">
                    <div className="contentlogo">
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Tab-div5 logo-div">
                    <div className="contentlogo">
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Tab-div6 logo-div">
                    <div className="contentlogo">
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Tab-div7 logo-div">
                    <div className="contentlogo">
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Smp = (
    <div>
        <div className='row py-5'>
            <div className="col-md-12">
                <div className="Tab-div11">
                </div>
            </div>
            <div className="col-md-4">
                <div className="social-div Tab-div8">
                    <div className="content">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="social-div Tab-div9">
                    <div className="content">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="portfolio-div Tab-div10">
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
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
                                {LogoDesigns}
                                {Smp}
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