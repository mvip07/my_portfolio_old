import { useState, useEffect } from "react"

import API from "../axios/axios"

import About from "./ABOUT"
import Header from "./HEADER"
import Resume from "./RESUME"
import Portfolio from "./PORTFOLIO"
import Contact from "./CONTACT"
import Hero from "./HERO"
import Skills from "./SKILLS"
import Facts from "./FACTS"
import Testimonials from "./TESTIMONIALS"

import Footer from "../components/Footer"
import ToggleBtn from "../components/Button"
import { allAbout } from "../axios/url"

function Main() {
    const [about, setAbout] = useState([])
    useEffect(() => {
        API.get(allAbout).then(res => {
            setAbout(...res.data)
        })
    }, [])

    return (
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
    )
}

export default Main