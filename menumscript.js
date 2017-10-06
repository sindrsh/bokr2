var cnt = 0;    
function openNav() {
    if (cnt ==0){
        document.getElementById("mySidenav").style.height = "660px";
        document.getElementById("main").style.marginTop = "660px";
        cnt = 1;
    }
    else{
        document.getElementById("mySidenav").style.height = "52px";
        document.getElementById("main").style.marginTop = "52px";
        cnt = 0;
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("main").style.marginTop= "0";
}
