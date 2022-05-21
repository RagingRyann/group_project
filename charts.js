var dataset;

function init() {
	// Grab a reference to the dropdown select element
	var selector = d3.select("#selDataset");

	// Use the list of sample ages to populate the select options
	d3.csv("heart_clean.csv").then((data) => {
		dataset = data
		console.log(data);
		var sampleAges = data.map(person => person.age);
		console.log(sampleAges);

		var sampleAgesSorted = sampleAges.sort((a,b) => a-b);
		console.log(sampleAgesSorted);

		sampleAgesSorted.forEach((sample) => {
			selector
				.append("option")
				.text(sample)
				.property("value", sample);
		});

		// Use the first sample from the list to build the initial plots
		var firstSample = sampleAges[0];
		buildCharts(firstSample);
		buildMetadata(firstSample);
	});
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
	console.log(newSample);
	// Fetch new data each time a new sample is selected
	buildMetadata(newSample);
	buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(age) {

	var riskFactors = dataset;
	console.log(riskFactors);
	// Filter the data for the object with the desired sample number
	var result = riskFactors.find(sampleObj => sampleObj.age == age);

	// Use d3 to select the panel with id of `#sample-metadata`
	var PANEL = d3.select("#sample-metadata");

	// Use `.html("") to clear any existing metadata
	PANEL.html("");

	// Use `Object.entries` to add each key and value pair to the panel
	// Hint: Inside the loop, you will need to use d3 to append new
	// tags for each key-value in the metadata.
	Object.entries(result).forEach(([key, value]) => {
		PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
	});

}

// 1. Create the buildCharts function.
function buildCharts(age) {
	// 2. Use d3.json to load and retrieve the .csv file 

	// 3. Create a variable that holds the array.
	var sampledata = dataset;

	// 4. Create a variable that filters the samples for the object with the desired sample number.
	var firstSample = sampledata.find(sampleObj => sampleObj.age == age);

	var chole = firstSample.serum_cholesterol;
	console.log(chole);

	// 4. Create the trace for the gauge chart.
	var trace2 = {
		value: chole,
		title: { text: "Cholesterol" },
		type: "indicator",
		mode: "gauge+number",
		gauge: {
			axis: { range: [null, 250], tickwidth: 1, tickcolor: "darkblue" },
			bar: { color: "darkblue" },
			bgcolor: "white",
			borderwidth: 2,
			bordercolor: "gray",
			steps: [
				{ range: [0, 50], color: "cyan" },
				{ range: [50, 100], color: "royalblue" },
				{ range: [100, 150], color: "lime" },
				{ range: [150, 200], color: "red" },
				{ range: [200, 250], color: "black" }
			]

		}
	};

	var gaugeData = [trace2];

	// 5. Create the layout for the gauge chart.
	var gaugeLayout = {
		width: 250,
		height: 250,
		margin: { t: 25, r: 50, l: 25, b: 25 },
		font: { color: "darkblue", family: "Arial" }
	};

	// 6. Use Plotly to plot the gauge data and layout.
	Plotly.newPlot("gauge", gaugeData, gaugeLayout);

	var pressure = firstSample.resting_blood_pressure;
	console.log(pressure);

	// 4. Create the trace for the gauge chart.
	var trace1 = {
		value: pressure,
		title: { text: "Blood Pressure" },
		type: "indicator",
		mode: "gauge+number",
		gauge: {
			axis: { range: [null, 250], tickwidth: 1, tickcolor: "darkblue" },
			bar: { color: "darkblue" },
			bgcolor: "white",
			borderwidth: 2,
			bordercolor: "gray",
			steps: [
				{ range: [0, 50], color: "cyan" },
				{ range: [50, 100], color: "royalblue" },
				{ range: [100, 150], color: "lime" },
				{ range: [150, 200], color: "red" },
				{ range: [200, 250], color: "black" }
			]

		}
	};

	var gaugeData = [trace1];

	// 5. Create the layout for the gauge chart.
	var gaugeLayout = {
		width: 250,
		height: 250,
		margin: { t: 25, r: 50, l: 25, b: 25 },
		font: { color: "darkblue", family: "Arial" }
	};

	// 6. Use Plotly to plot the gauge data and layout.
	Plotly.newPlot("gauge1", gaugeData, gaugeLayout);
}