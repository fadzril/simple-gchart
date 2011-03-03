	<?php $thisPage="index"; ?>
	<?php include('header.php'); ?>
	<div class="container grid_9 alpha">
	<!-- Portlets -->
	<div id="p1" class="portlet">
		<div class="title">Total Visits Month on Month</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="charts">
			<!-- Chart Select -->
			<div class="select">
			<ul>
				<li><a href="#">Chart Type</a>
					<ul>
						<li><a href="#" id="area" rel="AreaChart">Area Chart</a></li>
						<li><a href="#" id="line" rel="LineChart">Line Chart</a></li>
						<li><a href="#" id="column" rel="ColumnChart">Column</a></li>
						<li><a href="#" id="bar" rel="BarChart">Bar Chart</a></li>
					</ul>
				</li>
			</ul>
			</div>
			<!-- Chart Render -->
			<div id="chart_1" class="chart-element"></div>						
		</div>
	</div>
	<!-- End of Portlets -->
	<!-- Portlets -->
	<div class="portlet">
		<div class="title">Total Unique Visits on Year</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="charts">
			<!-- Chart Select -->
			<div class="select">
			<ul class="competitor">
				<li><a href="#">Select Competitor</a>
					<ul>
						<li><a href="#" id="c1" rel="data1">Competitor 1</a></li>
						<li><a href="#" id="c2" rel="data2">Competitor 2</a></li>
					</ul>
				</li>
			</ul>
			</div>
			<!-- Chart Render -->
			<div id="chart_2" class="chart-element"></div>	
			<!-- Chart Render -->
			<div id="chart_3" class="chart-element"></div>	
		</div>
	</div>
	<!-- End of Portlets -->
	<!-- Portlets -->
	<div class="portlet">
		<div class="title">Total Unique Visits Summary</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="summary charts">
			<div class="grid_3 omega">
				<h4>www.yoursite.com</h4>
				<div id="chart_4"></div>
			</div>
			<div class="grid_3 omega">
				<h4>www.competitor 1.com</h4>
				<div id="chart_5"></div>
			</div>
			<div class="grid_3 omega">
				<h4>www.competitor 2.com</h4>
				<div id="chart_6"></div>
			</div>
			<div class="grid_3 omega">
				<h4>www.competitor 3.com</h4>
				<div id="chart_7"></div>
			</div>
		</div>
	</div>
	<!-- End of Portlets -->
	<script type="text/javascript" src="assets/javascripts/dashboard.js"></script>
	</div>
	<?php include('sidebar.php'); ?>
	<?php include('footer.php'); ?>