import FAQs from "../Images/FAQs.jpg"


const Faqs = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="tilt-container">
                            <img src={FAQs} className="img-faq tilt-image" alt="Rebel" width={450} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Q: What differentiates Rebel Design Solution from other design and marketing agencies?</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A: At Rebel Design Solution, we embrace a rebellious spirit that fuels our creativity and innovative approach. We go beyond the ordinary, pushing the boundaries of design and marketing to deliver extraordinary results that leave a lasting impression. Our team of visionary designers, digital experts, and content connoisseurs are passionate about challenging the status quo and crafting remarkable brand experiences.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Q: What industries do you specialize in?</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A: We cater to a diverse range of industries, including but not limited to technology, fashion, hospitality, e-commerce, and healthcare. Our team's expertise allows us to adapt to various sectors and deliver tailored solutions that align with each industry's unique needs and objectives.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>Q: How do you ensure effective communication and collaboration throughout the project?
                                        </strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A: Communication is key to our success. We prioritize open and transparent communication with our clients, ensuring we understand their vision, goals, and preferences. Our project management systems facilitate seamless collaboration, allowing real-time updates, feedback, and a shared understanding of project milestones and progress.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>Q: Can you handle both small and large-scale projects?</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A: Absolutely! We have experience working with businesses of all sizes, from startups to established enterprises. Our team is equipped to handle projects of various scales, offering customized solutions tailored to each client's unique requirements and budgets.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>  Q: What is your approach to delivering measurable results?</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A: We believe in data-driven strategies and continuous improvement. Our approach combines creativity with analytics to ensure our efforts generate tangible results. We establish key performance indicators (KPIs) at the start of each project and regularly monitor and analyze metrics to measure the impact of our design and marketing efforts. This data-driven approach allows us to make data-backed decisions and optimize campaigns for significant ROI.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs