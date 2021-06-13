    google.charts.load("current", { packages: ["corechart"] });

 
    google.charts.setOnLoadCallback(drawChart);

 
    function drawChart() {

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

      var options = {
        title: "Top 5 countries for international students at CBNU in 2020",
        width: 800,
        height: 800,
        is3D: true,
        backgroundColor: '#fffff3'
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("pie_2020")
      );
      chart.draw(data, options);
    }