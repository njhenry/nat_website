var classMetadata = {
   "abbottsford" : {
      "name" : "referred from Abbottsford Falls",
      "normalizedClasses" : [ 0, 0.0050, 0.020, 0.040, 0.080 ],
      "normalizedLegendText" : "<h5>Number of referrals <br>from Abbottsford / <br>all potential clients<br>in the census tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#7231cf",
                  "label" : "Behavioral Health",
                  "value" : 122
               },
               {
                  "color" : "#e4942a",
                  "label" : "Primary Care",
                  "value" : 475
               },
               {
                  "color" : "#29c588",
                  "label" : "Social Work",
                  "value" : 4
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Breakdown of clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "MLP: Abbottsford Falls"
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
               "fontSize" : 12
            },
            "outer" : {
               "pieDistance" : 7
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 5, 10, 15 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>Abbottsford:</h5>"
   },
   "allcensuspop" : {
      "normalizedClasses" : [ 0, 3000, 6500, 10000, 15000 ],
      "normalizedLegendText" : "<h5>Total population<br>density<br>(people/km<sup>2</sup>)</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1800, 3300, 4800, 6300 ],
      "rawNumLegendText" : "<h5>Total Population:</h5>"
   },
   "alldis" : {
      "normalizedClasses" : [ 0, 600, 1200, 1800, 2600 ],
      "normalizedLegendText" : "<h5>Population density of<br>residents with a<br>disability (people/km<sup>2</sup>)</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 300, 650, 950, 1300 ],
      "rawNumLegendText" : "<h5>Number of residents<br>with a disability:</h5>"
   },
   "allpov" : {
      "normalizedClasses" : [ 0, 1000, 2000, 4000, 7000 ],
      "normalizedLegendText" : "<h5>Population density of<br>people under 150% of<br>the poverty line<br>(people/km<sup>2</sup>)</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 850, 1700, 2550, 3800 ],
      "rawNumLegendText" : "<h5>Residents under 150%<br>of the poverty line:</h5>"
   },
   "allpovdis" : {
      "normalizedClasses" : [ 0, 300, 700, 1200, 1700 ],
      "normalizedLegendText" : "<h5>Population density of<br>potential LCD clients<br>(people/km<sup>2</sup>)</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 200, 400, 600, 1000 ],
      "rawNumLegendText" : "<h5>Number of potential<br>LCD clients within<br>this tract:</h5>"
   },
   "ambulatory" : {
      "name" : "with ambulatory issues or amputations",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>an ambulatory primary <br>disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#0007c3",
                  "label" : "Paraplegia",
                  "value" : 216
               },
               {
                  "color" : "#989bff",
                  "label" : "Amputation",
                  "value" : 22
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 23,
               "text" : "Ambulatory Disability & Amputation"
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
               "fontSize" : 12
            },
            "outer" : {
               "pieDistance" : 13
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#026800",
               "enabled" : true,
               "percentage" : 65
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Ambulatory / Amputation<br>(Intakes 2010-15)</h5>"
   },
   "autoimmune" : {
      "name" : "with auto-immune disorders",
      "normalizedClasses" : [ 0, 0.00050, 0.0010, 0.00150 ],
      "normalizedLegendText" : "<h5>Number of intakes with an <br>autoimmune disorder as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#00047c",
                  "label" : "Lupus",
                  "value" : 4
               },
               {
                  "color" : "#4044b8",
                  "label" : "MS",
                  "value" : 3
               },
               {
                  "color" : "#4c76e1",
                  "label" : "Rheumatoid Arthritis",
                  "value" : 1
               },
               {
                  "color" : "#7ea2ff",
                  "label" : "Crohn's",
                  "value" : 1
               },
               {
                  "color" : "#bccdf8",
                  "label" : "Other",
                  "value" : 1
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 23,
               "text" : "Auto-Immune Disorders"
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
               "pieDistance" : 11
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#001449",
               "enabled" : true,
               "percentage" : 72
            },
            "pieCenterOffset" : {
               "x" : 36
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "74%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Auto-immune Disorders<br>(Intakes 2010-15)</h5>"
   },
   "cancer" : {
      "name" : "with cancer",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>cancer as their primary <br>disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#f0e388",
                  "label" : "Prostate",
                  "value" : 3
               },
               {
                  "color" : "#f3f25e",
                  "label" : "Sarcoma",
                  "value" : 5
               },
               {
                  "color" : "#eeec3b",
                  "label" : "Lung",
                  "value" : 5
               },
               {
                  "color" : "#e4d50d",
                  "label" : "Breast",
                  "value" : 6
               },
               {
                  "color" : "#c3a901",
                  "label" : "Other",
                  "value" : 278
               },
               {
                  "color" : "#eee8be",
                  "label" : "Colon/Rectum",
                  "value" : 2
               },
               {
                  "color" : "#f3eda2",
                  "label" : "GYN",
                  "value" : 2
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Cancer"
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
               "fontSize" : 12
            },
            "outer" : {
               "hideWhenLessThanPercentage" : 1,
               "pieDistance" : 22
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
               "color" : "#a8676b",
               "enabled" : true,
               "percentage" : 97
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3, 4 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Cancer<br>(Intakes 2010-15)</h5>"
   },
   "cardiac" : {
      "name" : "with cardiac or vascular issues",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>cardiac & vascular issues as a <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#bbfdb0",
                  "label" : "Stroke (Aphasia)",
                  "value" : 2
               },
               {
                  "color" : "#d3fdcb",
                  "label" : "Heart Attacks",
                  "value" : 1
               },
               {
                  "color" : "#043a00",
                  "label" : "Other Heart Condition",
                  "value" : 130
               },
               {
                  "color" : "#1c8308",
                  "label" : "Stroke",
                  "value" : 124
               },
               {
                  "color" : "#2fc511",
                  "label" : "Vascular Disease",
                  "value" : 12
               },
               {
                  "color" : "#9ff990",
                  "label" : "Congestive Heart Failure",
                  "value" : 4
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Primary Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Cardiac & Vascular Issues"
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
            "pieCenterOffset" : {
               "x" : -40
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 4, 6 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Cardiac / Vascular Issues<br>(Intakes 2010-15)</h5>"
   },
   "cerebral" : {
      "name" : "with cerebral involvement",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>cerebral involvement as a <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#003a0e",
                  "label" : "Palsy",
                  "value" : 113
               },
               {
                  "color" : "#075d1c",
                  "label" : "Involvement (Trauma)",
                  "value" : 105
               },
               {
                  "color" : "#17a242",
                  "label" : "Involvement (No Trauma)",
                  "value" : 41
               },
               {
                  "color" : "#3eea69",
                  "label" : "Seizure Disorder",
                  "value" : 6
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Cerebral Involvement"
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
            "outer" : {
               "hideWhenLessThanPercentage" : 1,
               "pieDistance" : 11
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#000000",
               "enabled" : true,
               "percentage" : 97
            },
            "pieCenterOffset" : {
               "x" : 20
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3, 6 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Cerebral Involvement<br>(Intakes 2010-15)</h5>"
   },
   "chrondis" : {
      "name" : "with a chronic disability or arthritis",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with a <br>chronic primary disability / all <br>potential clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#00047c",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#2f4399",
                  "label" : "Arthritis",
                  "value" : 216
               },
               {
                  "color" : "#2f52aa",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#2e58c9",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#4d83cc",
                  "label" : "Pain - Other",
                  "value" : 41
               },
               {
                  "color" : "#738def",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#779fdd",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#9db5f2",
                  "label" : "",
                  "value" : null
               },
               {
                  "color" : "#bce0f2",
                  "label" : "Chronic Fatigue Syndrome",
                  "value" : 6
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Chronic Disability & Arthritis"
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
               "fontSize" : 12
            },
            "outer" : {
               "pieDistance" : 13
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 84
            },
            "pieCenterOffset" : {
               "x" : -14
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 4 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Chronic Disability / Arthritis<br>(Intakes 2010-15)</h5>"
   },
   "civilrights" : {
      "name" : "with legal needs relating to civil rights: ",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to discrimination <br>or civil rights / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#001b6e",
                  "label" : "Disability Rights / ADA",
                  "value" : 14
               },
               {
                  "color" : "#1649e4",
                  "label" : "Individual",
                  "value" : 13
               },
               {
                  "color" : "#6f81fd",
                  "label" : "Civil",
                  "value" : 1
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Discrimination & Civil Rights"
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
               "pieDistance" : 8
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#3f007f",
               "enabled" : true,
               "percentage" : 76
            },
            "pieCenterOffset" : {
               "x" : -33
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "65%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Discrimination / Civil Rights<br>(Intakes 2010-15)</h5>"
   },
   "clocs" : {
      "name" : "referred from a CLOC",
      "normalizedClasses" : [ 0, 0.0050, 0.010, 0.050, 0.1 ],
      "normalizedLegendText" : "<h5>Number of referrals from <br>Community Legal Outreach <br>Clinics / all potential clients <br>in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#8dbd56",
                  "label" : "ASB",
                  "value" : 166
               },
               {
                  "color" : "#75459f",
                  "label" : "Inglis House",
                  "value" : 146
               },
               {
                  "color" : "#bd773e",
                  "label" : "JFCS",
                  "value" : 55
               },
               {
                  "color" : "#a73d53",
                  "label" : "PSD",
                  "value" : 1
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Clients referred from Community Legal Outreach Clinics"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Referral Source: CLOCs"
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
               "pieDistance" : 7
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 3, 5, 10 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>CLOCs:</h5>"
   },
   "congenital" : {
      "name" : "with a congenital or developmental disorder",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>congenital or developmental <br> disorders as a primary <br>disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#2f52aa",
                  "label" : "Speech Delay",
                  "value" : 32
               },
               {
                  "color" : "#2e58c9",
                  "label" : "ADHD",
                  "value" : 24
               },
               {
                  "color" : "#4d6fcc",
                  "label" : "Down Syndrome",
                  "value" : 6
               },
               {
                  "color" : "#738def",
                  "label" : "Developmental Delay",
                  "value" : 5
               },
               {
                  "color" : "#779fdd",
                  "label" : "Premature",
                  "value" : 5
               },
               {
                  "color" : "#9db5f2",
                  "label" : "Failure to Thrive",
                  "value" : 2
               },
               {
                  "color" : "#bccef2",
                  "label" : "Other",
                  "value" : 2
               },
               {
                  "color" : "#00047c",
                  "label" : "Mental Retardation",
                  "value" : 104
               },
               {
                  "color" : "#2f3399",
                  "label" : "Autism Spectrum",
                  "value" : 46
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Congenital & Developmental"
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
            "pieCenterOffset" : {
               "x" : -32
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3, 5 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Congenital / Developmental Disorders<br>(Intakes 2010-15)</h5>"
   },
   "consumer" : {
      "name" : "with consumer or employment-related legal needs",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal need <br>relating to consumer or <br>employment issues / all <br>potential clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#e9ca00",
                  "label" : "Other (in CETA)",
                  "value" : 35
               },
               {
                  "color" : "#ffed00",
                  "label" : "Taxes",
                  "value" : 34
               },
               {
                  "color" : "#fffc24",
                  "label" : "Contracts/Warranties",
                  "value" : 27
               },
               {
                  "color" : "#fbee47",
                  "label" : "Unemployment",
                  "value" : 17
               },
               {
                  "color" : "#fff576",
                  "label" : "Wage Claims",
                  "value" : 10
               },
               {
                  "color" : "#fdf584",
                  "label" : "Job Discrimination",
                  "value" : 7
               },
               {
                  "color" : "#fdfdbc",
                  "label" : "Predatory Lending",
                  "value" : 1
               },
               {
                  "color" : "#3e4b00",
                  "label" : "Public Utilities",
                  "value" : 242
               },
               {
                  "color" : "#576900",
                  "label" : "Other",
                  "value" : 163
               },
               {
                  "color" : "#9bae03",
                  "label" : "Collections",
                  "value" : 96
               },
               {
                  "color" : "#bbae00",
                  "label" : "Employee Rights",
                  "value" : 52
               },
               {
                  "color" : "#cdcb00",
                  "label" : "Debt Relief",
                  "value" : 51
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Consumer & Employment"
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
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#bc7c00",
               "enabled" : true,
               "percentage" : 100
            },
            "pieCenterOffset" : {
               "x" : -15
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "72%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 2, 4, 7, 11 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Consumer and Employment<br>(Intakes 2010-15)</h5>"
   },
   "crim" : {
      "name" : "with legal needs related to criminal matters",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to criminal <br>matters / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Criminal Matters<br>(Intakes 2010-15)</h5>"
   },
   "diabetes" : {
      "name" : "with diabetes",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with diabetes <br>as their primary disability / all <br>potential clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#0c6236",
                  "label" : "Type I",
                  "value" : 216
               },
               {
                  "color" : "#2aa93a",
                  "label" : "Renal Disorders",
                  "value" : 41
               },
               {
                  "color" : "#6df386",
                  "label" : "Type II",
                  "value" : 6
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Diabetes & Renal Disorder"
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
               "fontSize" : 12
            },
            "outer" : {
               "pieDistance" : 13
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 84
            },
            "pieCenterOffset" : {
               "x" : -14
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 4, 7 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Diabetes and Renal Disorders<br>(Intakes 2010-15)</h5>"
   },
   "domestic" : {
      "name" : "with legal needs related to domestic violence",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to domestic <br>violence / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Domestic Violence<br>(Intakes 2010-15)</h5>"
   },
   "eleventhSt" : {
      "name" : "referred from 11th Street Health Center",
      "normalizedClasses" : [ 0, 0.0010, 0.010, 0.25 ],
      "normalizedLegendText" : "<h5>Number of referrals <br>from 11th St Health <br>Center / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#7231cf",
                  "label" : "Behavioral Health",
                  "value" : 16
               },
               {
                  "color" : "#cd8c36",
                  "label" : "Primary Care",
                  "value" : 5
               },
               {
                  "color" : "#29c588",
                  "label" : "Social Work",
                  "value" : 113
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Breakdown of clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "MLP: 11th Street Health Center"
            },
            "titleSubtitlePadding" : 5
         },
         "labels" : {
            "lines" : {
               "enabled" : true
            },
            "mainLabel" : {
               "fontSize" : 9
            },
            "outer" : {
               "pieDistance" : 7
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "57%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 5 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>11th St Health Center:</h5>"
   },
   "family" : {
      "name" : "with legal needs related to family law",
      "normalizedClasses" : [ 0, 0.0050, 0.010, 0.020, 0.050 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to family <br>law / all potential clients <br>in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#41cb28",
                  "label" : "Guardianship",
                  "value" : 134
               },
               {
                  "color" : "#58ea3e",
                  "label" : "Other Family",
                  "value" : 42
               },
               {
                  "color" : "#8aff77",
                  "label" : "Name Change",
                  "value" : 11
               },
               {
                  "color" : "#a8fd9a",
                  "label" : "Adoption",
                  "value" : 9
               },
               {
                  "color" : "#b9fbac",
                  "label" : "Paternity",
                  "value" : 8
               },
               {
                  "color" : "#043a00",
                  "label" : "Custody/Visitation",
                  "value" : 574
               },
               {
                  "color" : "#155d07",
                  "label" : "Divorce/Separation",
                  "value" : 299
               },
               {
                  "color" : "#2ea217",
                  "label" : "Support/Alimony",
                  "value" : 269
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Family Law"
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
               "pieDistance" : 9
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#001449",
               "enabled" : true,
               "percentage" : 72
            },
            "pieCenterOffset" : {
               "x" : 10
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "67%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 3, 6, 9, 13 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Family Law<br>(Intakes 2010-15)</h5>"
   },
   "hahnemann" : {
      "name" : "referred from Hahnemann University Hospital",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of referrals from <br>Hahnemann / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#7126c8",
                  "label" : "Oncology (Drexel)",
                  "value" : 3
               },
               {
                  "color" : "#cf2740",
                  "label" : "Oncology (Rittenhouse)",
                  "value" : 6
               },
               {
                  "color" : "#2faa5c",
                  "label" : "Radiation Oncology",
                  "value" : 98
               },
               {
                  "color" : "#eec138",
                  "label" : "Social Work",
                  "value" : 1
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 19,
               "text" : "MLP: Hahnemann Hospital Cancer Center"
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
            "outer" : {
               "pieDistance" : 7
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "80%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.59
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>Hahnemann:</h5>"
   },
   "healthannex" : {
      "name" : "referred from the Health Annex",
      "normalizedClasses" : [ 0, 0.001, 0.01, 0.02 ],
      "normalizedLegendText" : "<h5>Number of referrals <br>from the Health Annex / <br>all potential clients <br>in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#7231cf",
                  "label" : "Behavioral Health",
                  "value" : 19
               },
               {
                  "color" : "#e4942a",
                  "label" : "Primary Care",
                  "value" : 2
               },
               {
                  "color" : "#29c588",
                  "label" : "Social Work",
                  "value" : 104
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Breakdown of clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "MLP: Health Annex"
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
               "fontSize" : 9
            },
            "outer" : {
               "pieDistance" : 7
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "57%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 5, 10 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>the Health Annex:</h5>"
   },
   "hearing" : {
      "name" : "with impaired hearing",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>hearing impairment as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Hearing Impaired<br>(Intakes 2010-15)</h5>"
   },
   "housing" : {
      "name" : "with legal needs related to housing and property",
      "normalizedClasses" : [ 0, 0.0050, 0.010, 0.020, 0.050 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal need <br>relating to housing and <br>property matters / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#cd910b",
                  "label" : "Public Housing",
                  "value" : 156
               },
               {
                  "color" : "#e6be11",
                  "label" : "Homeownership",
                  "value" : 112
               },
               {
                  "color" : "#f8cb42",
                  "label" : "Other Housing",
                  "value" : 39
               },
               {
                  "color" : "#fde374",
                  "label" : "Housing Discrimination",
                  "value" : 14
               },
               {
                  "color" : "#f8f197",
                  "label" : "Mortgage Foreclosure",
                  "value" : 2
               },
               {
                  "color" : "#bd7700",
                  "label" : "Landlord/Tenant",
                  "value" : 560
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Housing & Property"
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
               "pieDistance" : 7
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#992d00",
               "enabled" : true,
               "percentage" : 80
            },
            "pieCenterOffset" : {
               "x" : -8
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "65%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 2, 4, 7, 11 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Housing and Property<br>(Intakes 2010-15)</h5>"
   },
   "genIntake" : {
	  "name" : "referred from general intake sources",
	  "normalizedClasses" : [ 0, 0.005, 0.015, 0.03, 0.05 ],
      "normalizedLegendText" : "<h5>Number of general <br>intakes / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#FFD09D",
                  "label" : "Internet",
                  "value" : 126
               },
               {
                  "color" : "#995C1F",
                  "label" : "Personal",
                  "value" : 262
               },
               {
                  "color" : "#CB630F",
                  "label" : "Legal Aid",
                  "value" : 250
               },
               {
                  "color" : "#FD6B00",
                  "label" : "Other Health Service",
                  "value" : 179
               },
               {
                  "color" : "#FD8C34",
                  "label" : "Court",
                  "value" : 167
               },
               {
                  "color" : "#FEAE68",
                  "label" : "Other Social Services",
                  "value" : 153
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
			   "fontSize" : 11,
               "text" : "Breakdown of clients referred from general intake sources"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "General Intakes"
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
               "pieDistance" : 6
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
               "percentage" : 50,
			   "color" : "#8F4700"
            },
			"pieCenterOffset" : {
				"x" : 20
			}
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 2, 4, 6, 9 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>general intakes (2010-15)</h5>"
   },
   "immigration" : {
      "name" : "with legal needs related to immigration",
      "normalizedClasses" : [ 0, 0.0010, 0.0020, 0.0050, 0.010 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal need <br>relating to immigration / all <br>potential clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Immigration Matters<br>(Intakes 2010-15)</h5>"
   },
   "insurance" : {
      "name" : "with legal needs related to insurance",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal need <br>relating to private insurance <br>matters / all potential clients <br>in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#006985",
                  "label" : "Other Health",
                  "value" : 54
               },
               {
                  "color" : "#62ddfd",
                  "label" : "Private Health Insurance",
                  "value" : 2
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Private Insurance Matters"
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
               "fontSize" : 12
            },
            "outer" : {
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#3f007f",
               "enabled" : true,
               "percentage" : 76
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "82%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Private Insurance Matters<br>(Intakes 2010-15)</h5>"
   },
   "kleinctr" : {
      "name" : "referred from the Stephen Klein Wellness Center",
      "normalizedClasses" : [ 0, 0.0010, 0.0030, 0.0050 ],
      "normalizedLegendText" : "<h5>Number of referrals from <br>the Steven Klein Health  <br>Center / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>the Steven Klein Wellness Center:</h5>"
   },
   "magee" : {
      "name" : "referred from Magee",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.050 ],
      "normalizedLegendText" : "<h5>Number of referrals from <br>Magee Rehabilitation <br>Hospital / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#cd2a87",
                  "label" : "Former Patient",
                  "value" : 15
               },
               {
                  "color" : "#dcbf41",
                  "label" : "Inpatient",
                  "value" : 12
               },
               {
                  "color" : "#1c92cd",
                  "label" : "Outpatient",
                  "value" : 263
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Breakdown of clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 21,
               "text" : "MLP: Magee Rehabilitation Hospital"
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
               "fontSize" : 13
            },
            "outer" : {
               "pieDistance" : 16
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "80%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3, 5 ],
      "rawNumLegendText" : "<h5>Number of LCD<br>intakes referred from<br>Magee:</h5>"
   },
   "medicaid" : {
      "name" : "with legal needs related to Medicaid or Medicare",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to Medicaid <br>or Medicare / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#008561",
                  "label" : "Medicaid",
                  "value" : 55
               },
               {
                  "color" : "#62fddd",
                  "label" : "Medicare",
                  "value" : 9
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Medicaid & Medicare"
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
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#430f77",
               "enabled" : true,
               "percentage" : 83
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "82%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Medicaid / Medicare Issues<br>(Intakes 2010-15)</h5>"
   },
   "mentalhealth" : {
      "name" : "with mental health issues",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>a primary disability related <br>to mental health issues / all <br>potential clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3, 5 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Mental Health Issues<br>(Intakes 2010-15)</h5>"
   },
   "misclegal" : {
      "name" : "with miscellaneous legal needs",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a <br>miscellaneous legal need / <br>all potential clients <br>in the tract</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 3, 6 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Miscellaneous<br>(Intakes 2010-15)</h5>"
   },
   "neuromuscular" : {
      "name" : "with a neuromuscular condition",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with a <br>neuromuscular condition as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 4, 7 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Neuromuscular Conditions<br>(Intakes 2010-15)</h5>"
   },
   "planning" : {
      "name" : "with legal needs related to planning documents:",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to advance <br>planning documents / all <br>potential clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#008531",
                  "label" : "Planning Documents",
                  "value" : 448
               },
               {
                  "color" : "#62fda5",
                  "label" : "Estates",
                  "value" : 86
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 20,
               "text" : "Estates and Advance Planning Documents"
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
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#0f1977",
               "enabled" : true,
               "percentage" : 94
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 2, 5, 13 ],
      "rawNumLegendText" : "<h5>Legal Need: Estates and<br>Advance Planning Documents<br>(Intakes 2010-15)</h5>"
   },
   "pubben" : {
      "name" : "with legal needs related to public benefits",
      "normalizedClasses" : [ 0, 0.0050, 0.010, 0.020, 0.050 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to public <br>benefits / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#fdd374",
                  "label" : "Veterans Benefits",
                  "value" : 7
               },
               {
                  "color" : "#f8e697",
                  "label" : "TANF",
                  "value" : 2
               },
               {
                  "color" : "#bd5500",
                  "label" : "Soc.Sec. (Not SSDI)",
                  "value" : 645
               },
               {
                  "color" : "#cd7a0b",
                  "label" : "Other Income",
                  "value" : 363
               },
               {
                  "color" : "#e6a411",
                  "label" : "State & Local Income",
                  "value" : 188
               },
               {
                  "color" : "#f8c042",
                  "label" : "Food Stamps",
                  "value" : 35
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Public Benefits"
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
            "outer" : {
               "pieDistance" : 7
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#001449",
               "enabled" : true,
               "percentage" : 72
            },
            "pieCenterOffset" : {
               "x" : -19
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "65%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 3, 6, 11, 17 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Public Benefits<br>(Intakes 2010-15)</h5>"
   },
   "pulmonary" : {
      "name" : "with a pulmonary condition",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with a <br>pulmonary condition as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#7b1414",
                  "label" : "Other",
                  "value" : 530
               },
               {
                  "color" : "#e42d2d",
                  "label" : "Chronic Asthma",
                  "value" : 50
               },
               {
                  "color" : "#ff9393",
                  "label" : "COPD",
                  "value" : 1
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Pulmonary Conditions"
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
               "pieDistance" : 15
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 77
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 2, 4, 8, 12 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Pulmonary Conditions<br>(Intakes 2010-15)</h5>"
   },
   "specialed" : {
      "name" : "with legal needs related to special education",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal <br>need relating to Special <br>Education / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#1e8500",
                  "label" : "Special Education / Learning Disability",
                  "value" : 98
               },
               {
                  "color" : "#8ffd62",
                  "label" : "Other Education",
                  "value" : 17
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Special Education"
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
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#775a0f",
               "enabled" : true,
               "percentage" : 78
            },
            "pieCenterOffset" : {
               "x" : -50
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need:<br>Special Education<br>(Intakes 2010-15)</h5>"
   },
   "spinal" : {
      "name" : "with a spinal cord or back injury",
      "normalizedClasses" : [ 0, 0.0020, 0.0050, 0.010, 0.020 ],
      "normalizedLegendText" : "<h5>Number of intakes with a spinal <br>cord or back injury as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#bb4a12",
                  "label" : "Back Injury / Degen.",
                  "value" : 164
               },
               {
                  "color" : "#e16223",
                  "label" : "Spinal (Other)",
                  "value" : 164
               },
               {
                  "color" : "#f0a96e",
                  "label" : "Spinal Cord Injury",
                  "value" : 6
               },
               {
                  "color" : "#fdd6a1",
                  "label" : "Quadriplegia",
                  "value" : 3
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Spinal Cord or Back Injury"
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
            "outer" : {
               "pieDistance" : 8
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0
            },
            "value" : {
               "color" : "#adadad",
               "fontSize" : 11
            }
         },
         "misc" : {
            "gradient" : {
               "enabled" : true,
               "percentage" : 91
            },
            "pieCenterOffset" : {
               "x" : -14
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "64%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 4, 6 ],
      "rawNumLegendText" : "<h5>Primary Disability: Spinal<br>Cord / Back Injury<br>(Intakes 2010-15)</h5>"
   },
   "ssdi" : {
      "name" : "with legal needs related to Social Security Disability",
      "normalizedClasses" : [ 0, 0.0010, 0.0020, 0.0050, 0.010 ],
      "normalizedLegendText" : "<h5>LCD Intakes with a legal need <br>relating to Social Security <br>Disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "data" : {
            "content" : [
               {
                  "color" : "#008509",
                  "label" : "SSI",
                  "value" : 137
               },
               {
                  "color" : "#62fd6d",
                  "label" : "SSDI",
                  "value" : 11
               }
            ]
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Breakdown of Client Intakes by Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Social Security Disability"
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
               "pieDistance" : 14
            },
            "percentage" : {
               "color" : "#ffffff",
               "decimalPlaces" : 0,
               "fontSize" : 12
            },
            "value" : {
               "color" : "#adadad"
            }
         },
         "misc" : {
            "gradient" : {
               "color" : "#775a0f",
               "enabled" : true,
               "percentage" : 78
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "48%",
            "pieOuterRadius" : "79%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 1, 2, 3 ],
      "rawNumLegendText" : "<h5>Legal Need: Social<br>Security Disability<br>(Intakes 2010-15)</h5>"
   },
   "stchris" : {
      "name" : "referred from St. Chris",
      "normalizedClasses" : [ 0, 0.0050, 0.010, 0.030, 0.050 ],
      "normalizedLegendText" : "<h5>Number of referrals from <br>St. Christopher's Hospital <br>for Children / all potential <br>clients in the tract:</h5>",
      "pieChart" : {
         "callbacks" : {},
         "data" : {
            "content" : [
               {
                  "color" : "#cd2a87",
                  "label" : "Special Needs",
                  "value" : 32
               },
               {
                  "color" : "#dcbf41",
                  "label" : "Social Work",
                  "value" : 14
               },
               {
                  "color" : "#1c92cd",
                  "label" : "Ambulatory Pediatrics",
                  "value" : 2123
               }
            ],
            "sortOrder" : "value-desc"
         },
         "effects" : {
            "pullOutSegmentOnClick" : {
               "effect" : "none",
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Breakdown of clients referred from this MLP"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 19,
               "text" : "MLP: St. Christopher's Hospital for Children"
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
               "fontSize" : 13
            },
            "outer" : {
               "pieDistance" : 16
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
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "80%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      },
      "rawNumClasses" : [ 0, 3, 10, 20, 40 ],
      "rawNumLegendText" : "<h5>Number of LCD intakes <br>referred from St. Christopher's <br>Hospital for Children:</h5>"
   },
   "total" : {
      "disabilityPie" : {
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
         "footer" : {
            "color" : "#999999",
            "font" : "open sans",
            "fontSize" : 12,
            "location" : "bottom-left",
            "text" : "Compiled from LCD Client Intake Data, Jan 2010-May 2015"
         },
         "header" : {
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Client Breakdown by Primary Disability, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Disability Type"
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
            "pieCenterOffset" : {
               "x" : 2
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "legalNeedPie" : {
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
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "fontSize" : 14,
               "text" : "Client Breakdown by Type of Legal Need, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Legal Need"
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
            "pieCenterOffset" : {
               "x" : -25
            }
         },
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "type" : "placeholder"
         }
      },
      "normalizedClasses" : [ 0, 0.010, 0.050, 0.1, 0.2 ],
      "normalizedLegendText" : "<h5>Total LCD Intakes, 2010-15 / <br>all potential LCD clients in <br>each census tract</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 5, 10, 30, 50 ],
      "rawNumLegendText" : "<h5>Total LCD<br>intakes, 2010-15:</h5>",
      "referralsPie" : {
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
         "footer" : {
            "color" : "#999999",
            "font" : "open sans",
            "fontSize" : 12,
            "location" : "bottom-left",
            "text" : "Compiled from LCD Client Intake Data, Jan 2010-May 2015"
         },
         "header" : {
            "subtitle" : {
               "color" : "#999999",
               "font" : "open sans",
               "text" : "Client breakdown by known referral source, 2010-15"
            },
            "title" : {
               "font" : "open sans",
               "fontSize" : 24,
               "text" : "Referral Sources"
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
		"pieCenterOffset": {
			"x": 20
		},
         "size" : {
            "canvasHeight" : 425,
            "canvasWidth" : 400,
            "pieInnerRadius" : "50%",
            "pieOuterRadius" : "70%"
         },
         "tooltips" : {
            "enabled" : true,
            "string" : "{label}: {value}, {percentage}%",
            "styles" : {
               "backgroundOpacity" : 0.57
            },
            "type" : "placeholder"
         }
      }
   },
   "vision" : {
      "name" : "with blindness or limited vision",
      "normalizedClasses" : [ 0, 0.0010, 0.0050, 0.0150 ],
      "normalizedLegendText" : "<h5>Number of intakes with <br>blindness or limited vision as their <br>primary disability / all potential <br>clients in the tract:</h5>",
      "pieChart" : "none",
      "rawNumClasses" : [ 0, 1, 2, 4, 7 ],
      "rawNumLegendText" : "<h5>Primary Disability:<br>Blindness / Limited Vision<br>(Intakes 2010-15)</h5>"
   }
}
