import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faSquarePollVertical, faCode, faPenNib, faBullhorn, faThumbsUp, faSignature, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AllServices = ({
    mainText,
    serOne,
    serTwo,
    serThree,
    serFour,
    serFive,
    serSix,
    serSeven,
    serEight,
    desOne,
    desTwo,
    desThree,
    desFour,
    desFive,
    desSix,
    desSeven,
    desEight,
    srcOne,
    srcTwo,
    srcThree,
    srcFour,
    srcFive,
    srcSix,
    srcSeven,
    srcEight
}) => {
    return (
        <>
            <div className="container py-5 your-animation-class">
                <div className="row">
                    <h2 className='fw-bold text-center pb-4'>
                        {mainText}
                    </h2>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcOne}>
                            <div className="flip-box flip-box-orange">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faPenNib} />
                                            <h4 className='fw-bold'>
                                                {serOne}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desOne}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcTwo}>
                            <div className="flip-box flip-box-black">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faSquarePollVertical} />
                                            <h4 className='fw-bold'>
                                                {serTwo}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desTwo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcThree}>
                            <div className="flip-box flip-box-orange">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faCode} />
                                            <h4 className='fw-bold'>
                                                {serThree}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desThree}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcFour}>
                            <div className="flip-box flip-box-black">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                            <h4 className='fw-bold'>
                                                {serFour}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desFour}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcFive}>
                            <div className="flip-box flip-box-black">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faBullhorn} />
                                            <h4 className='fw-bold'>
                                                {serFive}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desFive}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcSix}>
                            <div className="flip-box flip-box-orange">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <h4 className='fw-bold'>
                                                {serSix}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desSix}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcSeven}>
                            <div className="flip-box flip-box-black">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faSignature} />
                                            <h4 className='fw-bold'>
                                                {serSeven}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desSeven}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Link to={srcEight}>
                            <div className="flip-box flip-box-orange">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front d-flex align-items-center justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faSquarePen} />
                                            <h4 className='fw-bold'>
                                                {serEight}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flip-box-back d-flex align-items-center">
                                        <p>
                                            {desEight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AllServices