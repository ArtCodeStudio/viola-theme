var yaml = {
    write: require('write-yaml')
}
var bsPkg = require(__dirname+'/../assets/vendor/bootstrap-backward/package.json');
var bootstrap_variables = require(__dirname+'/../assets/vendor/bootstrap-backward/variables.json');
var groups = {};
var tab = "Bootstrap "+bsPkg.version;
var bootstrap_theme_settings = {
    "form": {
        "tabs": {
            "fields": {

            }
        }

    }
};

var toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var toHandleCase = function(str) {
    return str.toLowerCase().replace(/\s/g, '_');
}

// sort variables to groups, e.g. colors, options, pagination, etc
bootstrap_variables.forEach(function(variableDefs) {
    console.log("variableDefs", variableDefs);

    // ignore private variables
    if(variableDefs.context.scope == "private") {
        return;
    }
    // types to lower cae for easier witch case compare
    if(variableDefs.type) {
      variableDefs.type = variableDefs.type.toLowerCase();
    }
    // init group variable if not set
    if(!groups[variableDefs.group[0]]) {
        groups[variableDefs.group[0]] = [];
    }

    var groupName = variableDefs.group[0];
    var id = variableDefs.context.name;
    var handle = 'bs4-'+variableDefs.context.name;
    var label = variableDefs.context.name;
    var defaultVal = variableDefs.context.value;
    var comment = variableDefs.description;
    
    // different objects for different types
    switch (variableDefs.type) {
        case 'color':
        groups[groupName].push({
            handle: handle,
            type: "colorpicker",
            label: label,
            default: defaultVal,
            tab: tab,
            comment: comment,
            assetVar: id
        });
        break;
        case 'number':
        groups[groupName].push({
            handle: handle,
            type: "number",
            label: label,
            default: Number(defaultVal),
            tab: tab,
            comment: comment,
            assetVar: id
        });
        break;
        case 'bool':
        case 'boolean':
        groups[groupName].push({
            handle: handle,
            type: "checkbox",
            label: label,
            default: defaultVal === 'true',
            tab: tab,
            comment: comment,
            assetVar: id
        });
        break;
        case 'text':
        default:
        groups[groupName].push({
            handle: handle,
            type: "text",
            label: label,
            default: defaultVal,
            tab: tab,
            comment: comment,
            assetVar: id
        });
        break;
    }
}, this);

// write groups to settings and clean up 
for(var name in groups) { 
    var group = groups[name];
    bootstrap_theme_settings.form.tabs.fields['bs4-'+toHandleCase(name)] = {
        "label": toTitleCase(name),
        "type": "section",
        "tab": tab,
        //"comment": "TODO",
    };
    group.forEach(function(groupContext) {
        // delete comment if empty
        if(!groupContext.comment || groupContext.comment == "" || groupContext.comment == "\n") {
            delete groupContext.comment;
        }
        // use handle for variable name
        var handle = groupContext.handle;
        delete groupContext.handle;
        bootstrap_theme_settings.form.tabs.fields[handle] = groupContext;
    }, this);
}

// save settings to yaml file
yaml.write(__dirname+'/bootstrap.yaml', bootstrap_theme_settings, {indent: 4}, function(err) {
  if (err) console.log(err);
});