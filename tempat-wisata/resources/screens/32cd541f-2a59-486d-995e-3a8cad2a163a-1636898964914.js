jQuery("#simulation")
.on("click", ".s-32cd541f-2a59-486d-995e-3a8cad2a163a .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Image_27")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/11dc329a-4a01-417f-ae92-f0530110c36c",
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/11dc329a-4a01-417f-ae92-f0530110c36c",
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
"target": "screens/11dc329a-4a01-417f-ae92-f0530110c36c",
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/11dc329a-4a01-417f-ae92-f0530110c36c",
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
} else if(jFirer.is("#s-Button-blue_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_2 > .borderLayer" ],
"attributes": {
"border-top-color": "#80B8F1",
"border-right-color": "#80B8F1",
"border-bottom-color": "#80B8F1",
"border-left-color": "#80B8F1"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_2 span" ],
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
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_2 > .borderLayer" ],
"attributes": {
"border-top-color": "#157EFB",
"border-right-color": "#157EFB",
"border-bottom-color": "#157EFB",
"border-left-color": "#157EFB"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_2 span" ],
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
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue > .borderLayer" ],
"attributes": {
"border-top-color": "#80B8F1",
"border-right-color": "#80B8F1",
"border-bottom-color": "#80B8F1",
"border-left-color": "#80B8F1"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue span" ],
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
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue > .borderLayer" ],
"attributes": {
"border-top-color": "#157EFB",
"border-right-color": "#157EFB",
"border-bottom-color": "#157EFB",
"border-left-color": "#157EFB"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue span" ],
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
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Button-blue_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_1 > .borderLayer" ],
"attributes": {
"border-top-color": "#80B8F1",
"border-right-color": "#80B8F1",
"border-bottom-color": "#80B8F1",
"border-left-color": "#80B8F1"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_1 span" ],
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
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_1 > .borderLayer" ],
"attributes": {
"border-top-color": "#157EFB",
"border-right-color": "#157EFB",
"border-bottom-color": "#157EFB",
"border-left-color": "#157EFB"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_1 span" ],
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
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Button-blue_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_3 > .borderLayer" ],
"attributes": {
"border-top-color": "#80B8F1",
"border-right-color": "#80B8F1",
"border-bottom-color": "#80B8F1",
"border-left-color": "#80B8F1"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_3 span" ],
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
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_3 > .borderLayer" ],
"attributes": {
"border-top-color": "#157EFB",
"border-right-color": "#157EFB",
"border-bottom-color": "#157EFB",
"border-left-color": "#157EFB"
}
},{
"target": [ "#s-32cd541f-2a59-486d-995e-3a8cad2a163a #s-Button-blue_3 span" ],
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
"target": "screens/db32455c-1c43-479e-ae0b-14acf9cf0748",
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
}
});