let userName = document.getElementById("Name")
let emailId = document.getElementById("gmail")
let password1 = document.getElementById("createPassword")

let password2 = document.getElementById("confirmPassword")
let button = document.getElementById("submit");

let passwordLength = document.getElementById("Plength");
let passwordSpecialCase = document.getElementById("PSpecialCase");
let passwordUpper = document.getElementById("PUpperCase");
let passwordLower = document.getElementById("PLowerCase");
let passworDigit = document.getElementById("PDigit")

let UserEmail = document.getElementById("EmialVerification");
let passwordMatch = document.getElementById("PassWordMatching");
let userAllDetails = document.getElementById("EnterAllDetails");


userName.addEventListener("input",()=>{
      UserEmail.innerHTML ="";
      passwordMatch.innerHTML ="";
      userAllDetails.innerHTML="";
      passwordLength.style.color="";
      passwordSpecialCase.style.color ="";
      passwordUpper.style.color="";
      passwordLower.style.color="";
      passworDigit.style.color =""
})

emailId .addEventListener("input",()=>{
      UserEmail.innerHTML ="";
      passwordMatch.innerHTML ="";
      userAllDetails.innerHTML="";
      passwordLength.style.color="";
      passwordSpecialCase.style.color ="";
      passwordUpper.style.color="";
      passwordLower.style.color="";
      passworDigit.style.color =""
})

password1 .addEventListener("input",()=>{
      UserEmail.innerHTML ="";
      passwordMatch.innerHTML ="";
      userAllDetails.innerHTML="";
      passwordLength.style.color="";
      passwordSpecialCase.style.color ="";
      passwordUpper.style.color="";
      passwordLower.style.color="";
      passworDigit.style.color =""
})

password2.addEventListener("input",()=>{
      UserEmail.innerHTML ="";
      passwordMatch.innerHTML ="";
      userAllDetails.innerHTML="";
      passwordLength.style.color="";
      passwordSpecialCase.style.color ="";
      passwordUpper.style.color="";
      passwordLower.style.color="";
      passworDigit.style.color =""
})




let userArr = [];
let getUser = localStorage.getItem("data");
const user = JSON.parse(getUser)

//  userArr=[... user];
if (user) {
      userArr = [...user];

}



button.addEventListener("click", () => {

      if (userName.value != "" && emailId.value != "" && password1.value != "" && password2.value != "") {
            userAllDetails.innerHTML = ""

            var email = /\S+@\S+\.\S+/                      // emial regular expression  ==> /\S+@\S+\.\S+/
            if (email.test(emailId.value) == true) {
                  UserEmail.innerHTML = ""

                  for (var i = 0; i < userArr.length; i++) {
                        console.log(userArr[i])
                        if (emailId.value == userArr[i].eId) {
                              var m = userArr[i].eId
                        }
                  }
                  if (emailId.value != m) {
                        UserEmail.innerHTML = ""
                        let theLength = /.{8,12}/
                        let specialCase = /[^A-za-z0-9]/
                        let upperCase = /[A-Z]/
                        let lowerCase = /[a-z]/
                        let digits = /[0-9]/

                        p1 = password1.value
                        if (theLength.test(p1) && specialCase.test(p1) && upperCase.test(p1) && lowerCase.test(p1) && digits.test(p1)) {



                              if (p1 == password2.value) {
                                    alert("Register successfully")
                                    passwordMatch.innerHTML = ""
                                    let userData = {
                                          uName: userName.value,
                                          eId: emailId.value,
                                          password: password1.value
                                    }



                                    userArr.push(userData);
                                    localStorage.setItem("data", JSON.stringify(userArr))
                                    window.open("LogIn.html")







                              } else {
                                    passwordMatch.innerHTML = "<span style=color:red>Password Does Not Match</span>"
                              }





                        } else {
                              p1 = password1.value
                              theLength.test(p1) ? passwordLength.style.color = "green" : passwordLength.style.color = "red";
                              specialCase.test(p1) ? passwordSpecialCase.style.color = "green" : passwordSpecialCase.style.color = "red"
                              upperCase.test(p1) ? passwordUpper.style.color = "green" : passwordUpper.style.color = "red";
                              lowerCase.test(p1) ? passwordLower.style.color = "green" : passwordLower.style.color = "red";
                              digits.test(p1) ? passworDigit.style.color = "green" : passworDigit.style.color = "red";
                        }
                  } else {
                        UserEmail.innerHTML = "<span  style=color:red >This email already exists</span>"
                  }


            } else {
                  UserEmail.innerHTML = "<span style=color:red>Enter Proper Emial</span>"
            }
      } else {
            userAllDetails.innerHTML = "<span style=color:red>Enter All User Details</span>"
      }

})
