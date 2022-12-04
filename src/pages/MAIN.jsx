import { useState, useEffect } from "react"

import API from "../axios/axios"

import About from "./ABOUT.jsx"
import Header from "./HEADER.jsx"
import Resume from "./RESUME.jsx"
import Portfolio from "./PORTFOLIO.jsx"
import Contact from "./CONTACT.jsx"
import Hero from "./HERO.jsx"
import Skills from "./SKILLS.jsx"
import Facts from "./FACTS.jsx"
import Testimonials from "./TESTIMONIALS.jsx"

import Footer from "../components/Footer.jsx"
import ToggleBtn from "../components/Button.jsx"
import Loader from "../components/Loader.jsx"

import { allAbout } from "../axios/url.jsx"

function Main() {
    const [about, setAbout] = useState([])
    const [aboutReq, setAboutReq] = useState(false)
    useEffect(() => {
        API.get(allAbout).then(res => {
            setAbout(...res.data)
            setAboutReq(true)
        })
    }, [])

    return (
        <div>
            {
                aboutReq === true ?
                    <div>
                        <ToggleBtn />
                        <Hero user={about}/>
                        <Header user={about} />
                        <About user={about}/>
                        <Facts />
                        <Skills />
                        <Resume />
                        <Portfolio />
                        <Testimonials />
                        <Contact />
                        <Footer />
                    </div>
                        :
                    <Loader />
            }
        </div>
    )
}

export default Main