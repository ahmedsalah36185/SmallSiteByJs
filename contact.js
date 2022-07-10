var btn1_showus = document.getElementById("about-us");
var btn2_mailus = document.getElementById("mail-us");
var btn3_addressus = document.getElementById("address-us");

var showtxt_showus = document.getElementById("tx-aboutus");
var showtx_emailus = document.getElementById("tx-emailus");
var showtx_addressus = document.getElementById("tx-addressus");

btn1_showus.onclick = function(){

    btn2_mailus.classList.remove("active");
    btn3_addressus.classList.remove("active");
    btn1_showus.classList.add("active");

    showtx_emailus.style.display = "none";
    showtx_addressus.style.display = "none";
    showtxt_showus.style.display = "block";
}
btn2_mailus.onclick = function(){

    btn1_showus.classList.remove("active");
    btn3_addressus.classList.remove("active");
    btn2_mailus.classList.add("active");

    showtxt_showus.style.display = "none";
    showtx_addressus.style.display = "none";
    showtx_emailus.style.display = "block";
}
btn3_addressus.onclick = function(){

    btn1_showus.classList.remove("active");
    btn2_mailus.classList.remove("active");
    btn3_addressus.classList.add("active");

    showtxt_showus.style.display = "none";
    showtx_emailus.style.display = "none";
    showtx_addressus.style.display = "block";
}