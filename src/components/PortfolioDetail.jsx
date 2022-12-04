function PortfolioDetail ({ data }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-css" key={Math.random()}>
            <div className="portfolio-wrap">
                <img src={data?.image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                    <a href={data?.githubUrl} target="block" className="venobox"><i className="fab fa-github"></i></a>
                    <a href={data?.serverUrl} target="block" title="More Details"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail