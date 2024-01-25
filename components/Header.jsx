import React from "react"

function Header() {
    return (
        <header>
            <h1>Kevin Molid</h1>
            <h2>Frontend Developer</h2>
            <a href="#">www.kevinmolid.netlify.app</a>
            <div className="header--btn-wrapper">
                <button className="header--btn">
                    <i className="fa-solid fa-envelope"></i>Email
                </button>
                <button className="header--btn linkedin-btn">
                    <i className="fa-brands fa-linkedin"></i>LinkedIn
                </button>
            </div>
        </header>
    )
}

export default Header