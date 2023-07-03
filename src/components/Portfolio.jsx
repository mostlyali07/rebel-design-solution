import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';


const WebsiteDesigns = () => return (
    <>
    </>
)
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
                                Content for Tab 1
                            </Tab>
                            <Tab eventKey="tab2" title="Website Designs">
                                Content for Tab 2
                            </Tab>
                            <Tab eventKey="tab3" title="Logo Designs">
                                Content for Tab 3
                            </Tab>
                            <Tab eventKey="tab4" title="SEO Stats">
                                Content for Tab 4
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Portfolio