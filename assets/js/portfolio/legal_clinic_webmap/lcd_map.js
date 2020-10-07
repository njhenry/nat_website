// Initializing Variables

//INITIALIZING GLOBAL VARIABLES
// These are global variables used to restyle the census tract map
var censusTracts = false,
	currentMetadata = classMetadata.allpovdis,
	currentTabValue = "#referralsTab",
	showNormalized = true,
	classLowerBounds = [],
	neighborhoodNameLabels = [],
	currentLegendText = "",
	detailsLabel = "",
	detailsValues;


// Using toggle in JQuery so the user can minimize (and bring back) the search window
$(document).ready(function(){
    $("#toggle").click(function(){
	if ($("#navigator").is(":visible")) {
	    $("#toggle").html("&raquo;");
		$("#toggle").css("float","left");
		$("#left").css("width","30px");
		$("#left").css("height","40px");
		$('#toggle').removeClass('on');
		$('#toggle').addClass('off');
	}
	else {
	    $("#toggle").html("x");
		$("#left").css("width","465px");
		$("#left").css("height","500px");
		$("#toggle").css("float","right");
		$('#toggle').removeClass('off');
		$('#toggle').addClass('on');
	}
	$("#navigator").toggle("fast");
    });
});


jQuery(document).ready(function() {
	// When another tab is clicked:
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        currentTabValue = jQuery(this).attr('href');
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		//Reload the top-level pie chart and map for this tab
		if (currentTabValue == "#censusData") {
			jQuery('#showMore').hide();
			jQuery('#reset').hide();
			jQuery('.tabs #censusData').show().siblings().hide();
			e.preventDefault();
			
			currentMetadata = classMetadata.allpovdis;
			updateCensusTracts();
			
			jQuery('#showCensusPovDis').addClass('active');
			jQuery('#showCensusPovDis').siblings().removeClass('active');
			
		} else {
			jQuery('.tabs #pieChartTab').show().siblings().hide();
			e.preventDefault();
			
			//On any of these top-level maps, we are going to use the Total Counts Metadata
			resetPieTabs();
		}
    });	
});


function resetPieTabs() {	
	jQuery('#showMore').show();
	jQuery('#reset').hide();

	if (currentMetadata != classMetadata.total){
		currentMetadata = classMetadata.total;
		updateCensusTracts();
	}
	
	if (currentTabValue == "#referralsTab") {
		updatePie(currentMetadata.referralsPie);
	} else if (currentTabValue == "#disTab") {
		updatePie(currentMetadata.disabilityPie);
	} else {
		updatePie(currentMetadata.legalNeedPie);
	}
}


$(document).ready(function(){
	//If the radio button is clicked
	$("#radio input[name='whichDisplay']").click(function(){
		if($('input:radio[name=whichDisplay]:checked').val() == 'raw_num' && showNormalized == false){
			// Do nothing
			alert("Hello again!");
		} else if ($('input:radio[name=whichDisplay]:checked').val() == 'norm' && showNormalized == true){
			// Do nothing
		} else {
			if ($('input:radio[name=whichDisplay]:checked').val() == 'raw_num'){
				// If the checked value is 'raw_num' and showNormalized is currently true
				showNormalized = false;
				updateCensusTracts();
			} else {
				// If the checked value is 'norm' and showNormalized is currently false
				showNormalized = true;
				updateCensusTracts();
			}
		}
	});
});


// Set some bounds
var southWestBounds = L.latLng(39.72462, -75.44312),
    northEastBounds = L.latLng(40.21506, -74.82445),
	bounds = L.latLngBounds(southWestBounds, northEastBounds);

// Add the map value
var map = L.map('map', {
	center: [39.995, -75.17],
	zoom: 12,
	zoomControl: false,
	maxBounds: bounds,
	minZoom: 12,
	maxZoom: 16
});

// Add the background tile layer
var cartoDB_positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);


//updateDetails();

// Changes the feature border and places information in the info box
function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#EEE',
		fillOpacity: 0.35
	});
	
	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}

	details.update(layer.feature.properties);
}


