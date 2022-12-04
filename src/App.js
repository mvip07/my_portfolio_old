import "./css/bootstrap.css"
import "./css/style.css"
import { Route, Routes, } from "react-router-dom"
import axios from "axios"

import API from "./axios/axios"
import { allView, createView } from "./axios/url"

import Main from "./pages/MAIN"
import AdminMain from "./admin/pages/ADMINMAIN";
import AboutAdmin from "./admin/pages/about/ADDABOUT";
import EducationAdmin from "./admin/pages/education/ADDEDUCATION";
import SkillAdmin from "./admin/pages/skill/ADDSKILL";
import PortfolioAdmin from "./admin/pages/portfolio/ADDPORTFOLIO";
import ExperienceAdmin from "./admin/pages/experience/ADDEXPERIENCE";
import About from "./admin/pages/about/ABOUT";
import Education from "./admin/pages/education/EDUCATION";
import Skill from "./admin/pages/skill/SCKILL";
import Portfolio from "./admin/pages/portfolio/PORTFOLIO";
import Experience from "./admin/pages/experience/EXPERIENCE";

import UpdateAbout from "./admin/pages/about/EDITABOUT";
import UpdateEducation from "./admin/pages/education/EDITEDUCATION";
import UpdateSkills from "./admin/pages/skill/EDITSKILL";
import UpdatePortfolio from "./admin/pages/portfolio/EDITPORTFOLIO";
import UpdateExperience from "./admin/pages/experience/EDITEXPERIENCE";

function App() {

    let bool = true
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        
        const view = API.get(allView)
        
        for (let i of (await view).data) if (i.ip === res.data.IPv4) bool = false
        
        if (bool === true) API.post(createView, {"ip": res.data.IPv4})         
    }
    
    getData()
  
    return (
            <Routes>
                <Route path="/" element={<Main />} />
        
                <Route path="/about/admin" element={<About />} />
                <Route path="/about/create/admin" element={<AboutAdmin /> } />
                <Route path="/about/update/admin" element={<UpdateAbout />} />
        
        
                <Route path="/education/admin" element={<Education />} />
                <Route path="/education/create/admin" element={<EducationAdmin />} />
                <Route path="/education/update/admin/:id" element={<UpdateEducation />} />
        
        
                <Route path="/skill/admin" element={<Skill />} />
                <Route path="/skill/create/admin" element={<SkillAdmin />} />
                <Route path="/skill/update/admin/:id" element={<UpdateSkills />} />
        
                <Route path="/portfolio/admin" element={<Portfolio />} />
                <Route path="/portfolio/create/admin" element={<PortfolioAdmin />} />
                <Route path="/portfolio/update/admin/:id" element={<UpdatePortfolio />} />
        
                <Route path="/experience/admin" element={<Experience />} />
                <Route path="/experience/create/admin" element={<ExperienceAdmin />} />
                <Route path="/experience/update/admin/:id" element={<UpdateExperience/>} />

                <Route path="/admin" element={<AdminMain />} />
            </Routes>
    )
}

export default App