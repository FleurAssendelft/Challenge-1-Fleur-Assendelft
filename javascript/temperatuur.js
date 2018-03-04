
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light",
	title:{
		text: ""
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Temperatuur in graden celcius",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Maximum temperatuur",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#4b5256",
		dataPoints: [
			{ x: new Date(2030, 0, 3), y: -113 },
			{ x: new Date(2030, 0, 4), y: -120 },
			{ x: new Date(2030, 0, 5), y: -122 },
			{ x: new Date(2030, 0, 6), y: -140 },
			{ x: new Date(2030, 0, 7), y: -135 },
			{ x: new Date(2030, 0, 8), y: -130 },
			{ x: new Date(2030, 0, 9), y: -127 },
			{ x: new Date(2030, 0, 10), y: -150 },
			{ x: new Date(2030, 0, 11), y: -152 },
			{ x: new Date(2030, 0, 12), y: -160 },
			{ x: new Date(2030, 0, 13), y: -157 },
			{ x: new Date(2030, 0, 14), y: -148 },
			{ x: new Date(2030, 0, 15), y: -150 },
			{ x: new Date(2030, 0, 16), y: -138 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Minimum Temperatuur",
		lineDashType: "dash",
      	color: "#5c85d6",
		dataPoints: [
			{ x: new Date(2030, 0, 3), y: 127 },
			{ x: new Date(2030, 0, 4), y: 120 },
			{ x: new Date(2030, 0, 5), y: 123 },
			{ x: new Date(2030, 0, 6), y: 100 },
			{ x: new Date(2030, 0, 7), y: 90 },
			{ x: new Date(2030, 0, 8), y: 97 },
			{ x: new Date(2030, 0, 9), y: 102 },
			{ x: new Date(2030, 0, 10), y: 125 },
			{ x: new Date(2030, 0, 11), y: 120 },
			{ x: new Date(2030, 0, 12), y: 122 },
			{ x: new Date(2030, 0, 13), y: 119 },
			{ x: new Date(2030, 0, 14), y: 109 },
			{ x: new Date(2030, 0, 15), y: 99 },
			{ x: new Date(2030, 0, 16), y: 104 }
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
