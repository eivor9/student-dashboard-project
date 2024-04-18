import pfp from "./pfp.jpg"
import "../styles/StudentList.css"
import StudentCard from "./StudentCard";

export default function StudentList({students}){

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