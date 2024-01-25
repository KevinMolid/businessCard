import React from "react"

function Header() {
    return (
        <header>
            <h1>Kevin Molid</h1>
            <h2>Frontend Developer</h2>
            <a href="#">www.kevinmolid.netlify.app</a>
            <div className="header--btn-wrapper">
                <a href="mailto: kevinmolid@gmail.com">
                    <button className="header--btn">
                        <i className="fa-solid fa-envelope"></i>Email
                    </button>
                </a>
                <a href="http://www.linkedin.com/in/kevin-molid" target="_blank">
                    <button className="header--btn linkedin-btn">
                        <i className="fa-brands fa-linkedin"></i>LinkedIn
                    </button>
                </a>
            </div>
        </header>
    )
}

export default Header