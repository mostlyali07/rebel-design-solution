import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const PricingTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabSelect = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <Tabs activeKey={activeTab} onSelect={handleTabSelect} className="custom-tabs">
                            <Tab eventKey={0} title="Search Engine Optimization (SEO)">
                                <div className="row mt-2 mb-4">
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Essential</h4>
                                                    <span className="fw-bold fs-3">$299</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$799</span> - Quarterly Plan</h6>
                                                        <h6><span>$249</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
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
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Standard</h4>
                                                    <span className="fw-bold fs-3">$499</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$1399</span> - Quarterly Plan</h6>
                                                        <h6><span>$449</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
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
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Professional</h4>
                                                    <span className="fw-bold fs-3">$749</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6><span>$1949</span> - Quarterly Plan</h6>
                                                        <h6><span>$599</span> - Recurring</h6>
                                                        <h6>Monthly Payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
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
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={1} title="Social Media Marketing (SMM)">
                                <div className="row mt-2 mb-4">
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Essential</h4>
                                                    <span className="fw-bold fs-3">$300</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$800</del> </h6>
                                                        <h6 className="qutr-plane fw-bold">$750 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>12/Month Unique Social Media Content Posting</li>
                                                    <li>Social Media Analysis</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Post Design Scheduling</li>
                                                    <li>Profile Keyword Optimization - 3 Keywords</li>
                                                    <li>Performance Report</li>
                                                    <li>2 Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Standard</h4>
                                                    <span className="fw-bold fs-3">$400</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$1100</del> </h6>
                                                        <h6 className="qutr-plane fw-bold">$1000 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>20/Month Unique Social Media Content Posting</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>Community Management</li>
                                                    <li>Page Moderation</li>
                                                    <li>Social Media Strategy</li>
                                                    <li>Page Monitoring &amp; Responding</li>
                                                    <li>Social Media Analysis</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Post Design Scheduling</li>
                                                    <li>Profile Keyword Optimization - 6 Keywords</li>
                                                    <li>Performance Report</li>
                                                    <li>4 Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Professional</h4>
                                                    <span className="fw-bold fs-3">$500</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$1400</del> </h6>
                                                        <h6 className="qutr-plane fw-bold">$1200 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>40/Month Unique Social Media Content Posting</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>Community Management</li>
                                                    <li>Page Moderation</li>
                                                    <li>Page Moderation</li>
                                                    <li>Page Monitoring &amp; Responding</li>
                                                    <li>Social Media Analysis</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Post Design Scheduling</li>
                                                    <li>Profile Keyword Optimization - 8 Keywords</li>
                                                    <li>Performance Report</li>
                                                    <li>Unlimited Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="Pro Marketing Plans">
                                <div className="row mt-2 mb-4">
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Essential</h4>
                                                    <span className="fw-bold fs-3">$649</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$1799</del></h6>
                                                        <h6 className="qutr-plane fw-bold">$1699 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>15 Focused Keywords</li>
                                                    <li>Onsite Optimization</li>
                                                    <li>Complete Website Content Optimization</li>
                                                    <li>2/Month (800 word count) On Page Blogs</li>
                                                    <li>Meta Tags</li>
                                                    <li>2/Month (500 word count) Off page blogs</li>
                                                    <li>Total 15 Business listing</li>
                                                    <li>2 Web 2.0</li>
                                                    <li>2 Infographics</li>
                                                    <li>2 Guest Posting</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Business Profile Optimization</li>
                                                    <h5><strong>SMA (Social Media Advertisement)</strong></h5>
                                                    <li>Facebook Shop Creation</li>
                                                    <li>Lead Form Creation</li>
                                                    <li>Likes, Followers, Subscribers - 1000 Likes on 1 one platform</li>
                                                    <li>Facebook Ad Campaign Optimization</li>
                                                    <li>Facebook Ads A/B Testing</li>
                                                    <li>Social Media listing</li>
                                                    <li>Facebook Ad Campaigns</li>
                                                    <li>Tracking Setup</li>
                                                    <h5><strong>SMM (Social Media Management)</strong></h5>
                                                    <li>12/Month Unique Social Media Content Posting</li>
                                                    <li>Social Media Analysis &amp; Performance Report</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Progress Reporting</li>
                                                    <li>Post Design Scheduled</li>
                                                    <li>Profile Keyword Optimization - 3 Keywords</li>
                                                    <li>2 Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Standard</h4>
                                                    <span className="fw-bold fs-3">$1099</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$3599</del> </h6>
                                                        <h6 className="qutr-plane fw-bold">$2999 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>20 Focused Keywords</li>
                                                    <li>Onsite Optimization</li>
                                                    <li>Complete Website Content Optimization</li>
                                                    <li>4/Month (1000 word count) On Page Blogs</li>
                                                    <li>Meta Tags</li>
                                                    <li>4/Month (500 word count) Off page blogs</li>
                                                    <li>20 Business listing</li>
                                                    <li>2 Web 2.0</li>
                                                    <li>4 Infographics</li>
                                                    <li>2 Guest Posting</li>
                                                    <li>2 Press Release</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Business Profile Optimization</li>
                                                    <h5><strong>SMA (Social Media Advertisement)</strong></h5>
                                                    <li>Video Promo</li>
                                                    <li>Facebook Shop Creation</li>
                                                    <li>Lead Form Creation</li>
                                                    <li>Likes, Followers, Subscribers - 2000 Likes on 2 platforms</li>
                                                    <li>Facebook Ad Campaign Optimization</li>
                                                    <li>Facebook Ads A/B Testing</li>
                                                    <li>Social Media Listing</li>
                                                    <li>Facebook Ad Campaigns</li>
                                                    <li>Tracking Setup</li>
                                                    <h5><strong>SMM (Social Media Management)</strong></h5>
                                                    <li>20/Month Unique Social Media Content Posting</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>Community Management</li>
                                                    <li>Page Moderation</li>
                                                    <li>Social Media Strategy</li>
                                                    <li>Page Monitoring &amp; Responding</li>
                                                    <li>Social Media Analysis &amp; Performance Report</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Progress Reporting</li>
                                                    <li>Post Design Scheduled</li>
                                                    <li>Profile Keyword Optimization - 6 Keywords</li>
                                                    <li>4 Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Professional</h4>
                                                    <span className="fw-bold fs-3">$1999</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>
                                                        <h6 className="fw-bold">Was <del>$5999</del> </h6>
                                                        <h6 className="qutr-plane fw-bold">$5699 - 3 Month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>25-30 Focused Keywords</li>
                                                    <li>Onsite Optimization</li>
                                                    <li>Complete Website Content Optimization</li>
                                                    <li>6/Month (1000 word count) On Page Blogs</li>
                                                    <li>Meta Tags</li>
                                                    <li>4/Month (600 word count) Off page blogs</li>
                                                    <li>30 Business listing</li>
                                                    <li>4 Web 2.0</li>
                                                    <li>6 Infographics</li>
                                                    <li>4 Guest Posting</li>
                                                    <li>4 Press Release</li>
                                                    <li>Google Analytics</li>
                                                    <li>Google Business Profile Optimization</li>
                                                    <h5><strong>SMA (Social Media Advertisement)</strong></h5>
                                                    <li>2 Video Promo</li>
                                                    <li>Facebook Shop Creation</li>
                                                    <li>Lead Form Creation</li>
                                                    <li>Likes, Followers, Subscribers - 5000 Likes on 4 Platforms</li>
                                                    <li>Facebook Ad Campaign Optimization</li>
                                                    <li>Facebook Ads A/B Testing</li>
                                                    <li>Social Media listing</li>
                                                    <li>Facebook Ad Campaigns</li>
                                                    <li>Tracking Setup</li>
                                                    <h5><strong>SMM (Social Media Management)</strong></h5>
                                                    <li>40/Month Unique Social Media Content Posting</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>Community Management</li>
                                                    <li>Page Moderation</li>
                                                    <li>Social Media Strategy</li>
                                                    <li>Page Monitoring &amp; Responding</li>
                                                    <li>Social Media Analysis &amp; Performance Report</li>
                                                    <li>Page Optimization</li>
                                                    <li>Social Media Marketing Plan</li>
                                                    <li>Progress Reporting</li>
                                                    <li>Post Design Scheduled</li>
                                                    <li>Profile Keyword Optimization - 8 Keywords</li>
                                                    <li>Unlimited Platforms</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={3} title="Website Design and Development">
                                <div className="row mt-2 mb-4">
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Essential</h4>
                                                    <span className="fw-bold fs-3">$150</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>2-3 Pages Website</li>
                                                    <li>02 Stock Images</li>
                                                    <li>03 Banner Designs</li>
                                                    <li>All Browser Compatibility</li>
                                                    <li>Complete W3C Certified HTML</li>
                                                    <li>Google Friendly Sitemap</li>
                                                    <li>NO MONTHLY/YEARLY FEE</li>
                                                    <h5>
                                                        <b>Features</b>
                                                    </h5>
                                                    <li>Dedicated Project Manager</li>
                                                    <li>48 to 72 hours TAT</li>
                                                    <li>Complete Deployment</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Standard</h4>
                                                    <span className="fw-bold fs-3">$500</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">

                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>3-5 Pages Website</li>
                                                    <li>Conceptual Interactive Design</li>
                                                    <li>08 Stock Images</li>
                                                    <li>05 Banner Design</li>
                                                    <li>1 jQuery Slider Banner</li>
                                                    <li>All Browser Compatibility</li>
                                                    <li>Complete W3C Certified HTML</li>
                                                    <li>Google Friendly Sitemap</li>
                                                    <li>Contact/Query Form</li>
                                                    <li>NO MONTHLY/YEARLY FEE</li>
                                                    <h5>
                                                        <b>Features</b>
                                                    </h5>
                                                    <li>Dedicated Project Manager</li>
                                                    <li>48 to 72 hours TAT</li>
                                                    <li>Complete Deployment</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price-box mt-4 middle-tab">
                                            <div className="d-flex">
                                                <div className="price">
                                                    <h4 className="fw-bold">Professional</h4>
                                                    <span className="fw-bold fs-3">$700</span><br /> <span style={{ color: "#fff", fontSize: " 14px" }}>
                                                        First Month Payment</span>
                                                </div>
                                                <div className="priceplans d-flex align-items-center">
                                                    <div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="slimScrollBar">
                                                <ul className="price-list">
                                                    <li>5-10 Pages Website</li>
                                                    <li>Conceptual Interactive Design</li>
                                                    <li>12 Stock Images</li>
                                                    <li>08 Banner Design</li>
                                                    <li>1 jQuery Slider Banner</li>
                                                    <li>All Browser Compatibility</li>
                                                    <li>Complete W3C Certified HTML</li>
                                                    <li>Google Friendly Sitemap</li>
                                                    <li>Contact/Query Form</li>
                                                    <li>Search Engine Submission</li>
                                                    <li>Mobile Responsive</li>
                                                    <li>NO MONTHLY/YEARLY FEE</li>
                                                    <h5>
                                                        <b>Features</b>
                                                    </h5>
                                                    <li>Dedicated Project Manager</li>
                                                    <li>48 to 72 hours TAT</li>
                                                    <li>Complete Deployment</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </div>
                                            <div className="text-center marg-min">
                                                <a href="/" className='btn btn-dark rounded-pill btn-lg'>Buy Package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PricingTabs