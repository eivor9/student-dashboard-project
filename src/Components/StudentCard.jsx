import "../styles/StudentCard.css";
import pfp from "./pfp.jpg"
import { useState } from "react";

export default function StudentCard({student}){

    const[showMoreInfo, setMoreInfo] = useState(false);
    const [comments, changeComments] = useState(student.notes);
    const [newComment, changeNewComment] = useState({commenter: "", comment: ""});
    
    function toggleMoreInfo(){
        setMoreInfo(!showMoreInfo);
    }
    function handleInputChange(event){
        changeNewComment({...newComment, [event.target.id]: event.target.value});
    }
    function handleSubmit(event){
        event.preventDefault();
        changeNewComment({commenter: newComment.commenter, comment: newComment.comment});
        let newComments = [];
        newComments.push(...comments);
        newComments.push(newComment);
        changeComments(newComments);
        console.log(event.target);
        resetForm();
    }
    function resetForm(){
        changeNewComment({commenter: "", comment: ""});
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
        <div className="card">
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
                            <p><span>Total:</span>{student.codewars.current.total}</p>
                            <p><span>Goal:</span>{student.codewars.goal.total}</p>
                            <p><span>%:</span>{Math.round(student.codewars.current.total/student.codewars.goal.total*100)}%</p>
                            <p><span className="too-big">LastWeek:</span>{student.codewars.current.lastWeek}</p>
                        </section>

                        <section className="scores">
                            <h2>Scores</h2>
                            <p><span>Labs:</span>{student.cohort.scores.assignments*100}%</p>
                            <p><span>Tests:</span>{student.cohort.scores.assessments*100}%</p>
                            <p><span className="too-big">Projects:</span>{student.cohort.scores.projects*100}%</p>
                        </section>

                        <section className="certifications">
                            <h2>Mastery</h2>
                            <p>Resume:{resume ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>Linkedin:{linkedin ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>Mock Int:{mockInterview ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                            <p>GitHub:{github ? <i style={{ color: currentColor }} className="fa-regular fa-thumbs-up"></i> : <i style={{ color: "red" }} className="fa-regular fa-thumbs-down"></i>}</p>
                        </section>
                    </div>
                    <div className="on1">
                        <h2>1-on-1 Notes</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="commenter">Intructor Name</label>
                            <input value={newComment.commenter} onChange={handleInputChange} id="commenter" type="text" />
                            <label htmlFor="comment">Comment</label>
                            <input value={newComment.comment} onChange={handleInputChange} id="comment" type="text" />
                            <button className="fa-solid fa-arrow-turn-down submit"></button>
                        </form>
                        <ul>
                            {comments.map(comment => {return <li key={comment.comment}>"{comment.comment}"<br/><p>-{comment.commenter}</p></li>})}
                        </ul>
                        <button onClick={toggleMoreInfo} className="less">Less</button>
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
                    <button onClick={toggleMoreInfo}  style={{ color: currentColor }} className="more">More</button>
                </>
            )}
        </div>
    );
}