var newuser_form = document.getElementById("show-new-user-form");
var olduser_form = document.getElementById("show-old-user-form");

var btn_signin = document.getElementById("sign-in-btn");



btn_signin.onclick=function(){

    olduser_form.style.display="none";
    newuser_form.style.display="block";
}

