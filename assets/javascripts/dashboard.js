
function dataset1() {
	// Some raw data (not necessarily accurate)
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	var months = ['2004/05', '2005/06', '2006/07', '2007/08', '2008/09'];
	var data = [[165, 135, 157, 139, 353],[938, 1120, 1167, 1110, 503],[522, 599, 587, 615, 394],[998, 1268, 807, 968, 395],[450, 288, 397, 215, 1932]];
	
	// Create and populate the data table.
	var dataset = new google.visualization.DataTable();
	dataset.addColumn('string', 'Name');
	for (var i = 0; i < labels.length; ++i) {
	  dataset.addColumn('number', labels[i]);
	}
	dataset.addRows(months.length);
	for (var i = 0; i < months.length; ++i) {
	  dataset.setCell(i, 0, months[i]);
	}
	for (var i = 0; i < labels.length; ++i) {
	  var d = data[i];
	  for (var set = 0; set < months.length; ++set) {
	    dataset.setCell(set, i + 1, d[set]);
	  }
	}
	
	return dataset;
	
};

function dataset2() {
	// Some raw data (not necessarily accurate)
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	var months = ['2004/05', '2005/06', '2006/07', '2007/08', '2008/09'];
	var data = [[123, 323, 157, 468,444],[435, 363, 1533, 356,443],[854, 1245, 357, 211,553],[632, 1246, 356, 742,533],[732, 136, 855, 231,335]];
	
	// Create and populate the data table.
	var dataset = new google.visualization.DataTable();
	dataset.addColumn('string', 'Name');
	for (var i = 0; i < labels.length; ++i) {
	  dataset.addColumn('number', labels[i]);
	}
	dataset.addRows(months.length);
	for (var i = 0; i < months.length; ++i) {
	  dataset.setCell(i, 0, months[i]);
	}
	for (var i = 0; i < labels.length; ++i) {
	  var d = data[i];
	  for (var set = 0; set < months.length; ++set) {
	    dataset.setCell(set, i + 1, d[set]);
	  }
	}
	
	return dataset;
	
};

function totalSet() {
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	
	// Create and populate the data table.
	var dataset = new google.visualization.DataTable();
	dataset.addColumn('string', 'Item');
	dataset.addColumn('number', 'Total');
	dataset.addRows(labels.length);
	dataset.setCell(0,0, 'Visitors');
	dataset.setCell(0,1, 435);
	dataset.setCell(1,0, 'Unique Visitor');
	dataset.setCell(1,1, 363);
	dataset.setCell(2,0, 'Page View');
	dataset.setCell(2,1, 1533);
	dataset.setCell(3,0, 'Others');
	dataset.setCell(3,1, 356);

	return dataset;
	
};

$.fn.setCompetitorChart = function(data, title){
	var id = $(this).attr('id');
	var c = document.getElementById( id );
	var drawLineChart = new google.visualization.LineChart( c );
	drawLineChart.draw(data, {title : title, height: 300, legend: 'bottom', colors:['#98D8F4','#E85500','#B3CF2F', '#FEB800', '#FFA1C5', '#D984FF', '#DD9D75']});
	return this
};

$.fn.setBarFormatChart = function(data){
	var id = $(this).attr('id');
	var c = document.getElementById( id );
	var table = new google.visualization.Table( c );
	var formatter = new google.visualization.TableBarFormat({width:50});
	formatter.format(data,1);
	table.draw(data, {allowHtml: true});
	return this
};

$.fn.setSparkLinesChart = function(data){
	var id = $(this).attr('id');
	var c = document.getElementById( id );
	var drawSparkLine = new google.visualization.ImageSparkLine( c );
	drawSparkLine.draw(data, {width: 220, height: 40, showAxisLines: false, showValueLabels: false, labelPosition: 'left', title:['Total Unique Visits']});
	return this
};

$(function(){
          
	/* Some raw data (not necessarily accurate) */
	// Dataset
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	var months = ['2004/05', '2005/06', '2006/07', '2007/08', '2008/09'];
	var data = [[165, 135, 157, 139, 324],[938, 1120, 1167, 1110, 356],[522, 599, 587, 615, 253],[998, 1268, 807, 968, 895],[854, 1245, 357, 211,553]];
	
	var competitor1 = dataset1();
	var competitor2 = dataset2();
	var total = totalSet();
	
	createAreaCharts($('#chart_1'));
	$('#chart_2, #chart_3').each(function(i){
		var container = $(this);
		/* Default chart */
		createLineCharts(container);
	});
	
	$('#chart_4, #chart_5, #chart_6, #chart_7').each(function(i){
		var container = $(this);
		var selection = $(this).attr('id');
			if( selection == 'chart_5' || selection == 'chart_7'){
				var c = '#'+selection;
				$(c).setSparkLinesChart(competitor2);
			}
			else
			container.setSparkLinesChart(competitor1);
	});
	
	
	/* Chart based on select events */
	$('.select li a').click(function(e){
		var c = $(this).parents('.portlet').children('.charts').children('.chart-element');
		var param = $(this).attr('rel');
		switch(param){
			case "AreaChart":
				$(c).showPreloader();
				setTimeout(function(){					
					createAreaCharts(c);
					},2500);
				break;
			case "LineChart":
				$(c).showPreloader();
				setTimeout(function(){					
					createLineCharts(c);
					},2500);
				break;	
			case "ColumnChart":
				$(c).showPreloader();
				setTimeout(function(){					
					createColumnCharts(c);
					},2500);
				break;
			case "BarChart":
				$(c).showPreloader();
				setTimeout(function(){					
					createBarCharts(c);
					},2500);
				break;
			default:
				break;
		}
		e.preventDefault();
	});
	
	/* Chart based on select competitor */
	$('.competitor li a').click(function(e){
		var c = $('#chart_3');
		var param = $(this).attr('rel');
		switch(param){
			case "data1":
				$(c).showPreloader();
				setTimeout(function(){					
					c.setCompetitorChart( competitor1, 'www.competitor1.com' );
					},2500);
				break;
			case "data2":
				$(c).showPreloader();
				setTimeout(function(){					
					c.setCompetitorChart( competitor2, 'www.competitor2.com' );
					},2500);
				break;	
			default:
				break;
		}
		e.preventDefault();
	});
	
	function createColumnCharts(container){
		var charts = new Charts();
		charts.parseData(months, labels, data);
		charts.add('ColumnChart', container);
		charts.draw({title: ''});
	};
	
	function createAreaCharts(container){
		var charts = new Charts();
		charts.parseData(months, labels, data);
		charts.add('AreaChart', container);
		charts.draw({title: ''});
	};
	
	function createLineCharts(container){
		var charts = new Charts();
		charts.parseData(months, labels, data);
		charts.add('LineChart', container);
		charts.draw({title: ''});
	};
	
	function createBarCharts(container){
		var charts = new Charts();
		charts.parseData(months, labels, data);
		charts.add('BarChart', container);
		charts.draw({title: ''});
	};

});