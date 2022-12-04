import React, { useState } from "react"
import API from "../../../axios/axios"
import { send, data } from "../../../axios/firebaseSend"
import { createAbout } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar.jsx";

export const AboutAdmin = () => {
    const [fullName, setFullName] = useState("")
    const [job, setJob] = useState("")
    const [birthday, setBirthday] = useState("")
    const [website, setWebsite] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")
    const [degree, setDegree] = useState("")
    const [email, setEmail] = useState("")
    const [interesting, setInteresting] = useState("")
    const [telegramLink, setTelegramLink] = useState("")
    const [facebookLink, setFacebookLink] = useState("")
    const [instagramLink, setInstagramLink] = useState("")
    const [linkedinLink, setLinkedin] = useState("")
    const [desctrition, setDesctrition] = useState("")
    const [image, setImage] = useState("")

    function  AboutSubmit() {
        send(image)
        setTimeout (() => {
            let img = data.pop()
            if (
                fullName.trim() !== "" &&
                job.trim() !== "" &&
                birthday.trim() !== "" &&
                website.trim() !== "" &&
                phone.trim() !== "" &&
                city.trim() !== "" &&
                age.trim() !== "" &&
                degree.trim() !== "" &&
                email.trim() !== "" &&
                interesting.trim() !== "" &&
                telegramLink.trim() !== "" &&
                facebookLink.trim() !== "" &&
                instagramLink.trim() !== "" &&
                linkedinLink.trim() !== "" &&
                desctrition.trim() !== "" &&
                img.trim() !== ""
             ) {
                API.post(createAbout, {
                    "fullName" : fullName,
                    "job": job,
                    "birthday": birthday,
                    "website": website,
                    "phone": phone,
                    "city": city,
                    "age": age,
                    "degree": degree,
                    "email": email,
                    "interesting": interesting,
                    "telegramLink": telegramLink,
                    "facabookLink": facebookLink,
                    "instagramLink": instagramLink,
                    "linkedinLink": linkedinLink,
                    "description": desctrition,
                    "image": img,
                })
                    .then(res => alert("Sucessfull"))
                    .catch(err => alert("Error"))
            }
        }, 3000) 
    }

    return (
        <>
            <AdminNavbar />
            <div className="col-lg-12 mt-5 py-5">
                <div  className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setFullName(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Job</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setJob(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Birthday</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setBirthday(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Website</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setWebsite(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Phone</label>
                            <input type="number" className="form-control"
                                   onChange={({target}) => setPhone(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your City</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setCity(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Age</label>
                            <input type="number" className="form-control"
                                   onChange={({target}) => setAge(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Degree</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setDegree(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Email</label>
                            <input type="email" className="form-control"
                                   onChange={({target}) => setEmail(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Interesting</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setInteresting(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Telegram Link</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setTelegramLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Facebook Link</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setFacebookLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Instagram Link</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setInstagramLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Linkedin Link</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setLinkedin(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Desctrition</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setDesctrition(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Image</label>
                            <input type="file" className="form-control"
                                   onChange={({target}) => setImage(target.files[0])}
                            />
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="text-center" onClick={() => AboutSubmit()}>
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 