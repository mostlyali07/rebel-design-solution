import { Helmet } from 'react-helmet';

const TermsConditionsPage = () => {
    return (
        <Helmet>
            <title>Terms and Conditions | Rebel Design Solution</title>
            <meta name="description" content="Read and understand the terms and conditions that govern your use of Rebel Design Solution's services. By accessing our website, you agree to comply with these terms." />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing" />

            <link rel="canonical" href="https://rebeldesignsolution.com/terms-and-conditions" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/terms-and-conditions"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/terms-and-conditions"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/terms-and-conditions"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/terms-and-conditions"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Terms and Conditions | Rebel Design Solution"
            />
            <meta
                property="og:description"
                content="Read and understand the terms and conditions that govern your use of Rebel Design Solution's services. By accessing our website, you agree to comply with these terms."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/terms-and-conditions" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/terms-and-conditions" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Terms and Conditions | Rebel Design Solution"
            />
            <meta
                name="twitter:description"
                content="Read and understand the terms and conditions that govern your use of Rebel Design Solution's services. By accessing our website, you agree to comply with these terms."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};

const TermsConditions = () => {
    return (
        <>
            <TermsConditionsPage />
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold'>
                                    Privacy <span style={{ color: '#222222' }}>Policy</span>
                                </h1>
                                <h2>
                                    Welcome to Rebel Design Solution
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                       
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default TermsConditions