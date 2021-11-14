(function(window, undefined) {
var dictionary = {
"11dc329a-4a01-417f-ae92-f0530110c36c": "Detail Tempat Wisata - Borobudur",
"db32455c-1c43-479e-ae0b-14acf9cf0748": "Tiket",
"5ff894a4-f0c7-48bf-8456-a752928b3dab": "Review Tempat Wisata",
"32cd541f-2a59-486d-995e-3a8cad2a163a": "Pembayaran",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Tempat Wisata",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
"bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);