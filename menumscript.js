var cnt = 0;    
function openNav() {
    if (cnt ==0){
        document.getElementById("mySidenav").style.height = "250px";
        document.getElementById("main").style.marginTop = "230px";
        cnt = 1;
    }
    else{
        document.getElementById("mySidenav").style.height = "52px";
        document.getElementById("main").style.marginTop = "32px";
        cnt = 0;
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("main").style.marginTop= "0";
}

document.getElementById("main").style.height = String(window.innerHeight-60)+"px";
