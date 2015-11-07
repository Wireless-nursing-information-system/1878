jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02baadb4-5d05-41d6-a42e-a98349c8db8f"
                  }
                }
              ]
            }
          ]
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(71 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(96 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(96 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(96 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button-blue_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(96 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(33 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input-text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input-text",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input-text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input-text_1",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });