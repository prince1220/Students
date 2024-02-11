///we have form with id="input-form"
const formEl = document.getElementById("input-form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault(); ///prevent default refresh

    const firstName = event.target.fname.value;
    const lastName = event.target.lname.value;
    const grade = event.target.grade.value;

    result.innerHTML=firstName+" "+lastName+" "+grade
})