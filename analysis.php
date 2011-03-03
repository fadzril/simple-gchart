	<?php $thisPage="analysis"; ?>
	<?php include('header.php'); ?>
	<div class="container grid_12 alpha omega">
	<!-- Portlets -->
	<div class="portlet">
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
			<div class="grid_4 omega">
				<h4>Search Engine Traffic</h4>
				<div id="chart_2" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Direct Traffic</h4>
				<div id="chart_3" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Others Free</h4>
				<div id="chart_4" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Referral Sites</h4>
				<div id="chart_5" class="chart-element"></div>
			</div>	
			<div class="grid_4 omega">
				<h4>Social Media Traffic</h4>
				<div id="chart_6" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Paid Traffic (tagged with PAID)</h4>
				<div id="chart_7" class="chart-element"></div>
			</div>				
		</div>
	</div>
	<!-- End of Portlets -->
	<!-- Portlets -->
	<div class="portlet">
		<div class="title">Paid Keywords</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="charts">
			<!-- Chart Render -->
			<div class="grid_4 omega">
				<div id="chart_8" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<div id="chart_9" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Tutorial &amp; Tips</h4>
				<div class="videobox">
					<div href="#video3" class="videolink"><img src="assets/images/video/video.png"></div>
					<div id="video3">
						<object width="571" height="428"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=10038503&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=9a0707&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=10038503&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=9a0707&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="571" height="428"></embed></object>
					</div>

					<div class="desc">
						<a href="#video3" class="videolink">Zero-to-App Module 2: Creating Your Mobile Development Environment</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End of Portlets -->
	<!-- Portlets -->
	<div class="portlet">
		<div class="title">Non-Paid Keywords</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="charts">
			<div class="grid_4 omega">
				<h4>Non-Paid Traffic Growth</h4>
				<div id="chart_10" class="chart-element"></div>
			</div>	
			<div class="grid_4 omega">
				<h4>Twitter</h4>
				<div id="chart_11" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Search Engines</h4>
				<div id="chart_12" class="chart-element"></div>
			</div>	
		</div>
	</div>
	<!-- End of Portlets -->
	<div class="portlet">
		<div class="title">Long Tail Graph Keywords</div>
		<!-- Show/Hide -->
		<a class="show">+</a>
		<!-- Chart Container -->
		<div class="charts">
			<div class="grid_4 omega">
				<h4>Unique Visits Vs Keywords</h4>
				<div id="chart_13" class="chart-element"></div>
			</div>	
			<div class="grid_4 omega">
				<h4>Unique Visits Vs Paid Keywords</h4>
				<div id="chart_14" class="chart-element"></div>
			</div>
			<div class="grid_4 omega">
				<h4>Unique Visits Vs Non-Paid Keywords</h4>
				<div id="chart_15" class="chart-element"></div>
			</div>	
		</div>
	</div>
	<!-- End of Portlets -->
	<script type="text/javascript" src="assets/javascripts/analysis.js"></script>
	</div>
	<?php include('footer.php'); ?>