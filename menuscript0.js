var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelectorAll('.menu');
document.body.appendChild(el.cloneNode(true));
