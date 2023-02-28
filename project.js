var name = prompt("Please enter your first name:");
document.getElementById("fname").innerHTML = name;

var txt;
if(confirm("Press OK if you are Male and Cancel if you are Female.")){
    txt = "Male"
}else{
    txt = "Female"
}
document.getElementById("gender").innerHTML= txt;

var uname = prompt("Please input your username:");
document.getElementById("username").innerHTML = uname;

var desc = prompt("Describe yourself.");
document.getElementById("desc").innerHTML = desc;

var daybirth = prompt("What year were you born?");
document.getElementById("year").innerHTML = daybirth;
var age = 2023-daybirth;
document.getElementById("age").innerHTML = age;

var profile = prompt("Please attach your image to the folder and type the file name here. File attached or not, please press OK.");
if(profile == null||profile == ""){
    document.getElementById("ppic").src = "butyouarebeautiful.png";
} else{
    document.getElementById("ppic").src = profile;
}
