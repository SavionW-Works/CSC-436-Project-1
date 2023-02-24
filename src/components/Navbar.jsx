const NavBar = () => {
    return <>
        <section className="sticky-top">

            {/* <!-- Makes a navbar (at lg sizes and above)   --> */}
            <nav className="navbar navbar-expand-lg navbar text-dark py-3">

                {/* <!-- Keeping the navbar in a container helps with padding --> */}
                <div className="container">
                    <h2>
                        <a href="" className="navbar-brand display-1 fs-1">Crypto Conversion</a>
                    </h2>


                    <button
                        className="navbar-toggler text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Allows navbar to collapse (disappear) --> */}
                    <div className="collapse navbar-collapse" id="navmenu">

                        {/* <!-- Actual navbar text --> */}
                        <ul className="navbar-nav ms-auto ps-5">

                            <li className="nav-item fs-2">
                                <a href="" className="nav-link">Link</a>
                            </li>

                            <li className="nav-item fs-2">
                                <a href="" className="nav-link">Link</a>
                            </li>

                            <li className="nav-item fs-2">
                                <a href="" className="nav-link">Link</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </section> {/** End of Navbar Section*/}

    </>
}

export default NavBar