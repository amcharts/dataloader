/*
Plugin Name: amCharts Data Loader
Description: This plugin adds external data loading capabilities to all amCharts libraries.
Author: Martynas Majeris, amCharts
Version: 0.9
Author URI: http://www.amcharts.com/

Copyright 2015 amCharts

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Please note that the above license covers only this plugin. It by all means does
not apply to any other amCharts products that are covered by different licenses.
*/

AmCharts.addInitHandler( function ( chart ) {

	// check charts version for compatibility
	// the first compatible version is 3.13
	var version = chart.version.split( '.' );
	if ( ( Number( version[0] ) < 3 ) || ( 3 == Number( version[0] ) && ( Number( version[1] ) < 13 ) ) )
		return;

}, [ 'pie', 'serial', 'xy', 'funnel', 'radar', 'gauge', 'stock', 'map' ] );