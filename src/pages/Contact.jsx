import React from 'react'
import "../sass/contact.scss"
const Contact = () => {
    return (
        <div className='contactBox'>
            <h1>Contact Us</h1>
            <div className="container row">
                <div className="leftcontact col-md-9">
                    <form>
                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="subject" placeholder="Subject" />
                        </div>
                        <button type="submit" className=" btn btn-outline-info">Submit</button>
                    </form>

                </div>
                <div className="rightcontact col-md-3">
                    <div className="contactinfo">
                        <div className="leftinfo">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div className="rightinfo">
                            <p>Azerbaijan,Baku</p>
                            <span>Zahid Khalilov 112</span>
                        </div>
                    </div>
                    <div className="contactinfo">
                        <div className="leftinfo">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="rightinfo">
                            <p>0511121212</p>
                            <span>Mon to Fri 9am to 6pm</span>
                        </div>
                    </div>
                    <div className="contactinfo">
                        <div className="leftinfo">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className="rightinfo">
                            <p>Support@gmail.com</p>
                            <span>Send us your query anytime!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
