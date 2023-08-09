import React, { useState } from 'react';

const Maps = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovered1(true);
        setIsHovered2(false);
    };

    const handleMouseOut1 = () => {
        setIsHovered1(false);
    };

    const handleMouseOver2 = () => {
        setIsHovered1(false);
        setIsHovered2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovered2(false);
    };
    const handleMouseOver3 = () => {
        setIsHovered3(true);
        setIsHovered4(false);
    };

    const handleMouseOut3 = () => {
        setIsHovered3(false);
    };

    const handleMouseOver4 = () => {
        setIsHovered3(false);
        setIsHovered4(true);
    };

    const handleMouseOut4 = () => {
        setIsHovered4(false);
    };
    return (
        <>
            <div className="text-center mb-3">
                <h2 className='fw-bold rand'>
                    Breaking Boundaries, Connecting Continents: <br /> Our Worldwide Service Network
                </h2>
            </div>
            <div className="parent mb-5">
                <div
                    className="child child1"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}
                >
                    {isHovered1 && <div className="hovered">
                        <p>
                            Rebel Design Solution exceeded our expectations, delivering a flawless blend of creativity and digital prowess that brought our brand to life. Highly satisfied!
                        </p>
                        <span>James</span>
                    </div>}
                </div>
                <div
                    className="child child2"
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}
                >
                    {isHovered2 && <div className="hovered">
                        <p>
                            Rebel Design Solution brought our vision to life with their exceptional web design and development expertise. Our online presence has never looked better!
                        </p>
                        <span>Mandy</span>
                    </div>}
                </div>
                <div
                    className="child child3"
                    onMouseOver={handleMouseOver3}
                    onMouseOut={handleMouseOut3}
                >
                    {isHovered3 && <div className="hovered">
                        <p>
                            Rebel Design Solution's SEO expertise boosted our website's visibility significantly, driving substantial traffic and business growth. Highly recommended!
                        </p>
                        <span>Sam</span>
                    </div>}
                </div>
                <div
                    className="child child4"
                    onMouseOver={handleMouseOver4}
                    onMouseOut={handleMouseOut4}
                >
                    {isHovered4 && <div className="hovered">
                        <p>
                            Rebel Design Solution's logo design perfectly captured our brand essence, leaving a lasting impression on our customers. Truly remarkable!
                        </p>
                        <span>Elwell</span>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Maps;
