import { useState } from "react"
import API from "../axios/axios"
import { comeimages, send } from "../axios/firebaseSend"
import { createTestimonial } from "../axios/url"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")
    const [validates, setValiDates] = useState(0)

    function TestimonialSubmit() {
        send(image)
        setTimeout(() => {
            if (
                name.trim() !== "" &&
                email.trim() !== "" &&
                subject.trim() !== "" &&
                message.trim() !== ""
            ) {
                API.post(createTestimonial, {
                    "name": name,
                    "email": email,
                    "subject": subject,
                    "message": message,
                    "image": image === "" ? null : comeimages,
                }).then(res => {
                        alert ("Sucessfull")
                    }).catch(err => alert("Error"))
            }
        }, 3000)
    }
    
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Here on the left is the information that belongs to me. On the right side, there is a place for you to leave a comment. Please don't forget to leave a comment.</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4>Location:</h4>
                                <p>Uzb. Tashkent Shayx. </p>
                            </div>

                            <div className="email">
                                <i className="fas fa-envelope"></i>
                                <h4>Email:</h4>
                                <p>ozodovmirabzal07@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="fas fa-phone-alt"></i>
                                <h4>Call:</h4>
                                <p>+998 91 166 21 25</p>
                            </div>

                            <iframe
                                src=" https://www.google.com/maps/embed?=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1064!13!4!f 1m2!1s0x0%3A0xb89d1fe6bc499443!2sShahar markazi+Konferentsiya+markazi!5e0!3m2!1smk!2sbg!4v1539943755621 "
                                frameBorder="0" style={{ border: "0", width: "100%", height: "290px" }} allowFullScreen="" title="myFrame">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <div className="php-email-form">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className={`form-control ${validates === 1 ? "validate" : ""}`}
                                        placeholder="minimum 3 letters for example (ozodov)"
                                        onChange={({ target }) => {
                                            target?.value?.length.trim() >= 3 ? validates === 1 ? setValiDates(0) : setName(target.value) : setValiDates(1)
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className={`form-control ${validates === 2 ? "validate" : ""}`}
                                        placeholder="minimum 10 letters for example (ozodovmirabzal07@gmail.com)"
                                        onChange={({ target }) => {
                                            target?.value?.trim().length >= 10 ? validates === 2 ? setValiDates(0) : setEmail(target.value) : setValiDates(2)
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className={`form-control ${validates === 3 ? "validate" : ""}`}
                                        placeholder="minimum 5 letters for example (Web Desinger)"
                                        onChange={({ target }) => {
                                            target?.value?.trim().length >= 5 ? validates === 3 ? setValiDates(0) : setSubject(target.value) : setValiDates(3)
                                        }}
                                    />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="name">Message</label>
                                    <textarea type="text" className={`form-control ${validates === 4 ? "validate" : ""}`}
                                        placeholder="minimum 20 letters for example (Hello Mirafzal.How are you ?)"
                                        onChange={({ target }) => {
                                            target?.value?.trim().length >= 20 ? validates === 4 ? setValiDates(0) : setMessage(target.value) : setValiDates(4)
                                        }}
                                    />
                                </div>

                                <div className="form-group col-md-12 form-file">
                                    <label htmlFor="name" className="label-file">Image</label>
                                    <input type="file" className="form-control" title="Image" text="Image"
                                        onChange={({ target }) => setImage(target.files[0])}
                                    />
                                </div>
                            </div>
                            <div className="text-center" onClick={() => TestimonialSubmit()}>
                                <button type="Submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact