var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.topnav');
document.body.appendChild(el.cloneNode(true));
