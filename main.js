
const button = document.querySelector("#btn").addEventListener("click",Validate);


function Validate(){
var mail= document.getElementById("text");
var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var errmsg = document.querySelector("#err-msg");
var errimg = document.querySelector("#err-img");
if(mail.value.match(regx)){
    mail.value = "success!";  
    mail.style.border = "1px solid hsl(0, 36%, 70%)"; 
    errmsg.classList.add("error");
    errimg.classList.add("error");

    return true;
} else {
    mail.style.border = "2px solid red";
    errmsg.classList.remove("error");
    errimg.classList.remove("error");
    return false;
 }
}

