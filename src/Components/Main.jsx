import pfp from "./pfp.jpg"
import "../styles/Main.css"
import students from "../data/data.json"
import StudentCard from "./StudentCard";

export default function Main(){
    console.log(students[0]);
    let cards = [];
    for(let i = 0; i < 100; i++){
        cards.push(
            <div key={i} className="card">
                <img src={pfp} alt="" />
                <p className="name">Walter White</p>
                <p className="email">wwhite@albufsd.edu</p>
                <p className="dob">Aug 23, 1969</p>
                <button className="more">More</button>
            </div>
        );
    }

    return (
        <main>
            {
                students.map(student =>{
                    return <StudentCard key={student.id} student={student}/>
                })
            }
        </main>
    );
}