function resetHighlight(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 1,
		color: '#333',
		fillOpacity: 0.8
	});
	
	details.update();
}


function onEachTract(feature, layer) {	
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight
	});
}

// Gets color based on the value passed by the given feature,
// as well as the current classLowerBounds array
function getColor(value) {
	if (classLowerBounds.length == 4) {
		return value > classLowerBounds[3] ? '#10473E' :
			   value > classLowerBounds[2] ? '#1C7C6C' :
			   value > classLowerBounds[1] ? '#7ED0C2' :
						  '#BEE8E1';
	}
	else if (classLowerBounds.length == 5){
		return value > classLowerBounds[4] ? '#10473E' : //RGB(16,71,62)
			   value > classLowerBounds[3] ? '#1C7C6C' : //RGB(28,124,108)
			   value > classLowerBounds[2] ? '#28B19A' : //RGB(40,177,154)
			   value > classLowerBounds[1] ? '#7ED0C2' : //RGB(126,208,194)
						  '#BEE8E1';		             //RGB(190,232,225)
	} else {
		return '#9e9ac8';
	}
}

function style(feature) {
	var featureValue = currentMetadata == classMetadata.abbottsford ? Number(feature.properties.abbottsfor) :
		currentMetadata == classMetadata.allcensuspop ? Number(feature.properties.CensusTota) :
		currentMetadata == classMetadata.alldis ? Number(feature.properties.CensusAllD) :
		currentMetadata == classMetadata.allpov ? Number(feature.properties.CensusAllP) :
		currentMetadata == classMetadata.allpovdis ? Number(feature.properties.CensusPovD) :
		currentMetadata == classMetadata.ambulatory ? Number(feature.properties.ambulatory) :
		currentMetadata == classMetadata.autoimmune ? Number(feature.properties.autoimmune) :
		currentMetadata == classMetadata.cancer ? Number(feature.properties.cancer) :
		currentMetadata == classMetadata.cardiac ? Number(feature.properties.cardiac) :
		currentMetadata == classMetadata.cerebral ? Number(feature.properties.cerebral) :
		currentMetadata == classMetadata.chrondis ? Number(feature.properties.chrondis) :
		currentMetadata == classMetadata.civilrights ? Number(feature.properties.civilright) :
		currentMetadata == classMetadata.clocs ? Number(feature.properties.clocs) :
		currentMetadata == classMetadata.congenital ? Number(feature.properties.congenital) :
		currentMetadata == classMetadata.consumer ? Number(feature.properties.consumer) :
		currentMetadata == classMetadata.crim ? Number(feature.properties.crim) :
		currentMetadata == classMetadata.diabetes ? Number(feature.properties.diabetes) :
		currentMetadata == classMetadata.domestic ? Number(feature.properties.domestic) :
		currentMetadata == classMetadata.eleventhSt ? Number(feature.properties.eleventhSt) :
		currentMetadata == classMetadata.family ? Number(feature.properties.family) :
		currentMetadata == classMetadata.genIntake ? Number(feature.properties.courts) + Number(feature.properties.healthserv) + Number(feature.properties.internet) + Number(feature.properties.legalaid) + Number(feature.properties.personal) + Number(feature.properties.socialserv) :
		currentMetadata == classMetadata.hahnemann ? Number(feature.properties.hahnemann) :
		currentMetadata == classMetadata.healthannex ? Number(feature.properties.healthanne) :
		currentMetadata == classMetadata.hearing ? Number(feature.properties.hearing) :
		currentMetadata == classMetadata.housing ? Number(feature.properties.housing) :
		currentMetadata == classMetadata.immigration ? Number(feature.properties.immigratio) :
		currentMetadata == classMetadata.insurance ? Number(feature.properties.insurance) :
		currentMetadata == classMetadata.kleinctr ? Number(feature.properties.kleinctr) :
		currentMetadata == classMetadata.magee ? Number(feature.properties.magee) :
		currentMetadata == classMetadata.medicaid ? Number(feature.properties.medicaid) :
		currentMetadata == classMetadata.mentalhealth ? Number(feature.properties.mentalheal) :
		currentMetadata == classMetadata.misclegal ? Number(feature.properties.misclegal) :
		currentMetadata == classMetadata.neuromuscular ? Number(feature.properties.neuromuscu) :
		currentMetadata == classMetadata.planning ? Number(feature.properties.planning) :
		currentMetadata == classMetadata.pubben ? Number(feature.properties.pubben) :
		currentMetadata == classMetadata.pulmonary ? Number(feature.properties.pulmonary) :
		currentMetadata == classMetadata.specialed ? Number(feature.properties.specialed) :
		currentMetadata == classMetadata.spinal ? Number(feature.properties.spinal) :
		currentMetadata == classMetadata.ssdi ? Number(feature.properties.ssdi) :
		currentMetadata == classMetadata.stchris ? Number(feature.properties.stchris) :
		currentMetadata == classMetadata.total ? Number(feature.properties.numClientI) :
		currentMetadata == classMetadata.vision ? Number(feature.properties.vision) :
				Number(feature.properties.CensusPovD);
	
	if (showNormalized == true){
		if (currentMetadata == classMetadata.allcensuspop ||
			currentMetadata == classMetadata.alldis ||
			currentMetadata == classMetadata.allpov ||
			currentMetadata == classMetadata.allpovdis){
			if (Number(feature.properties.km2) >= 0){
				featureValue = featureValue / Number(feature.properties.km2);
			} else {
				featureValue = 0;
			}
		} else {			
			if(Number(feature.properties.CensusPovD) >= 0){
				featureValue = featureValue / Number(feature.properties.CensusPovD);
			} else {
				featureValue = 0;
			}
		}	
	}
	
	return {
		"color": "#08231F",
		"weight": 1,
		"opacity": 1,
		"fillColor": getColor(featureValue),
		"fillOpacity": 0.8
	};	
}


//Initialize the first map

addCensusTracts = function() {
	
	censusTracts = L.geoJson(phillyTracts, {
		style: style,
		onEachFeature: onEachTract
	}).addTo(map);	
}

// Add on neighborhood labels
for (j=0; j < phillyNeighborhoods.length; j++) {
	L.marker(phillyNeighborhoods[j].center, {
		icon: L.divIcon({
			className: 'text-labels',
			iconSize: new L.Point(120,14*phillyNeighborhoods[j].numLines),
			html: phillyNeighborhoods[j].label
		}),
		zIndexOffset: 1000
	}).addTo(map);
}


// INITIALIZING THE LEGEND
// LEGEND FUNCTIONS
var zoom = L.control.zoom({position:'topright',zoomInTitle:'Zoom In',zoomOutTitle:'Zoom Out'});
zoom.addTo(map);

var legend = L.control({position: 'bottomright'});
var details = L.control({position: 'bottomleft'});


legend.onAdd = function (map) {
	var legendDiv = L.DomUtil.create('div', 'info legend');
	
	var	grades = classLowerBounds,
	labels = [],
	from, to;

	for (var i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];

		labels.push(
			'<i style="background:' + getColor(from + 0.001) + '"></i> ' +
			from + (to ? '&ndash;' + to : '+'));
	}

	legendDiv.innerHTML = currentLegendText;
	legendDiv.innerHTML += labels.join('<br>');
	
	return legendDiv;
};

details.onAdd = function (map) {
	this._div = L.DomUtil.create('div','info details');
	this.update();
	return this._div;
};

details.update = function (props) {
	if (props){
		// Percentage of people in this census tract eligible for LCD's services. A string formatted as XX.XX
		var pctServedLCD = Number(props.CensusPovD) == 0 ? "N/A"
			: parseFloat(100.00 * Number(props.numClientI) / Number(props.CensusPovD)).toFixed(2).toString() + "%";
		
		this._div.innerHTML = "<h5>Census Tract " + props.NAME.toString() +"</h5>"
			 + "<p><b>Total population: " + props.CensusTota.toString() + "</b>"
			 + "<br>&nbsp;&nbsp;&nbsp;&nbsp;below 150% of the poverty line: " + props.CensusAllP.toString()
			 + "<br>&nbsp;&nbsp;&nbsp;&nbsp;with a disability: " + props.CensusAllD.toString()
			 + "<br>&nbsp;&nbsp;&nbsp;&nbsp;below 150% of the pov. line, with a disability: " + props.CensusPovD.toString()
			 + "<br><b>Number of LCD intakes, Jan 2010 - May 2015: " + props.numClientI.toString() + "</b>"
			 + "<br><i>(As a percentage of all potential clients: " + pctServedLCD + ")</i></p>";
		
		if (currentMetadata.name) {
			var selectedValue = currentMetadata.rawNumLegendText == classMetadata.stchris.rawNumLegendText ? Number(props.stchris) :
				currentMetadata.rawNumLegendText == classMetadata.abbottsford.rawNumLegendText ? Number(props.abbottsfor) :
				currentMetadata.rawNumLegendText == classMetadata.magee.rawNumLegendText ? Number(props.magee) :
				currentMetadata.rawNumLegendText == classMetadata.eleventhSt.rawNumLegendText ? Number(props.eleventhSt) :
				currentMetadata.rawNumLegendText == classMetadata.healthannex.rawNumLegendText ? Number(props.healthanne) :
				currentMetadata.rawNumLegendText == classMetadata.hahnemann.rawNumLegendText ? Number(props.hahnemann) :
				currentMetadata.rawNumLegendText == classMetadata.kleinctr.rawNumLegendText ? Number(props.kleinctr) :
				currentMetadata.rawNumLegendText == classMetadata.clocs.rawNumLegendText ? Number(props.clocs) :
				currentMetadata.rawNumLegendText == classMetadata.genIntake.rawNumLegendText ? Number(props.personal) + Number(props.legalaid) + Number(props.healthserv) + Number(props.courts) + Number(props.socialserv) + Number(props.internet) :
				currentMetadata.rawNumLegendText == classMetadata.pulmonary.rawNumLegendText ? Number(props.pulmonary) :
				currentMetadata.rawNumLegendText == classMetadata.mentalhealth.rawNumLegendText ? Number(props.mentalheal) :
				currentMetadata.rawNumLegendText == classMetadata.spinal.rawNumLegendText ? Number(props.spinal) :
				currentMetadata.rawNumLegendText == classMetadata.cancer.rawNumLegendText ? Number(props.cancer) :
				currentMetadata.rawNumLegendText == classMetadata.cardiac.rawNumLegendText ? Number(props.cardiac) :
				currentMetadata.rawNumLegendText == classMetadata.cerebral.rawNumLegendText ? Number(props.cerebral) :
				currentMetadata.rawNumLegendText == classMetadata.diabetes.rawNumLegendText ? Number(props.diabetes) :
				currentMetadata.rawNumLegendText == classMetadata.congenital.rawNumLegendText ? Number(props.congenital) :
				currentMetadata.rawNumLegendText == classMetadata.vision.rawNumLegendText ? Number(props.vision) :
				currentMetadata.rawNumLegendText == classMetadata.neuromuscular.rawNumLegendText ? Number(props.neuromuscu) :
				currentMetadata.rawNumLegendText == classMetadata.chrondis.rawNumLegendText ? Number(props.chrondis) :
				currentMetadata.rawNumLegendText == classMetadata.hearing.rawNumLegendText ? Number(props.hearing) :
				currentMetadata.rawNumLegendText == classMetadata.ambulatory.rawNumLegendText ? Number(props.ambulatory) :
				currentMetadata.rawNumLegendText == classMetadata.autoimmune.rawNumLegendText ? Number(props.autoimmune) :
				currentMetadata.rawNumLegendText == classMetadata.family.rawNumLegendText ? Number(props.family) :
				currentMetadata.rawNumLegendText == classMetadata.pubben.rawNumLegendText ? Number(props.pubben) :
				currentMetadata.rawNumLegendText == classMetadata.housing.rawNumLegendText ? Number(props.housing) :
				currentMetadata.rawNumLegendText == classMetadata.consumer.rawNumLegendText ? Number(props.consumer) :
				currentMetadata.rawNumLegendText == classMetadata.planning.rawNumLegendText ? Number(props.planning) :
				currentMetadata.rawNumLegendText == classMetadata.ssdi.rawNumLegendText ? Number(props.ssdi) :
				currentMetadata.rawNumLegendText == classMetadata.specialed.rawNumLegendText ? Number(props.specialed) :
				currentMetadata.rawNumLegendText == classMetadata.domestic.rawNumLegendText ? Number(props.domestic) :
				currentMetadata.rawNumLegendText == classMetadata.crim.rawNumLegendText ? Number(props.crim) :
				currentMetadata.rawNumLegendText == classMetadata.medicaid.rawNumLegendText ? Number(props.medicaid) :
				currentMetadata.rawNumLegendText == classMetadata.insurance.rawNumLegendText ? Number(props.insurance) :
				currentMetadata.rawNumLegendText == classMetadata.immigration.rawNumLegendText ? Number(props.immigratio) :
				currentMetadata.rawNumLegendText == classMetadata.civilrights.rawNumLegendText ? Number(props.civilright) :
				currentMetadata.rawNumLegendText == classMetadata.misclegal.rawNumLegendText ? Number(props.misclegal) :
					"N/A";

			
			this._div.innerHTML += "<p>&nbsp;&nbsp;&nbsp;&nbsp;" + currentMetadata.name + ": " + selectedValue.toString();
		} 
	} else {
		this._div.innerHTML = '<h5>No census tract is selected</h5>';
	}

};

details.addTo(map);
legend.addTo(map);


// This function updates the legend inner text
// Based on new values in classLowerBounds
updateLegend = function() {
	legend.removeFrom(map);
	legend.addTo(map);
}


updateCensusTracts = function() {
	if (censusTracts) {
		map.removeLayer(censusTracts);
	}

	if (showNormalized == true){
		classLowerBounds = currentMetadata.normalizedClasses;
		currentLegendText = currentMetadata.normalizedLegendText;
	} else {
		//showNormalized is false
		classLowerBounds = currentMetadata.rawNumClasses;
		currentLegendText = currentMetadata.rawNumLegendText;
	}

	addCensusTracts();
	updateLegend();
}

updateCensusTracts();

// Styling MLP marker icon
var MLPIcon = L.divIcon({
    className: 'hospitalMarker',
    iconSize: new L.Point(24, 24), 
    html: '+'
});

var MLPIconShaded = L.divIcon({
    className: 'hospitalMarkerHighlight',
    iconSize: new L.Point(24, 24), 
    html: '+'
});

// Adding the MLP markers
// These markers will only be added once; they do not change with user interaction
for (var i = 0; i < mlps.features.length; i++) {
	var theseProps = mlps.features[i].properties;
	var mlpPopup = L.popup({className: 'hospitalPopup'})
		.setContent("<b><u>LCD Medical-Legal Partnership</u></b><br>"
			+ theseProps.MLP + "<br>"
			+ theseProps.ARC_Addres + "<br>"
			+ theseProps.City + ", " + theseProps.State + "<br>"
			+ theseProps.ZIP.toString() + "<br>"
			+ theseProps.getThere);
	
	var thisMarker = L.marker([Number(theseProps.Y),Number(theseProps.X)],{
		icon: MLPIcon,
		zIndexOffset: 2000
	}).addTo(map).bindPopup(mlpPopup,{offset: [0,-8]});
	thisMarker.on('mouseover', function (e) {
		this.setIcon(MLPIconShaded);
	});
	thisMarker.on('mouseout', function (e) {
		this.setIcon(MLPIcon);
	});
	thisMarker.on('click', function (e) {
		this.openPopup();
	});
}


// Now, to add a D3 pie chart to the sidebar!
// First, initialize the variable to store whatever pie chart is currently on screen
var currentPie = null;
// A function to initialize new pie charts
function updatePie(pieDetails) {
	if (currentPie){currentPie.destroy()};
	currentPie = new d3pie("pieChart", pieDetails);
}

