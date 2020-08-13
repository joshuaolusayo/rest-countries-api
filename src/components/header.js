import React from 'react';

const switchTheme = function () {
    let trans = () => {
        document.documentElement.classList.add("transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("transition");
        }, 400)
    }

    if (document.documentElement.getAttribute("data-theme") === "light") {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }

    
}

const Header = () => {
    return (
        <header className="bg shadow">
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <h5 className="text-color mb-0">Where in the world?</h5>
                <div className="switchBtn text-color d-flex align-items-center">
                    <i className="fa fa-moon-o" aria-hidden="true" onClick={switchTheme}></i>&nbsp;<label className="my-0" htmlFor="Current mode">Dark mode</label>
                </div>
            </div>
        </header>
    )
}

export default Header;