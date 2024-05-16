let emailId=document.getElementById("exampleInputEmail1");
let password=document.getElementById("exampleInputPassword1");
let button=document.getElementById("submit")

let UserName=document.getElementById("userName")


let userData=JSON.parse(localStorage.getItem("data"));




button.addEventListener("click",()=>{
    
    for(var i=0;i<=userData.length-1;i++){
       if(userData[i].eId==emailId.value && userData[i].password==password.value){
        
             var gmail=userData[i].eId
             var inputPassword=userData[i].password;
             var Name=userData[i].uName
        }
      }
      if(emailId.value==gmail && password.value==inputPassword){
        sessionStorage.setItem("UsersName",JSON.stringify(Name))
        alert("LogIn successfully");
        window.open("user.html");
        
        
      }else{
        alert("Enter valid Gmail or Password")
      }
  
})


