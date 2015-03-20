# amCharts Data Loader

Version: 0.9


## Description

By default all amCharts libraries accept data in JSON format. It needs to be 
there when the web page loads, defined in-line or loaded via custom code.

This plugin introduces are native wrapper that enables automatic loading of data
from external data data sources in CSV and JSON formats.

Most of the times you will just need to provide a URL of the external data 
source - static file or dynamically generated - and it will do the rest.


## Usage

1. Include the minified version of file of this plugin. I.e.:

```
<script src="amcharts/plugins/dataloader/dataloader.min.js" type="text/javascript"></script>
```

(this needs to go after all the other amCharts includes)

2. Add data source properties to your chart configuration.

Regular (Serial, Pie, etc.) charts:

```
AmCharts.makeChart( "chartdiv", {
  ...,
  "dataLoader": {
    "url": "data.json",
    "format": "json"
  }
} );
```

Stock chart:

```
AmCharts.makeChart( "chartdiv", {
  ...,
  "dataSets": [{
    ...,
    "dataLoader": {
      "url": "data.csv"
      "format": "csv",
      "separator": ",",  // column separator (could be any symbol or "tab")
      "skipLines": 1     // skip header row
    }
  }]
} );
```

That's it. The plugin will make sure the files are loaded and dataProvider is 
populated with their content *before* the chart is built.

Some formats, like CSV, will require additional parameters needed to parse the 
data, such as "separator".

If the "format" is omitted, the plugin will try to guess the format on it's own.
(using file name extension and / or HTTP response headers) However, for the sake
of reliability, you should always set it.


## Requirements

This plugin requires at least 3.13 version of JavaScript Charts, JavaScript
Stock Chart or JavaScript Maps.


## Demos

Run the index.html in the subdirectory /examples.


## Extending this plugin

You're encouraged to modify, extend and make derivative plugins out of this
plugin.

You can modify files, included in this archive or, better yet, fork this project
on GitHub:

https://github.com/amcharts/dataloader

We're curious types. Please let us know (contact@amcharts.com) if you do create
something new out of this plugin.


## License

This plugin is licensed under Apache License 2.0.

This basically means you're free to use or modify this plugin, even make your
own versions or completely different products out of it.

Please see attached file "license.txt" for the complete license or online here:

http://www.apache.org/licenses/LICENSE-2.0


## Contact us

* Email:contact@amcharts.com
* Web: http://www.amcharts.com/
* Facebook: https://www.facebook.com/amcharts
* Twitter: https://twitter.com/amcharts


## Changelog

### 0.9
* Initial release