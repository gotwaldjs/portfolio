






















































































































// The Masters Password Protection
function datVisPassword() {
var testV = 1;
var pass1 = prompt('To view this project, please contact me ( Jeffrey.Gottwald@gmail.com ) to recieve the password',' ');
while (testV < 3) {
if (!pass1)
location.reload('index.html');
if (pass1.toLowerCase() == "12345") {
window.open('datavis.html');
break;
}
testV+=1;
var pass1 =
prompt('Password is incorect. Please contact me at jeffrey.gottwald@gmail.com to get the password, or try agian','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
location.reload('index.html');
return " ";
document.getElementById('erasable').innerHTML = "";

}






