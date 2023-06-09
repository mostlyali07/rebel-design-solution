import React, { useState } from 'react';

const Maps = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis consequatur asperiores fugit.
                        </p>
                        <span>Mary Elizabeth Lim</span>
                    </div>}
                </div>
                <div
                    className="child child2"
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}
                >
                    {isHovered2 && <div className="hovered">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis consequatur asperiores fugit.
                        </p>
                        <span>Betty Robinson</span>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Maps;
