import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor__cursor");
        const cursorinner = document.querySelector(".custom-cursor__cursor-two");
        const links = document.querySelectorAll("a");

        const handleMouseMove = (e) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            cursorinner.style.left = e.clientX + "px";
            cursorinner.style.top = e.clientY + "px";
        };

        const handleMouseDown = () => {
            cursor.classList.add("click");
            cursorinner.classList.add("custom-cursor__innerhover");
        };

        const handleMouseUp = () => {
            cursor.classList.remove("click");
            cursorinner.classList.remove("custom-cursor__innerhover");
        };

        const handleLinkMouseOver = () => {
            cursor.classList.add("custom-cursor__hover");
        };

        const handleLinkMouseLeave = () => {
            cursor.classList.remove("custom-cursor__hover");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        links.forEach((link) => {
            link.addEventListener("mouseover", handleLinkMouseOver);
            link.addEventListener("mouseleave", handleLinkMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);

            links.forEach((link) => {
                link.removeEventListener("mouseover", handleLinkMouseOver);
                link.removeEventListener("mouseleave", handleLinkMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="custom-cursor__cursor"></div>
            <div className="custom-cursor__cursor-two"></div>
        </>
    );
};

export default CustomCursor;
