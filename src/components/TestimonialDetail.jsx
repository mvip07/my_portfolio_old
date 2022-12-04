function TestimonialDetail ({ data }) {
    return (
        <div className="testimonial-item" >
            <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {data.message}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            {
                data.image !== null ? <img src={data.image} className="testimonial-img" alt="testimonial-img" /> : ""
            }
            <h3>{data.name}</h3>
            <h4>{data.subject}</h4>
        </div>
    )
}

export default TestimonialDetail