jQuery("#simulation")
  .on("click", ".s-fa3a345b-52bd-4504-ab84-59c85b59614d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_31")) {
      cases = [
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
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
                    "target": "screens/fa3a345b-52bd-4504-ab84-59c85b59614d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
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
                    "target": "screens/4b0bef1c-4c7f-457c-b02b-e086bfd675f2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_3": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_4": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_4": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_4": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_4": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-fa3a345b-52bd-4504-ab84-59c85b59614d #s-Label_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
  });