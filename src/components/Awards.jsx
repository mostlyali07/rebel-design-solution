import { Link } from "react-router-dom";
import Award1 from "../Images/Award-1.png";
import Award2 from "../Images/Award-2.png";
import Award3 from "../Images/Award-3.png";
import Award4 from "../Images/Award-4.png";
import Award5 from "../Images/Award-5.png";
import Award6 from "../Images/trustpilot.png";


const Awards = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row text-center">
                    <h2 className="fw-bold fs-2">Awards</h2>
                    <div className="Awards col-md-12 d-flex justify-content-evenly text-center flex-wrap">
                        <img src={Award1} />
                        <img src={Award2} />
                        <img src={Award3} />
                        <Link to="https://www.trustpilot.com/review/rebeldesignsolution.com" target="_blank" >
                            <img src={Award6} />
                        </Link>
                        <Link to="https://clutch.co/profile/rebel-design-solution" target="_blank">
                            <img src={Award4} />
                        </Link>
                        <img src={Award5} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards