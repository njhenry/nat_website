// 
// Legal Clinic for the Disabled: Pie charts
// Created by Nat Henry
// Data provided by Legal Clinic for the Disabled, Philadelphia, PA
// 
// Pie chart definitions, based on the d3Pie library (v0.18) by Ben Keen
// See the D3pie repository: http://github.com/benkeen/d3pie
// 

// Pull width of the div
var content_div = '#default-content'
var pie_width = Math.max(d3.select(content_div).node().getBoundingClientRect().width * .75, 400),
   pie_height = 350;

var pie_referrals = new d3pie('pie-lcd-referral',
   {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#00047c",
                  "label" : "St. Chris",
                  "value" : 2169
               },
               {
                  "color" : "#393da4",
                  "label" : "Abbottsford",
                  "value" : 601
               },
               {
                  "color" : "#3f66c8",
                  "label" : "Magee",
                  "value" : 290
               },
               {
                  "color" : "#4f73d2",
                  "label" : "11th St",
                  "value" : 134
               },
               {
                  "color" : "#6584d4",
                  "label" : "Health Annex",
                  "value" : 125
               },
               {
                  "color" : "#90a5ee",
                  "label" : "Hahnemann",
                  "value" : 108
               },
               {
                  "color" : "#a5c4f3",
                  "label" : "Klein",
                  "value" : 27
               },
               {
                  "color" : "#FEAB44",
                  "label" : "General Intake",
                  "value" : 1137
               },
               {
                  "color" : "#4DFFB8",
                  "label" : "CLOCs",
                  "value" : 368
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "linear",
               "size" : 8,
               "speed" : 400
            }
         },
         "header" : {
            "title" : {
               "font" : "open sans",
               "fontSize" : 20,
               "text" : "Clients by Known Referral Source"
            },
            "titleSubtitlePadding" : 5
         },
         "labels" : {
            "inner" : {
               "hideWhenLessThanPercentage" : 3
            },
            "lines" : {
               "enabled" : true
            },
            "mainLabel" : {
               "fontSize" : 11
            },
            "outer" : {
               "pieDistance" : 15
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "truncation" : {
               "enabled" : true
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 76
            }
         },
         "size" : {
            "canvasHeight" : pie_height,
            "canvasWidth" : pie_width,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "90%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      });

var pie_disability = new d3pie("pie-lcd-disability",
   {
         "data" : {
            "content" : [
               {
                  "color" : "#385ecd",
                  "label" : "Hearing",
                  "value" : 82
               },
               {
                  "color" : "#2a53c8",
                  "label" : "Ambulatory & Amputation",
                  "value" : 26
               },
               {
                  "color" : "#5031d4",
                  "label" : "Auto-Immune",
                  "value" : 10
               },
               {
                  "color" : "#ca3535",
                  "label" : "Pulmonary",
                  "value" : 581
               },
               {
                  "color" : "#cd5f25",
                  "label" : "Mental Health",
                  "value" : 367
               },
               {
                  "color" : "#ca9523",
                  "label" : "Spinal & Back",
                  "value" : 337
               },
               {
                  "color" : "#bfcd2b",
                  "label" : "Cancer",
                  "value" : 293
               },
               {
                  "color" : "#82c828",
                  "label" : "Cardiac & Vascular",
                  "value" : 275
               },
               {
                  "color" : "#5dd42f",
                  "label" : "Cerebral",
                  "value" : 264
               },
               {
                  "color" : "#31d449",
                  "label" : "Diabetes",
                  "value" : 263
               },
               {
                  "color" : "#38cd85",
                  "label" : "Developmental",
                  "value" : 226
               },
               {
                  "color" : "#39dcc2",
                  "label" : "Vision",
                  "value" : 240
               },
               {
                  "color" : "#2fa4ca",
                  "label" : "Neuromuscular",
                  "value" : 207
               },
               {
                  "color" : "#398dda",
                  "label" : "Chronic & Arthritis",
                  "value" : 170
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "linear",
               "size" : 8,
               "speed" : 400
            }
         },
         "header" : {
            "title" : {
               "font" : "open sans",
               "fontSize" : 20,
               "text" : "Clients by Primary Disability Type"
            },
            "titleSubtitlePadding" : 9
         },
         "labels" : {
            "inner" : {
               "hideWhenLessThanPercentage" : 3
            },
            "lines" : {
               "enabled" : true,
               "style" : "straight"
            },
            "mainLabel" : {
               "fontSize" : 11
            },
            "outer" : {
               "hideWhenLessThanPercentage" : 1,
               "pieDistance" : 10
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "truncation" : {
               "enabled" : true
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 76
            },
         },
         "size" : {
            "canvasHeight" : pie_height,
            "canvasWidth" : pie_width,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "90%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      });

var pie_legal_need = new d3pie("pie-lcd-legal-need",
      {
         "data" : {
            "content" : [
               {
                  "color" : "#82c828",
                  "label" : "Planning",
                  "value" : 534
               },
               {
                  "color" : "#5dd42f",
                  "label" : "SSI/SSDI",
                  "value" : 148
               },
               {
                  "color" : "#31d449",
                  "label" : "Special Education",
                  "value" : 115
               },
               {
                  "color" : "#38cd85",
                  "label" : "Domestic Violence",
                  "value" : 100
               },
               {
                  "color" : "#39dcc2",
                  "label" : "Criminal Law",
                  "value" : 65
               },
               {
                  "color" : "#2fa4ca",
                  "label" : "Medicaid / Medicare",
                  "value" : 64
               },
               {
                  "color" : "#398dda",
                  "label" : "Private Insurance",
                  "value" : 56
               },
               {
                  "color" : "#385ecd",
                  "label" : "Immigration",
                  "value" : 55
               },
               {
                  "color" : "#2a53c8",
                  "label" : "Civil Rights",
                  "value" : 28
               },
               {
                  "color" : "#5031d4",
                  "label" : "Miscellaneous",
                  "value" : 281
               },
               {
                  "color" : "#ca3535",
                  "label" : "Family Law",
                  "value" : 1346
               },
               {
                  "color" : "#cd5f25",
                  "label" : "Public Benefits",
                  "value" : 1240
               },
               {
                  "color" : "#ca9523",
                  "label" : "Housing",
                  "value" : 892
               },
               {
                  "color" : "#bfcd2b",
                  "label" : "Employment",
                  "value" : 735
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "linear",
               "size" : 8,
               "speed" : 400
            }
         },
         "footer" : {
            "color" : "#999999",
            "font" : "open sans",
            "fontSize" : 12,
            "location" : "bottom-left",
            "text" : "Compiled from LCD Client Intake Data, Jan 2010-May 2015"
         },
         "header" : {
            "title" : {
               "font" : "open sans",
               "fontSize" : 20,
               "text" : "Clients by Legal Need Type"
            },
            "titleSubtitlePadding" : 9
         },
         "labels" : {
            "inner" : {
               "hideWhenLessThanPercentage" : 3
            },
            "lines" : {
               "enabled" : true,
               "style" : "straight"
            },
            "mainLabel" : {
               "fontSize" : 11
            },
            "outer" : {
               "hideWhenLessThanPercentage" : 1,
               "pieDistance" : 20
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "truncation" : {
               "enabled" : true
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 76
            },
         },
         "size" : {
            "canvasHeight" : pie_height,
            "canvasWidth" : pie_width,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "90%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      });
