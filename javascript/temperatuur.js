
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
			{ x: new Date(2030, 0, 5), y: -100 },
			{ x: new Date(2030, 0, 6), y: -90 },
			{ x: new Date(2030, 0, 7), y: -86 },
			{ x: new Date(2030, 0, 8), y: -85 },
			{ x: new Date(2030, 0, 9), y: -80 },
			{ x: new Date(2030, 0, 10), y: -87 },
			{ x: new Date(2030, 0, 11), y: -90 },
			{ x: new Date(2030, 0, 12), y: -87 },
			{ x: new Date(2030, 0, 13), y: -95 },
			{ x: new Date(2030, 0, 14), y: -100 },
			{ x: new Date(2030, 0, 15), y: -102 },
			{ x: new Date(2030, 0, 16), y: -99 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Minimum Temperatuur",
		lineDashType: "dash",
      	color: "#5c85d6",
		dataPoints: [
			{ x: new Date(2030, 0, 3), y: 20 },
			{ x: new Date(2030, 0, 4), y: 18 },
			{ x: new Date(2030, 0, 5), y: 22 },
			{ x: new Date(2030, 0, 6), y: 25 },
			{ x: new Date(2030, 0, 7), y: 23 },
			{ x: new Date(2030, 0, 8), y: 19 },
			{ x: new Date(2030, 0, 9), y: 16 },
			{ x: new Date(2030, 0, 10), y: 18 },
			{ x: new Date(2030, 0, 11), y: 18 },
			{ x: new Date(2030, 0, 12), y: 20 },
			{ x: new Date(2030, 0, 13), y: 23 },
			{ x: new Date(2030, 0, 14), y: 21 },
			{ x: new Date(2030, 0, 15), y: 17 },
			{ x: new Date(2030, 0, 16), y: 15 }
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
