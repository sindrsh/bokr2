var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.menu');
document.body.appendChild(el.cloneNode(true));
var e2 = content.querySelector('.menub');
document.body.appendChild(e2.cloneNode(true));
