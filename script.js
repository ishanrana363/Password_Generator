const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";
const pLength = document.getElementById("p-length"),
uppercase = document.getElementById("p-uppercase"),
lowercase = document.getElementById("p-lowercase"),
pNumber = document.getElementById("p-number"),
pSymbol = document.getElementById("p-symbol"),
password = document.getElementById("password"),
copy = document.getElementById("copy"),
submit = document.getElementById("submit")
let initialPass = ""
submit.addEventListener("click",checkReq)
copy.addEventListener("click",click2copy)
function checkReq() {
  lowercase?.checked ? (initialPass += uCase) : "";
  lowercase?.checked ? (initialPass += lCase) : "";
  pNumber?.checked ? (initialPass += number) : ""; 
  pSymbol?.checked ? (initialPass += symbol) : "";

  password.value = generatePass(initialPass, pLength?.value)
}

function generatePass(initialPass, l) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPass.charAt(Math.floor(Math.random() * initialPass.length))
  }
  return pass;
}

function click2copy(){
  if(password==""){
    alert("Please generate a password first")
  }else{
    password.select();
    document.execCommand("copy");
    alert("password has been copy")
  }
}