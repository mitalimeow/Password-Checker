const make = document.getElementById("make");
make.onclick=function(){
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    const length = document.getElementById("input").value;
    const gen = document.getElementById("gen");
    const check = document.getElementsByClassName("check");

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const num = "0123456789"
    const symb = "!@#$%^&*()_+=-/"
    
    let allowedcharas="";
    let password="";

    if(uppercase.checked){
        allowedcharas+=upper;
    }
    if(lowercase.checked){
        allowedcharas+=lower;
    }
    if(number.checked){
        allowedcharas+=num;
    }
    if(symbol.checked){
        allowedcharas+=symb;
    }
    

    for(let i=0;i<length;i++){
        let ind = Math.floor(Math.random()*allowedcharas.length)
        password+=allowedcharas.charAt(ind);
    }
    
    if(password.length===0 ){
        password="Please enter a password length and characters to add!"
    }
    
    gen.textContent=password;

}


