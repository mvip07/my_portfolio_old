import { useState } from "react"

function ToggleBtn() {
    const hours = new Date().getHours()
    const [btn, setBtn] = useState(hours <= 12 ? true : false)
    const body = document.querySelector("body")
    body.classList.toggle(`${btn === false ? "dark" : "light"}`)
    return (
        <div className="toggle">
            <button type="button" className="mobile-nav-toggle-on-off"></button>
        </div>
    )
}

export default ToggleBtn