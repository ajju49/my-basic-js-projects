function login()
{ 
    var uname=document.getElementById('username').value;
    var pname=document.getElementById('password').value;
    
    if (uname=="ajnk49" && pname=="12345")
    {
        location.assign("http://127.0.0.1:5500/login%20page%202.html");
    }
    else if(uname=="nitu49" && pname=="123")
    {
        location.assign("http://127.0.0.1:5500/login%20psage%202.html");
    }
    else 
    {
        alert("Login Failed");
    }

}