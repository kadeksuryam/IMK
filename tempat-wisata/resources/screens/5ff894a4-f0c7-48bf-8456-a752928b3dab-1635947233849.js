jQuery("#simulation")
  .on("click", ".s-5ff894a4-f0c7-48bf-8456-a752928b3dab .click", function(event, data) {
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_16 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_20 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_19 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_18 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_17 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_17 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_16 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_20 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_19 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_18 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_18 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_17 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_16 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_20 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_19 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_19 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_18 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_17 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_16 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_20 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_20 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_19 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_18 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_17 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_16 svg" ],
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
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_21 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_25 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_24 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_23 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_22 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_22 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_21 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_25 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_24 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_23 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_23 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_22 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_21 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_25 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_24 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_24 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_23 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_22 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_21 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_25 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_25 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_24 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_23 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_22 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_21 svg" ],
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
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_26 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_31 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_30 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_29 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_28 svg" ],
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
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_28 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_26 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_31 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_30 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_29 svg" ],
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
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_29 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_28 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_26 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_31 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_30 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_30 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_29 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_28 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_26 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_31 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_31 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_30 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_29 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_28 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_26 svg" ],
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
    } else if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_32 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_36 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_35 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_34 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_33 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_33 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_32 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_36 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_35 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_34 svg" ],
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
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_34 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_33 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_32 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_36 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_35 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_35 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_34 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_33 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_32 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_36 svg" ],
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
                    "target": [ "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_36 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_35 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_34 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_33 svg",
                  "#s-5ff894a4-f0c7-48bf-8456-a752928b3dab #s-Image_32 svg" ],
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
    } else if(jFirer.is("#s-Image_27")) {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });