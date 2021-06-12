    google.charts.load("current", {
      packages: ["geochart"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      const data = google.visualization.arrayToDataTable([
        ["Country", "Number of students"],
        ["GA", 1],
        ["TW", 1],
        ["DE", 1],
        ["RU", 5],
        ["MN", 115],
        ["BD", 1],
        ["VE", 1],
        ["VN", 87],
        ["BY", 2],
        ["ES", 2],
        ["AU", 1],
        ["UZ", 102],
        ["ID", 3],
        ["JP", 1],
        ["CN", 495],
        ["TJ", 1],
        ["TH", 6],
        ["TN", 1],
        ["FR", 5],
        ["PH", 0],
      ]);

      const options = {
        backgroundColor: '#FFFEDE',
        width: 1000,
        height: 550,
        colorAxis: { colors: ["#5CAB7D", "#44633F"] },
      };

      const chart = new google.visualization.GeoChart(
        document.getElementById("geo_2020")
      );

      chart.draw(data, options);
    }