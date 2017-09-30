var burl = "https://forkalkulus.netlify.com/";
var scrw = 500;

(function() {
  Array.prototype.forEach.call(document.querySelectorAll("a.root"), function(link) {
    link.href = burl + link.getAttribute("data-extra");
  });
})();

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});   
