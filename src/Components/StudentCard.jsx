import "../styles/StudentCard.css";
import pfp from "./pfp.jpg"
import { useState } from "react";

export default function StudentCard({student}){

    const[showMoreInfo, setMoreInfo] = useState(false);
    
    function toggleMoreInfo(){
        setMoreInfo(!showMoreInfo);
    }

    const {resume, linkedin, github, mockInterview} = student.certifications;
    
    const cohortColors = {
        Winter2025: "rgb(70, 113, 144)",
        Spring2025: "rgb(78, 153, 78)",
        Summer2025: "rgb(157, 157, 0)",
        Fall2025: "rgb(148, 96, 0)",
        Winter2026: "rgb(70, 113, 144)",
        Spring2026: "rgb(78, 153, 78)",
        Summer2026: "rgb(157, 157, 0)",
        Fall2026: "rgb(148, 96, 0)"
    };

    const currentColor = cohortColors[student.cohort.cohortCode];
    const onTrack = resume && linkedin && github && mockInterview;

    return(
        <div className="card" onClick={toggleMoreInfo}>
            {showMoreInfo ? (
                <>
                    <div className="contact">
                        <img className="more-pic" src={student.profilePhoto} alt="" />
                        <p className="more-contact">
                            {student.names.preferredName} {student.names.surname}<br/>
                            <span style={{ color: currentColor }} >{student.username}</span>
                        </p>
                    </div>
                    <div className="stats">
                        <section className="codewars">
                            <h2>Codewars</h2>
                            <p>Total: {student.codewars.current.total}</p>
                            <p>Prev Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>% of goal: {Math.round(student.codewars.current.total/student.codewars.goal.total*100)}%</p>
                        </section>

                        <section className="scores">
                            <h2>Scores</h2>
                            <p>Labs: {student.cohort.scores.assignments*100}%</p>
                            <p>Projects: {student.cohort.scores.projects*100}%</p>
                            <p>Tests: {student.cohort.scores.assessments*100}%</p>
                        </section>

                        <section className="certifications">
                            <h2>Certs</h2>
                            <p>Resume: {resume ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>Linkedin: {linkedin ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>Mock Int: {mockInterview ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>GitHub: {github ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                        </section>
                    </div>
                </>
            )
            : (
                <>
                    {onTrack ? <p style={{ color: currentColor, textAlign: "right" }}>On Track</p> : null}
                    <img className="pic" src={student.profilePhoto} alt="" />
                    <p className="name">{student.names.preferredName} {student.names.surname}</p>
                    <p  style={{ color: currentColor }} className="email">{student.username}</p>
                    <p className="dob">{student.dob}</p>
                    <button  style={{ color: currentColor }} className="more">More</button>
                </>
            )}
        </div>
    );
}