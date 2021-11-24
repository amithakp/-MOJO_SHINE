
// ************************working**********************
function customerId(){
    var cId =`ZIU${Math.floor(Math.random()*1000000)}`
    document.getElementById('cId').value =cId
} 
function validForm() {
    var firstName =document.getElementById('fName').value;
    var lastName =document.getElementById('lName').value;
    var phonenum =document.getElementById('phone').value;
    var pass =document.getElementById('pwd').value
    var cPass=document.getElementById('cpwd').value;
    var Email=document.getElementById('email').value;
    var fNameError =document.getElementById('fout');
    var lNameError =document.getElementById('lout');
    var phoneError =document.getElementById('pout');
    var passError =document.getElementById('pwout');
    var cPassError=document.getElementById('cpout');
    var eError=document.getElementById('eout');
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var fFlag=0;
    var lFlag=0,eFlag=0,eeFlag=0;
    var mFlag=0;
    var pFlag=0,cpFlag=0,ppFlag=0,plFlag=0;
    validatePwd()
            if (firstName.trim().length==0){
                fNameError.innerHTML="Please Enter First Name";
                document.getElementById('fName').style.borderColor = "red"; 
                fNameError.style.display = 'block';
                fFlag=1
            }
            else {
                fNameError.innerHTML=""
                document.getElementById('fName').style.borderColor="green";
                firstName= firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase()
                document.getElementById('fName').value=firstName;
              
            }
            if(lastName.trim().length==0){
                lNameError.innerHTML="Please Enter Last Name";
                document.getElementById('lName').style.borderColor = "red"; 
                lNameError.style.display = 'block';
                lFlag=1
            }
            else{
                lNameError.innerHTML="";
                document.getElementById('lName').style.borderColor = "green";
                lastName= lastName.charAt(0).toUpperCase()+lastName.slice(1).toUpperCase()
                document.getElementById('lName').value=lastName;   
            }if(Email.trim().length==0){
                eError.innerHTML="Please Enter Valid Email";
                document.getElementById('email').style.borderColor = "red"; 
                eError.style.display = 'block';
                eFlag=1
            }else if(Email.match(pattern)){
                eError.innerHTML="Email is valid";
                eError.style.color="green";
                document.getElementById('email').style.borderColor = "green";
                eeFlag=1
            }
            if(phonenum.trim().length==0){
                phoneError.innerHTML="Please Enter Mobile Number";
                document.getElementById('phone').style.borderColor = "red"; 
                phoneError.style.display = 'block';
                mFlag=1
            }
            else{
                phoneError.style.display ='none';
                document.getElementById('phone').style.borderColor = "green";
                
            }if(pass.trim().length==0){
                passError.innerHTML="Please Enter Password";
                document.getElementById('pwd').style.borderColor = "red"; 
                passError.style.display = 'block';
                pFlag=1
            }
            else{
                passError.innerHTML="";
                document.getElementById('pwd').style.borderColor = "green";
            }
            if(cPass.trim().length==0){
                cPassError.innerHTML="Please Reenter Password"
                document.getElementById("cpwd").style.borderColor="red";
                cPassError.style.display = 'block';
                cpFlag=1;
            }else if(pass !== cPass){
                cPassError.innerHTML="Password Does't Match"
                document.getElementById("cpwd").style.borderColor="red";
                cpFlag=1;
            }else{
                cPassError.innerHTML=""
                document.getElementById("cpwd").style.borderColor="green";
            }
            if(fFlag==0 && lFlag==0 && eeFlag==1  && mFlag==0 && ppFlag==0 && cpFlag==0){
                document.getElementById('fSuccess').style.display ="block";
                document.getElementsByClassName('panel-heading')[0].style.backgroundColor="green";
                document.getElementById('fError').style.display ="none";
            }else{
                document.getElementById('fSuccess').style.display ="none";
                document.getElementById('fError').style.display ="block";
                document.getElementsByClassName('panel-heading')[0].style.backgroundColor="red";
            }
} 
    //    to show the password 

function showPassword(){
    var pass=document.getElementById('pwd');
    if(pass.type =='password'){
        pass.type="text"
    }else{
        pass.type="password"
    }
}
function validatePwd(){
    var pass= document.getElementById('pwd').value;
    var passError=document.getElementById('pwout');
    var passClr=document.getElementById('ppwout');
    if(pass.length<15){
        if(pass.length<8){
            passError.innerHTML="Min Length Of Password Is 8";
            passClr.style.display="block";
            passClr.style.backgroundColor="red";
            document.getElementById('pwd').style.borderColor ="red";
            ppFlag=1;
        }
        else if(pass.length<15){
            passError.innerHTML="";
            passClr.style.display="block";
            passClr.style.backgroundColor="green";
            document.getElementById('pwd').style.borderColor ="green";
           ppFlag=0;
        }
    }else{
        passError.innerHTML="Max Length Of Password Is 15";
        passClr.style.backgroundColor="orange";
        document.getElementById('pwd').style.borderColor="orange";
        ppFlag=1;
    }

}   

