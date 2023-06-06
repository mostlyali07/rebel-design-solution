import React from 'react'
import Client1 from "../Images/client01.png"
import Client2 from "../Images/client02.png"
import Client3 from "../Images/client03.png"
import Client4 from "../Images/client04.png"

const VertForm = () => {
    return (
        <>
            <div className='heighs d-flex justify-content-center align-items-center mt-3'>
                <div>

                    <form className="vert-form form-get-quote">
                        <input type="text" placeholder="YOUR NAME" name="quote[name]" className="input-feilds" required />

                        <input type="email" placeholder="YOUR EMAIL" name="quote[email]" className="input-feilds" required />

                        <input type="tel" placeholder="YOUR PHONE" name="quote[phone]" className="input-feilds" required />

                        <input type="text" placeholder="YOUR WEBSITE" name="quote[website]" className="input-feilds" required />

                        <button className="btns-one">ANALYZE</button>
                    </form>

                    <div className="mt-3 d-flex justify-content-center flex-wrap">
                        <img src={Client1} alt="client01" />
                        <img src={Client2} alt="client01" />
                        <img src={Client3} alt="client01" />
                        <img src={Client4} alt="client01" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VertForm