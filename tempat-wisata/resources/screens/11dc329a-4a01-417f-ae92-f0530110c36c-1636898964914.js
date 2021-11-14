jQuery("#simulation")
.on("click", ".s-11dc329a-4a01-417f-ae92-f0530110c36c .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Image_16")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_16 svg" ],
"attributes": {
"overlay": "#FACA51"
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_18 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_17 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_19 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_20 svg" ],
"attributes": {
"overlay": "#CCCCCC"
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_17")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_17 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_16 svg" ],
"attributes": {
"overlay": "#FACA51"
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_18 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_19 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_20 svg" ],
"attributes": {
"overlay": "#CCCCCC"
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_18")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_18 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_17 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_16 svg" ],
"attributes": {
"overlay": "#FACA51"
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_19 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_20 svg" ],
"attributes": {
"overlay": "#CCCCCC"
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_19")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_18 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_17 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_19 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_16 svg" ],
"attributes": {
"overlay": "#FACA51"
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_20 svg" ],
"attributes": {
"overlay": "#CCCCCC"
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_20")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_18 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_17 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_20 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_19 svg",
"#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Image_16 svg" ],
"attributes": {
"overlay": "#FACA51"
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Rectangle_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/5ff894a4-f0c7-48bf-8456-a752928b3dab",
"transition": {
"type": "slideleft",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/5ff894a4-f0c7-48bf-8456-a752928b3dab",
"transition": {
"type": "slideleft",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Paragraph_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/5ff894a4-f0c7-48bf-8456-a752928b3dab",
"transition": {
"type": "slideleft",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Button-blue")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Button-blue > .borderLayer" ],
"attributes": {
"border-top-color": "#80B8F1",
"border-right-color": "#80B8F1",
"border-bottom-color": "#80B8F1",
"border-left-color": "#80B8F1"
}
},{
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Button-blue span" ],
"attributes": {
"color": "#80B8F1"
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Button-blue > .borderLayer" ],
"attributes": {
"border-top-color": "#157EFB",
"border-right-color": "#157EFB",
"border-bottom-color": "#157EFB",
"border-left-color": "#157EFB"
}
},{
"target": [ "#s-11dc329a-4a01-417f-ae92-f0530110c36c #s-Button-blue span" ],
"attributes": {
"color": "#157EFB"
}
} ],
"exectype": "timed",
"delay": 300
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/32cd541f-2a59-486d-995e-3a8cad2a163a",
"transition": {
"type": "slideleft",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_27")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
"transition": {
"type": "slideright",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Paragraph_17")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
"transition": {
"type": "slideright",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("keyup.jim", ".s-11dc329a-4a01-417f-ae92-f0530110c36c .keyup", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimNot",
"parameter": [ {
"action": "jimRegExp",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
} ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Input_2" ],
"value": {
"action": "jimSubstring",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},"0",{
"action": "jimMinus",
"parameter": [ {
"action": "jimCount",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
} ]
},"1" ]
} ]
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
if(!jimUtil.isAndroidDevice() || data.which != 229)
jEvent.launchCases(cases);
if(data.which === 9) {
return false;
}
}
});