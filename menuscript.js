var burl = "http://forkalkulus.netlify.com/";
var scrw = 500;

if (window.innerWidth < 500){
  window.location.assign(window.location.href+"m")}

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});   
