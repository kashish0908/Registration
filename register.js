function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var city = document.getElementById("city").value;
var number= document.getElementById("number").value;
if(username=="" || city=="" || number==""|| number.length <10 || number.length > 10)
{
    alert("Invalid data");
    return false;
}
if(password=="" || password.length <= 5)
{
    alert("Enter strong password");
    return false;

}

else
{
    alert("Registration Sucessfull");
    return true;
}


}
