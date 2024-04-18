import "../styles/StudentCard.css";
import pfp from "./pfp.jpg"
import { useState } from "react";

export default function StudentCard({student}){

    const[showMoreInfo, setMoreInfo] = useState(false);
    
    function toggleMoreInfo(){
        setMoreInfo(!showMoreInfo);
    }


    return(
        <div className="card" onClick={toggleMoreInfo}>
            {showMoreInfo ? (
                <>
                    <div className="contact">
                        <img className="more-pic" src={student.profilePhoto} alt="" />
                        <p className="more-contact">
                            {student.names.preferredName} {student.names.surname}<br/>
                            <span>{student.username}</span>
                        </p>
                    </div>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                    <p>More Info</p>
                </>
            )
            : (
                <>
                    <img className="pic" src={student.profilePhoto} alt="" />
                    <p className="name">{student.names.preferredName} {student.names.surname}</p>
                    <p className="email">{student.username}</p>
                    <p className="dob">{student.dob}</p>
                    <button className="more">More</button>
                </>
            )}
        </div>
    );
}