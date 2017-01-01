var burl = "http://www.example.com/";

(function() {
  Array.prototype.forEach.call(document.querySelectorAll("a.burl"), function(link) {
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
