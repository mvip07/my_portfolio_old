function Hero ({user}) {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <img src={user?.image} alt=""/>
            <div className="hero-container" data-aos="fade-in">
                <h1>{user?.fullName}</h1>
                <p>I'm <span className="typed">{user?.job}</span></p>
            </div>
        </section>
    )
}

export default Hero