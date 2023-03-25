import { useEffect, useState } from "react";
import Rates from "./Rates";
import Conversions from "./Conversions";
const NavBar = ({ rates }) => {
  const [tab, setCurrentTab] = useState("");

  const ShowRates = () => {
    setCurrentTab("Current Rates");
  };

  const ShowConversions = () => {
    setCurrentTab("Conversions");
  };

  return (
    <>
      <section className="sticky-top container">
        {/* <!-- Makes a navbar (at lg sizes and above)   --> */}
        <nav className="navbar navbar-static-top navbar-expand-lg navbar text-dark py-3">
          {/* <!-- Keeping the navbar in a container helps with padding --> */}
          <div className="container-fluid">
            <h2>
              <a
                href=""
                data-testid="title"
                className="navbar-brand display-1 fs-1 fw-bold"
              >
                Crypto Conversion
              </a>
            </h2>

            <button
              className="navbar-toggler text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Allows navbar to collapse (disappear) --> */}
            <div className="collapse navbar-collapse" id="navmenu">
              {/* <!-- Actual navbar text --> */}
              <ul className="navbar-nav ms-auto ps-5">
                <li className="nav-item fs-2 px-3">
                  <button onClick={ShowRates} className="nav-link">
                    Current Rates
                  </button>
                </li>

                <li className="nav-item fs-2 px-3">
                  <button onClick={ShowConversions} className="nav-link">
                    Conversions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <p> {tab} </p>
      </section>{" "}
      {/** End of Navbar Section*/}
      <div className="container justify-content-center">
        {tab == "Current Rates" && <Rates rates={rates}></Rates>}

        {tab == "Conversions" && <Conversions rates2={rates}></Conversions>}

        {/* Make Conversions component */}
      </div>
    </>
  );
};

export default NavBar;
