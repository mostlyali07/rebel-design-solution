import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

const All = (
    <div className='row'>
        <div className="col-md-3">
            <div class="portfolio-div">
                <div class="content">
                </div>
            </div>

        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
    </div>
);

const WebsiteDesigns = (
    <div>
        <h2>Tab 2 Content</h2>
        <p>This is the content for Tab 2.</p>
    </div>
);

const LogoDesigns = (
    <div>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
    </div>
);

const SeoStats = (
    <div>
        <h2>Tab 4 Content</h2>
        <p>This is the content for Tab 4.</p>
    </div>
);

const Portfolio = () => {
    return (
        <>
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold'>
                                    Our<span style={{ color: '#222222' }}>  Portfolio </span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quis, eum sed ipsa adipisci voluptatibus ad id nam in rem est laudantium hic.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <div className="container">
                <Row>
                    <Col md={12}>
                        <Tabs defaultActiveKey="tab1" id="gallery-tabs" className="portfolio-tabs">
                            <Tab eventKey="tab1" title="All">
                                {All}
                            </Tab>
                            <Tab eventKey="tab2" title="Website Designs">
                                {WebsiteDesigns}
                            </Tab>
                            <Tab eventKey="tab3" title="Logo Designs">
                                {LogoDesigns}
                            </Tab>
                            <Tab eventKey="tab4" title="SEO Stats">
                                {SeoStats}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Portfolio