import { useEffect, useState } from "react"
import API from "../axios/axios"
import { allTestimonial } from "../axios/url"
import TestimonialDetail from "../components/TestimonialDetail"

function Testimonials() {
    const [testimonial, setTestimonial] = useState([])
    const [count, setCount] = useState({ start: 0, finish: 1 })
    useEffect(() => {
        API.get(allTestimonial).then(res => setTestimonial(res.data))
    }, [])
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>
                        I've added a testimonials section to my portfolio for you guys to comment on. I hope you will not be indifferent. Please leave a comment when you visit the site.
                    </p>
                </div>

                <div className="testimonials-carousel">
                    {
                        testimonial.filter((item, index) => index >= count.start && index <= count.finish).map((data) => (
                            <TestimonialDetail data={data} key={Math.random()} />
                        ))
                    }

                </div>
                <div className="text-center">
                    <button
                        onClick={() => {
                            setCount(count.start > 0 ? { start: count.start -= 2, finish: count.finish -= 2} : { start: 0, finish: 1 })
                        }}
                    >
                        {count.start + 1} <i className="fas fa-long-arrow-alt-left"></i>
                    </button>

                    <button
                        onClick={() => {
                            setCount(testimonial.length % 2 === 0 ? testimonial.length - 1 > count.finish ? { start: count.start += 2, finish: count.finish += 2 } : { start: 0, finish: 1 } : testimonial.length > count.finish ? { start: count.start += 2, finish: count.finish += 2 } : { start: 0, finish: 1 })
                        }}
                    >
                        <i className="fas fa-long-arrow-alt-right"></i> {testimonial.length > count.finish ? count.finish + 1 : ""}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials