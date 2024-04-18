import students from "../data/data.json";

function selectCohort(code){
    return students.filter(student => student.cohort.cohortCode.includes(code));
}
let filteredStudents = selectCohort();
export default filteredStudents