var hmp = "http://forkalkulus.netlify.com/";
var scrw = 700;

if (window.innerWidth < scrw){
  window.location.assign("http://forkalkulus.netlify.com/homem")}

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});   
