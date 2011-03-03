$(function(){
		
	/* Some raw data (not necessarily accurate) */
	// Dataset
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	var months = ['2004/05', '2005/06', '2006/07', '2007/08', '2008/09'];
	var data = [[165, 135, 157, 139, 324],[938, 1120, 1167, 1110, 356],[522, 599, 587, 615, 253],[998, 1268, 807, 968, 895],[854, 1245, 357, 211,553]];
	
	for (var i = 0; i < 9; i++){
		var placeholder = '#chart_'+[i];
		$(placeholder).each(function(i){
			var container = $(this);
			var selection = $(container[i]).attr('id');
			if( selection == 'chart_2' || selection == 'chart_4' ||
				selection == 'chart_6' || selection == 'chart_8'){
				createColumnCharts($(container[i]));
			}
			else
				createLineCharts(container);
		});
		
	};
		
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

	function createColumnCharts(container){
		var charts = new Charts();
		var header = $(container).parents('.portlet').children('.title').text();
		charts.parseData(months, labels, data);
		charts.add('ColumnChart', container);
		charts.draw({title: header, isStacked:true});
	};
	
	function createAreaCharts(container){
		var charts = new Charts();
		var header = $(container).parents('.portlet').children('.title').text();
		charts.parseData(months, labels, data);
		charts.add('AreaChart', container);
		charts.draw({title: header});
	};
	
	function createLineCharts(container){
		var charts = new Charts();
		var header = $(container).parents('.portlet').children('.title').text();
		charts.parseData(months, labels, data);
		charts.add('LineChart', container);
		charts.draw({title: header});
	};
	
	function createBarCharts(container){
		var charts = new Charts();
		var header = $(container).parents('.portlet').children('.title').text();
		charts.parseData(months, labels, data);
		charts.add('BarChart', container);
		charts.draw({title: header});
	};
	
});