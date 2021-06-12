    // Load the Visualization API and the corechart package.
    google.charts.load("current", { packages: ["corechart"] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn("string", "Topping");
      data.addColumn("number", "Slices");
      data.addRows([
        ["China", 495],
        ["Mongolia", 115],
        ["Uzbekistan", 102],
        ["Vietnam", 87],
        ["Thailand", 6],
      ]);

      // Set chart options
      var options = {
        title: "Top 5 countries for international students at CBNU in 2020",
        width: 800,
        height: 800,
        is3D: true,
        backgroundColor: '#fffff3'
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(
        document.getElementById("pie_2020")
      );
      chart.draw(data, options);
    }