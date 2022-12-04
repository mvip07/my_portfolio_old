import { Link } from "react-router-dom"

function Footer () {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; My <strong><span>Git hub</span></strong>
                </div>
                <div className="credits">
                    link: <Link to="https://github.com/mirabzal-07" target="_block">Git hub link</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer