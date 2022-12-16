import React, { useState } from "react"
import API from "../../../axios/axios"
import { comeimages, send } from "../../../axios/firebaseSend"
import { createPortfolio } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar";

function PortfolioAdmin () {
    const [category, setCategory] = useState("")
    const [githubUrl, setGithubUrl] = useState("")
    const [serverUrl, setServerUrl] = useState("")
    const [image, setImage] = useState("")

    function PortfolioSubmit() {
        send(image)
        setTimeout(() => {
            if (
                category.trim() !== "" &&
                githubUrl.trim() !== "" &&
                serverUrl.trim() !== "" &&
                comeimages.trim() !== ""
            ) {
                API.post(createPortfolio, {
                    "category": category,
                    "githubUrl": githubUrl,
                    "serverUrl": serverUrl,
                    "image": comeimages,
                })
                    .then(res => alert("Sucessfull"))
                    .catch(err => alert("Error"))
            }
        }, 3000)
    }
    return (
        <>
            <AdminNavbar />
            <div className="col-lg-12 col-md-12 mt-5 py-5">
                <div className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Category</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setCategory(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Git Hub Link</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setGithubUrl(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Server Link</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setServerUrl(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Image</label>
                            <input type="file" className="form-control"
                                   onChange={({target}) => setImage(target.files[0])}
                            />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="text-center" onClick={() => PortfolioSubmit()}>
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
} 

export default PortfolioAdmin