import PursuitLogo from "./PursuitLogo";
import "../styles/NavContainer.css"

export default function NavContainer(){
    return (
        <div className="nav-container">
            <h1 className="title">Student Dashboard</h1>
            <nav>
                <button className="grad-class">
                    <PursuitLogo/><br/>
                    All
                </button>

                <button className="grad-class winter">
                    <i className="fa-regular fa-snowflake"></i><br/>
                    Winter<br/>2025
                </button>

                <button className="grad-class spring">
                    <i className="fa-solid fa-cloud-sun-rain"></i><br/>
                    Spring<br/>2025
                </button>

                <button className="grad-class summer">
                    <i className="fa-solid fa-sun"></i><br/>
                    Summer<br/>2025
                </button>

                <button className="grad-class fall">
                    <i className="fa-brands fa-canadian-maple-leaf"></i><br/>
                    Fall<br/>2025
                </button>

                <button className="grad-class winter">
                    <i className="fa-regular fa-snowflake"></i><br/>
                    Winter<br/>2026
                </button>

                <button className="grad-class spring">
                    <i className="fa-solid fa-cloud-sun-rain"></i><br/>
                    Spring<br/>2026
                </button>

                <button className="grad-class summer">
                    <i className="fa-solid fa-sun"></i><br/>
                    Summer<br/>2026
                </button>

                <button className="grad-class fall">
                    <i className="fa-brands fa-canadian-maple-leaf"></i><br/>
                    Fall<br/>2026
                </button>
            </nav>
        </div>
    );
}