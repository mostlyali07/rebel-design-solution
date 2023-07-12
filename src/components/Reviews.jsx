import Review_img from "../Images/main-reviews.png";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = ({ CustomerNameOne, CustomerDescOne, CustomerNameTwo, CustomerDescTwo, CustomerNameThree, CustomerDescThree }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="review-back">
                <div className="container py-5">
                    <div className="row py-5 revi-bor">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img src={Review_img} />
                        </div>
                        <div className="col-md-6 rev-slide">
                            <Slider {...settings}>
                                <div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h4>{CustomerNameOne}</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="stars text-end">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>
                                                {CustomerDescOne}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h4>{CustomerNameTwo}</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="stars text-end">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>
                                                {CustomerDescTwo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h4>{CustomerNameThree}</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="stars text-end">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>
                                                {CustomerDescThree}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews