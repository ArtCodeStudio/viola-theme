var yaml = {
    read: require('js-yaml')
}
var fs   = require('fs');
var theme = yaml.read.safeLoad(fs.readFileSync('../theme.yaml', 'utf8'));
var bsPkg = require('../assets/vendor/bootstrap-backward/package.json');
var liquidString = "";

console.log(theme);

// bootstrap.settings.forEach(function(setting) {
// console.log("setting", setting);

// var liquidLine = null;
// switch (setting.type) {
//     case 'color':
//     case 'number':
//     case 'checkbox':
//     case 'text':
//     // liquidLine = "{% unless settings.id == blank %} $value: {{settings.id}}; {% endunless %}";
//     liquidLine = "$value: {{settings.id}};";
//     liquidLine = liquidLine.replace(/id/g, setting.id);
//     liquidLine = liquidLine.replace(/value/g, setting.id.replace('bs4-', ''));
//     break;
//     case 'header':
//     case 'paragraph':
//     liquidLine = "\n{% comment %} content {% endcomment %}".replace('content', setting.content);
//     break;
//     default:
//     console.error("Unknown type: ",setting.type);
//     break;
// }

// if(liquidLine) {
//     liquidString += liquidLine + "\n";
// }
    
// }, this);

// // save scss file
// fs.writeFileSync('./src/scss/_bs4_variables.scss.liquid', liquidString , 'utf-8');