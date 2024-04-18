import PursuitLogo from "./PursuitLogo";
import "../styles/Main.css"
import { useState } from "react";
import StudentList from "./StudentList";
import students from "../data/data.json"

export default function Main(){

    const [code, changeCode] = useState("20");
    let filteredStudents = students.filter(student => student.cohort.cohortCode.includes(code));

    function selectCohort (cohortCode){
        changeCode(cohortCode);
    }

    return (
        <>
            <div className="nav-container">
                <h1 className="title">Student Dashboard</h1>
                <nav>
                    <button onClick={() => selectCohort("20")} className="grad-class">
                        <PursuitLogo/><br/>
                        All
                    </button>

                    <button onClick={() => selectCohort("Winter2025")} className="grad-class winter">
                        <i className="fa-regular fa-snowflake"></i><br/>
                        Winter<br/>2025
                    </button>

                    <button onClick={() => selectCohort("Spring2025")} className="grad-class spring">
                        <i className="fa-solid fa-cloud-sun-rain"></i><br/>
                        Spring<br/>2025
                    </button>

                    <button onClick={() => selectCohort("Summer2025")} className="grad-class summer">
                        <i className="fa-solid fa-sun"></i><br/>
                        Summer<br/>2025
                    </button>

                    <button onClick={() => selectCohort("Fall2025")} className="grad-class fall">
                        <i className="fa-brands fa-canadian-maple-leaf"></i><br/>
                        Fall<br/>2025
                    </button>

                    <button onClick={() => selectCohort("Winter2026")} className="grad-class winter">
                        <i className="fa-regular fa-snowflake"></i><br/>
                        Winter<br/>2026
                    </button>

                    <button onClick={() => selectCohort("Spring2026")}  className="grad-class spring">
                        <i className="fa-solid fa-cloud-sun-rain"></i><br/>
                        Spring<br/>2026
                    </button>

                    <button onClick={() => selectCohort("Summer2026")}  className="grad-class summer">
                        <i className="fa-solid fa-sun"></i><br/>
                        Summer<br/>2026
                    </button>

                    <button onClick={() => selectCohort("Fall2026")}  className="grad-class fall">
                        <i className="fa-brands fa-canadian-maple-leaf"></i><br/>
                        Fall<br/>2026
                    </button>
                </nav>
            </div>
            <StudentList students={filteredStudents}/>
        </>
    );
}