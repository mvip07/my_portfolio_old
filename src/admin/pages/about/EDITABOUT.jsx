import React, { useEffect, useState } from "react"
import API from "../../../axios/axios"
import { send, data } from "../../../axios/firebaseSend"
import { allAbout, updateAbout } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar";

function UpdateAbout () {

    const [all, setAll] = useState({})
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

    useEffect(() => {
        API.get(allAbout)
            .then(res => setAll(...res.data))
            .catch(err => alert("Error"))
    }, [])

    function AboutSubmit() {
        send(image)
        let img = data.pop()
        setTimeout(() => {
            API.post(`${updateAbout}/${all?._id}`, {
                "fullName": fullName.trim() === "" ? all.fullName : fullName,
                "job": job.trim() === "" ? all.job : job,
                "birthday": birthday.trim() === "" ? all.birthday : birthday,
                "website": website.trim() === "" ? all.website : website,
                "phone": phone.trim() === "" ? all.phone : phone,
                "city": city.trim() === "" ? all.city : city,
                "age": age.trim() === "" ? all.age : age,
                "degree": degree.trim() === "" ? all.degree : degree,
                "email": email.trim() === "" ? all.email : email,
                "interesting": interesting.trim() === "" ? all.interesting : interesting,
                "telegramLink": telegramLink.trim() === "" ? all.telegramLink : telegramLink,
                "facabookLink": facebookLink.trim() === "" ? all.facabookLink : facebookLink,
                "instagramLink": instagramLink.trim() === "" ? all.instagramLink : instagramLink,
                "linkedinLink": linkedinLink.trim() === "" ? all.linkedinLink : linkedinLink,
                "description": desctrition.trim() === "" ? all.description : desctrition,
                "image": image === "" ? all.image : img,
            })
                .then(res => alert("Sucessfull"))
                .catch(err => alert("Error"))
        }, 3000)
    }

    return (
        <>
            <AdminNavbar />
            <div className="col-lg-12 col-md-12 mt-5 py-5">
                <div className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" className="form-control" defaultValue={all.fullName}
                                   onChange={({ target }) => setFullName(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Job</label>
                            <input type="text" className="form-control" defaultValue={all.job}
                                   onChange={({ target }) => setJob(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Birthday</label>
                            <input type="text" className="form-control" defaultValue={all.birthday}
                                   onChange={({ target }) => setBirthday(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Website</label>
                            <input type="text" className="form-control" defaultValue={all.website}
                                   onChange={({ target }) => setWebsite(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Phone</label>
                            <input type="number" className="form-control" defaultValue={all.phone}
                                   onChange={({ target }) => setPhone(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your City</label>
                            <input type="text" className="form-control" defaultValue={all.city}
                                   onChange={({ target }) => setCity(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Age</label>
                            <input type="number" className="form-control" defaultValue={all.age}
                                   onChange={({ target }) => setAge(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Degree</label>
                            <input type="text" className="form-control" defaultValue={all.degree}
                                   onChange={({ target }) => setDegree(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Email</label>
                            <input type="email" className="form-control" defaultValue={all.email}
                                   onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Interesting</label>
                            <input type="text" className="form-control" defaultValue={all.interesting}
                                   onChange={({ target }) => setInteresting(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Telegram Link</label>
                            <input type="text" className="form-control" defaultValue={all.telegramLink}
                                   onChange={({ target }) => setTelegramLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Facebook Link</label>
                            <input type="text" className="form-control" defaultValue={all.facabookLink}
                                   onChange={({ target }) => setFacebookLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Instagram Link</label>
                            <input type="text" className="form-control" defaultValue={all.instagramLink}
                                   onChange={({ target }) => setInstagramLink(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Linkedin Link</label>
                            <input type="text" className="form-control" defaultValue={all.linkedinLink}
                                   onChange={({ target }) => setLinkedin(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Desctrition</label>
                            <input type="text" className="form-control" defaultValue={all.description}
                                   onChange={({ target }) => setDesctrition(target.value)}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Old Image</label>
                            <br />
                            <img src={all.image} alt="" width="200px"/>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Your Image</label>
                            <input type="file" className="form-control"
                                   onChange={({ target }) => setImage(target.files[0])}
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

export default UpdateAbout