// This function updates both the internal Pie Chart and the map
function updateSubCategory(){
	// Updates the Pie Chart if there is one available
	if(currentMetadata.pieChart != "none"){
		updatePie(currentMetadata.pieChart);
	}
	
	updateCensusTracts();
}

// Function to update map information
document.getElementById("showMore").onclick = function() {
	var segInfo = currentPie.getOpenSegment().data.label.toString();
	
	currentMetadata = segInfo == "St. Chris" ? classMetadata.stchris :
		segInfo == "Abbottsford" ? classMetadata.abbottsford :
		segInfo == "Magee" ? classMetadata.magee :
		segInfo == "11th St" ? classMetadata.eleventhSt :
		segInfo == "Health Annex" ? classMetadata.healthannex :
		segInfo == "Hahnemann" ? classMetadata.hahnemann :
		segInfo == "Klein" ? classMetadata.kleinctr :
		segInfo == "General Intake" ? classMetadata.genIntake :
		segInfo == "CLOCs" ? classMetadata.clocs :
		segInfo == "Pulmonary" ? classMetadata.pulmonary :
		segInfo == "Mental Health" ? classMetadata.mentalhealth :
		segInfo == "Spinal & Back" ? classMetadata.spinal :
		segInfo == "Cancer" ? classMetadata.cancer :
		segInfo == "Cardiac & Vascular" ? classMetadata.cardiac :
		segInfo == "Cerebral" ? classMetadata.cerebral :
		segInfo == "Diabetes" ? classMetadata.diabetes :
		segInfo == "Developmental" ? classMetadata.congenital :
		segInfo == "Vision" ? classMetadata.vision :
		segInfo == "Neuromuscular" ? classMetadata.neuromuscular :
		segInfo == "Chronic & Arthritis" ? classMetadata.chrondis :
		segInfo == "Hearing" ? classMetadata.hearing :
		segInfo == "Ambulatory & Amputation" ? classMetadata.ambulatory :
		segInfo == "Auto-Immune" ? classMetadata.autoimmune :
		segInfo == "Family Law" ? classMetadata.family :
		segInfo == "Public Benefits" ? classMetadata.pubben :
		segInfo == "Housing" ? classMetadata.housing :
		segInfo == "Employment" ? classMetadata.consumer :
		segInfo == "Planning" ? classMetadata.planning :
		segInfo == "SSI/SSDI" ? classMetadata.ssdi :
		segInfo == "Special Education" ? classMetadata.specialed :
		segInfo == "Domestic Violence" ? classMetadata.domestic :
		segInfo == "Criminal Law" ? classMetadata.crim :
		segInfo == "Medicaid / Medicare" ? classMetadata.medicaid :
		segInfo == "Private Insurance" ? classMetadata.insurance :
		segInfo == "Immigration" ? classMetadata.immigration :
		segInfo == "Civil Rights" ? classMetadata.civilrights :
		segInfo == "Miscellaneous" ? classMetadata.misclegal :
		currentMetadata;
	

	jQuery('#showMore').hide();
	jQuery('#reset').show();
	updateSubCategory();
};



document.getElementById("reset").onclick = function() {
	resetPieTabs();
};

document.getElementById("showCensusPovDis").onclick = function() {
	currentMetadata = classMetadata.allpovdis;
	updateCensusTracts();
	jQuery(this).addClass('active');
	jQuery(this).siblings().removeClass('active');
};

document.getElementById("showCensusDisabled").onclick = function() {
	currentMetadata = classMetadata.alldis;
	updateCensusTracts();
	jQuery(this).addClass('active');
	jQuery(this).siblings().removeClass('active');
};

document.getElementById("showCensusPoverty").onclick = function() {
	currentMetadata = classMetadata.allpov;
	updateCensusTracts();
	jQuery(this).addClass('active');
	jQuery(this).siblings().removeClass('active');
};

document.getElementById("showCensusTotal").onclick = function() {
	currentMetadata = classMetadata.allcensuspop;
	updateCensusTracts();
    jQuery(this).addClass('active');
	jQuery(this).siblings().removeClass('active');
};
