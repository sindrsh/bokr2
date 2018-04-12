var hmp = "http://forkalkulus.netlify.com/";
var scrw = 700;

if (window.innerWidth < 700){
  window.location.assign(window.location.href+"m")}

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});   
