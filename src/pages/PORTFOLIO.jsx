import { useEffect, useState } from "react"
import API from "../axios/axios"
import { allPortfolio } from "../axios/url"
import PortfolioDetail from "../components/PortfolioDetail"

function Portfolio() {
    const [postfolio, setPortfolio] = useState([])
    const [categoryType, setCategoryType] = useState("DP")
    useEffect(() => {
        API.get(allPortfolio).then(res => setPortfolio(res.data))
    }, [categoryType])

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>
                        Big and small projects I have done so far. In it I used technologies like HTML, CSS, Sass, Bootstrap, JavaScript, React js, Node js Express js, and Mongo Db. In addition, in the near future I will make large projects using technologies such as Redux, Vue js, Python and Java.
                    </p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li onClick={() => setCategoryType("DP")} className={`${categoryType === "DP" ? "filter-active" : ""}`}>All</li>
                            <li onClick={() => setCategoryType("LP")} className={`${categoryType === "LP" ? "filter-active" : ""}`}>Layout Project</li>
                            <li onClick={() => setCategoryType("RP")} className={`${categoryType === "RP" ? "filter-active" : ""}`}>Real Project</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {
                        postfolio.filter((item) => categoryType === "DP" ? item : item.category === categoryType).map((data) => (
                            <PortfolioDetail data={data} key={Math.random()}/>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default Portfolio