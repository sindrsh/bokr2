var bur2 = "http://forkalkulus.netlify.com/";
var scrw2 = 500;

if (window.innerWidth < scrw2){
  window.location.assign(window.location.href+"m")}

(function() {
  Array.prototype.forEach.call(document.querySelectorAll("a.root"), function(link) {
    link.href = bur2 + link.getAttribute("data-extra");
  });
})();

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});   
