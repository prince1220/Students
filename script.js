///we have form with id="input-form"
const formEl = document.getElementById("input-form");
const tableEl = document.getElementById("student-info");
const students = []


formEl.addEventListener("submit",(event)=>{
    event.preventDefault(); ///prevent default refresh

    const firstName = event.target.fname.value;
    const lastName = event.target.lname.value;
    const grade = event.target.grade.value;

    if(students.find(el=>el.fname==firstName&&el.lname==lastName)){
        return;
    }

    students.push(
        {
            fname:firstName,
            lname:lastName,
            grade:grade
        }
    )

tableEl.innerHTML +=`
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${grade}</td>
</tr>
`

}) 