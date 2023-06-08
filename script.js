function checkValidation(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('pswd');
    var captchaBox = document.getElementById('captcha');
    const captchaInput = document.getElementById('captchaInput');
    var atposition = email.value.indexOf("@");
    var dotposition = email.value.indexOf(".");
    
    if(/\d/.test(name.value) == true){
        alert("Name can't container any number");
    }
    else if(password.length < 8){
        alert("Password must contain 8 characters");
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.value.length){
        alert("please enter a valid email address");
    }
    else if(captchaInput.value != captchaBox.value){
        alert("Captcha is wrong");
    }
    else{
        if(confirm("Your form is submitted succesfully")){
            document.location.reload();
        } 
        
    }
}

function generateCaptcha(){
    var captchaBox = document.getElementById('captcha');
    const str = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    let code = "";
    for(i=0; i<6; i++){
        code += str.charAt(Math.random() * str.length);
    }
    captchaBox.value = code; 
}

generateCaptcha();