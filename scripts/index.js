let navbar =()=>{
    let card= `<div id= "nav-cont">
            <a href="">Mini Quiz App</a >
    <div id="navLinks">
    <a href="index.html">Home</a>
    <a href="quiz.html">Quiz</a>
    <a href="questions.html">Questions</a>

    </div>
    </div>`
    document.getElementById("nav").innerHTML=card;
}
navbar()

let form1=function getData(){
let form= document.getElementById("form").innerHTML
form.addEventListener(("click"),()=>{
    let email=document.getElementById("email").innerHTML;
    let newemail="empher@gmail.com";
    let pass=document.getElementById("password").innerHTML;
    let newpasss="empher@123";
    if(email===newemail && pass===newpasss){
     alert("Login Success, you are redirecting to quiz page")
    } else{
        alert("Something went wrong")
    }
    window.location.quiz.html.innerHTML
})
}
getData()