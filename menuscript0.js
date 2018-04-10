var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.menu');
document.body.appendChild(el.cloneNode(true));
var el = content.querySelector('.menu2');
document.body.appendChild(el.cloneNode(true));
