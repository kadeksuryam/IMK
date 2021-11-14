jQuery("#simulation")
.on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button_1")) {
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
"type": "slideandfade",
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
} else if(jFirer.is("#s-Image_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_10 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_14 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 svg" ],
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
} else if(jFirer.is("#s-Image_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_10 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_14 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 svg" ],
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
} else if(jFirer.is("#s-Image_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_10 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_14 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 svg" ],
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
} else if(jFirer.is("#s-Image_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_10 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_14 svg" ],
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
} else if(jFirer.is("#s-Image_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_14 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_10 svg" ],
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
} else if(jFirer.is("#s-Button_2")) {
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
} else if(jFirer.is("#s-Image_16")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_16 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_20 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_19 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_18 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_17 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_17 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_16 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_20 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_19 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_18 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_18 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_17 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_16 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_20 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_19 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_19 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_18 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_17 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_16 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_20 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_20 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_19 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_18 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_17 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_16 svg" ],
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
} else if(jFirer.is("#s-Button_3")) {
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
"type": "slideandfade",
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
} else if(jFirer.is("#s-Image_21")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_21 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_25 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_24 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_23 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_22 svg" ],
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
} else if(jFirer.is("#s-Image_22")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_22 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_21 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_25 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_24 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_23 svg" ],
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
} else if(jFirer.is("#s-Image_23")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_23 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_22 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_21 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_25 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_24 svg" ],
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
} else if(jFirer.is("#s-Image_24")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_24 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_23 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_22 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_21 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_25 svg" ],
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
} else if(jFirer.is("#s-Image_25")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_25 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_24 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_23 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_22 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_21 svg" ],
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
} else if(jFirer.is("#s-Button_4")) {
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
} else if(jFirer.is("#s-Image_29")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_29 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_33 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_32 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_31 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_30 svg" ],
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
} else if(jFirer.is("#s-Image_30")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_30 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_29 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_33 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_32 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_31 svg" ],
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
} else if(jFirer.is("#s-Image_31")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_31 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_30 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_29 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_33 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_32 svg" ],
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
} else if(jFirer.is("#s-Image_32")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_32 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_31 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_30 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_29 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_33 svg" ],
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
} else if(jFirer.is("#s-Image_33")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_33 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_32 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_31 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_30 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_29 svg" ],
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
} else if(jFirer.is("#s-Button_5")) {
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
"type": "slideandfade",
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
} else if(jFirer.is("#s-Image_34")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_34 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_38 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_37 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_36 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_35 svg" ],
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
} else if(jFirer.is("#s-Image_35")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_35 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_34 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_38 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_37 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_36 svg" ],
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
} else if(jFirer.is("#s-Image_36")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_36 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_35 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_34 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_38 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_37 svg" ],
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
} else if(jFirer.is("#s-Image_37")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_37 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_36 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_35 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_34 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_38 svg" ],
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
} else if(jFirer.is("#s-Image_38")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_38 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_37 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_36 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_35 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_34 svg" ],
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
} else if(jFirer.is("#s-Button_6")) {
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
"type": "slideandfade",
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
} else if(jFirer.is("#s-Image_39")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_39 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_43 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_42 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_41 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_40 svg" ],
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
} else if(jFirer.is("#s-Image_40")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_40 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_39 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_43 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_42 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_41 svg" ],
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
} else if(jFirer.is("#s-Image_41")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_41 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_40 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_39 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_43 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_42 svg" ],
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
} else if(jFirer.is("#s-Image_42")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_42 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_41 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_40 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_39 svg" ],
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
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_43 svg" ],
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
} else if(jFirer.is("#s-Image_43")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_43 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_42 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_41 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_40 svg",
"#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_39 svg" ],
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
} else if(jFirer.is("#s-Image_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_3" ]
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
} else if(jFirer.is("#s-Image_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_2" ]
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
} else if(jFirer.is("#s-Input_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"action": "jimNot",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},{
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_6" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"action": "jimNot",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
} ]
},{
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_11" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},{
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_14" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_4" ],
"transition": {
"type": "fade",
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
} else if(jFirer.is("#s-Input_3")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"action": "jimNot",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
} ]
},{
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_11" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},{
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_14" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"action": "jimNot",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
} ]
},{
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_6" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_4" ],
"transition": {
"type": "fade",
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
.on("keyup.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .keyup", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input-text_3")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input-text_3",
"property": "jimGetValue"
},"candi borobudur" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_6" ],
"transition": {
"type": "fade",
"duration": 700
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_4" ]
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