<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Fastrack Analytics Dashboard</title>
	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script type="text/javascript">google.load("jquery", "1");</script>
	<script type="text/javascript">google.load('visualization', '1', {packages: ['corechart','columnchart','table','imagesparkline' ]});</script>
	<script type="text/javascript" src="assets/javascripts/cufon-yui.js"></script>
	<script type="text/javascript" src="assets/javascripts/museo.font.js"></script>
	<script type="text/javascript" src="assets/javascripts/application.js"></script>
	<link type="text/css" href="assets/stylesheets/application.css" rel="stylesheet" media="screen">
</head>
<body>
	<div id="wrapper" class="container_12">
		<!-- Begin Header -->
		<div id="header">
			<h1 class="grid_7 alpha"><a href="#">Fastrack Analytics Dashboard</a></h1>
			<!-- Account Settings -->
			<div id="settings" class="grid_5 omega">
				<ul>
					<li><a href="#">Account</a>
						<ul>
							<li><a href="#">Change Password</a></li>
							<li><a href="#">Edit Settings</a></li>
						</ul>
					</li>
					<li><a href="#">Messages (0)</a></li>
					<li><a href="#">Logout</a></li>
					<li><a href="#">Visit Site</a></li>
				</ul>
			</div>
			<!-- End Settings -->
			<!-- Main Navigation -->
			<div id="navigation" class="grid_12">
				<ul>
					<li<?php if ($thisPage=="index") echo " class=\"current\""; ?>><a href="index.php">Dashboard</a></li>
					<li<?php if ($thisPage=="acquisition") echo " class=\"current\""; ?>><a href="acquisition.php">Acquisition</a></li>
					<li<?php if ($thisPage=="activation") echo " class=\"current\""; ?>><a href="index.php">Activation</a></li>
					<li<?php if ($thisPage=="retention") echo " class=\"current\""; ?>><a href="retention.php">Retention</a></li>
					<li<?php if ($thisPage=="referral") echo " class=\"current\""; ?>><a href="referral.php">Referrals</a></li>
					<li<?php if ($thisPage=="action") echo " class=\"current\""; ?>><a href="action.php">Immediate Action Items</a></li>
					<li<?php if ($thisPage=="analysis") echo " class=\"current\""; ?>><a href="analysis.php">Analysis On Acquisition Traffic</a></li>
				</ul>
			</div>
			<!-- End Navigation -->
		</div>
		<!-- End Header -->
		<!-- Begin Content -->
		<div id="content" class="grid_12">