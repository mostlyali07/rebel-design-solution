import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const PricingTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabSelect = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Tabs activeKey={activeTab} onSelect={handleTabSelect} className="custom-tabs">
                            <Tab eventKey={0} title="Tab 1">
                                <div class="row mt-2 mb-4">
                                    <div class="col-md-4">
                                        <div class="price-box">
                                            <div class="d-flex">
                                                <div class="price">
                                                    <h4 class="fw-bold">Essential</h4>
                                                    <span class="fw-bold fs-2">$300</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div class="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$800</span> - Quarterly Plan</h6>
                                                        <h6><span>$250</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="slimScrollBar">
                                                <ul class="price-list">
                                                    <h5>
                                                        <b>Prior Analysis</b>
                                                    </h5>
                                                    <li>Initial Website Audit</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>15 Selected Keywords Targeting</li>
                                                    <h5>
                                                        <b>Technical Tools Setup</b>
                                                    </h5>
                                                    <li>Google Search Console</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Tag Manager</li>
                                                    <h5>
                                                        <b>Technical Audit &amp; Optimization</b>
                                                    </h5>
                                                    <li>HTTP Response Status Check</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>Broken Links Fixing</li>
                                                    <li>Redirects</li>
                                                    <li>Too short/long Meta Tags</li>
                                                    <li>Broken Images</li>
                                                    <li>Index Tags</li>
                                                    <li>Conversion Tracking Check &amp; Setup</li>
                                                    <li>Setup Robots.txt</li>
                                                    <h5>
                                                        <b>On Page Optimization</b>
                                                    </h5>
                                                    <li>Meta tag Optimization</li>
                                                    <li>Creation of Sitemap.XML</li>
                                                    <li>Heading Tags Optimized</li>
                                                    <li>Image Optimization</li>
                                                    <li>Content Optimization</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>3 Monthly Onsite Blogs</li>
                                                    <li>Robots Meta Tag Optimization</li>
                                                    <li>Canonical URLs Optimization</li>
                                                    <h5>
                                                        <b>Off Page Optimization</b>
                                                    </h5>
                                                    <li>Social Bookmarking</li>
                                                    <li>Social Sharing</li>
                                                    <li>Directory Submissions</li>
                                                    <li>10 Business Listings Monthly</li>
                                                    <li>10 Profile Creation Monthly</li>
                                                    <li>3 Blog Submissions / Web 2.0 Monthly</li>
                                                    <h5>
                                                        <b>Reporting</b>
                                                    </h5>
                                                    <li>Monthly Reporting</li>
                                                    <li>Email Support</li>
                                                    <li>Phone Support</li>
                                                </ul>
                                            </div>
                                            <a href="/">Buy Package</a>
                                        </div>
                                    </div>



                                    <div class="col-md-4">
                                        <div class="price-box">
                                            <div class="d-flex">
                                                <div class="price">
                                                    <h4 class="fw-bold">Standard</h4>
                                                    <span class="fw-bold fs-2">$500</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div class="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$1400</span> - Quarterly Plan</h6>
                                                        <h6><span>$450</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="slimScrollBar">
                                                <ul class="price-list">
                                                    <h5>
                                                        <b>Prior Analysis</b>
                                                    </h5>
                                                    <li>Initial Website Audit</li>
                                                    <li>Business Analysis</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>30 Selected Keywords Targeting</li>
                                                    <h5>
                                                        <b>Technical Tools Setup</b>
                                                    </h5>
                                                    <li>Google Search Console</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Tag Manager</li>
                                                    <li>Bing Webmaster Tools</li>
                                                    <li>Google My Business</li>
                                                    <h5>
                                                        <b>Technical Audit &amp; Optimization</b>
                                                    </h5>
                                                    <li>HTTP Response Status Check</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>Fixing of Site Responsive Issues</li>
                                                    <li>Deep Crawling</li>
                                                    <li>Broken Links Fixing</li>
                                                    <li>Redirects</li>
                                                    <li>Too short/long Meta Tags</li>
                                                    <li>Broken Images</li>
                                                    <li>Index Tags</li>
                                                    <li>Conversion Tracking Check &amp; Setup</li>
                                                    <li>Setup Robots.txt</li>
                                                    <li>Plagiarism Check</li>
                                                    <h5>
                                                        <b>On Page Optimization</b>
                                                    </h5>
                                                    <li>Meta tag Optimization</li>
                                                    <li>Creation of Sitemap.XML</li>
                                                    <li>Heading Tags Optimized</li>
                                                    <li>Image Optimization</li>
                                                    <li>Content Optimization</li>
                                                    <li>Rich Snippets Optimization</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>5 Monthly Onsite Blogs</li>
                                                    <li>OG Tags Optimization</li>
                                                    <li>Robots Meta Tag Optimization</li>
                                                    <li>Canonical URLs Optimization</li>
                                                    <h5>
                                                        <b>Off Page Optimization</b>
                                                    </h5>
                                                    <li>Competitors Backlink Analysis</li>
                                                    <li>Social Bookmarking</li>
                                                    <li>Social Sharing</li>
                                                    <li>Directory Submissions</li>
                                                    <li>10 Business Listings Monthly</li>
                                                    <li>15 Profile Creation Monthly</li>
                                                    <li>2 Month Guest Posting Monthly</li>
                                                    <li>Forum Postings</li>
                                                    <li>6 Monthly Blog Submissions / Web 2.0</li>
                                                    <li>2 Monthly Infographic Submission / Image Sharing</li>
                                                    <li>2 Monthly Article Submissions</li>
                                                    <h5>
                                                        <b>Reporting</b>
                                                    </h5>
                                                    <li>Monthly Reporting</li>
                                                    <li>Email Support</li>
                                                    <li>Phone Support</li>
                                                </ul>
                                            </div>
                                            <a href="/">Buy Package</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="price-box">
                                            <div class="d-flex">
                                                <div class="price">
                                                    <h4 class="fw-bold">Professional</h4>
                                                    <span class="fw-bold fs-2">$750</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div class="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$1950</span> - Quarterly Plan</h6>
                                                        <h6><span>$600</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="slimScrollBar">
                                                <ul class="price-list">
                                                    <h5>
                                                        <b>Prior Analysis</b>
                                                    </h5>
                                                    <li>Initial Website Audit</li>
                                                    <li>Business Analysis</li>
                                                    <li>Consumer Analysis</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>50 Selected Keywords Targeting</li>
                                                    <h5>
                                                        <b>Technical Tools Setup</b>
                                                    </h5>
                                                    <li>Google Search Console</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Tag Manager</li>
                                                    <li>Bing Webmaster Tools</li>
                                                    <li>Google My Business</li>
                                                    <h5>
                                                        <b>Technical Audit &amp; Optimization</b>
                                                    </h5>
                                                    <li>HTTP Response Status Check</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>Fixing of Site Responsive Issues</li>
                                                    <li>Deep Crawling</li>
                                                    <li>Broken Links Fixing</li>
                                                    <li>Redirects</li>
                                                    <li>Too short/long Meta Tags</li>
                                                    <li>Broken Images</li>
                                                    <li>Index Tags</li>
                                                    <li>Conversion Tracking Check &amp; Setup</li>
                                                    <li>Setup Robots.txt</li>
                                                    <li>W3C Validation</li>
                                                    <li>Plagiarism Check</li>
                                                    <li>Orphan Pages and Link Analysis</li>
                                                    <h5>
                                                        <b>On Page Optimization</b>
                                                    </h5>
                                                    <li>Meta tag Optimization</li>
                                                    <li>Creation of Sitemap.XML</li>
                                                    <li>Heading Tags Optimized</li>
                                                    <li>Image Optimization</li>
                                                    <li>Content Optimization</li>
                                                    <li>Rich Snippets Optimization</li>
                                                    <li>Page Load Speed Optimization</li>
                                                    <li>8 Monthly Onsite Blogs</li>
                                                    <li>OG Tags Optimization</li>
                                                    <li>Robots Meta Tag Optimization</li>
                                                    <li>Canonical URLs Optimization</li>
                                                    <h5>
                                                        <b>Off Page Optimization</b>
                                                    </h5>
                                                    <li>Competitors Backlink Analysis</li>
                                                    <li>Social Bookmarking</li>
                                                    <li>Social Sharing</li>
                                                    <li>Directory Submissions</li>
                                                    <li>20 Business Listings Monthly</li>
                                                    <li>20 Profile Creation Monthly</li>
                                                    <li>5 Monthly Guest Posting</li>
                                                    <li>Forum Postings</li>
                                                    <li>9 Monthly Blog Submissions / Web 2.0</li>
                                                    <li>4 Monthly Infographic Submission / Image Sharing</li>
                                                    <li>4 Monthly Article Submissions</li>
                                                    <h5>
                                                        <b>Reporting</b>
                                                    </h5>
                                                    <li>Monthly Reporting</li>
                                                    <li>Email Support</li>
                                                    <li>Phone Support</li>
                                                </ul>
                                            </div>
                                            <a href="/">Buy Package</a>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={1} title="Tab 2">
                                <h4>Hello 2</h4>
                            </Tab>
                            <Tab eventKey={2} title="Tab 3">
                                <h4>Hello 3</h4>
                            </Tab>
                            <Tab eventKey={3} title="Tab 4">
                                <h4>Hello 4</h4>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PricingTabs