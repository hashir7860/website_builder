// visitors graph
var salesDataInMinutes = [4, 3, 10, 9, 29, 19];

var options = {
    series: [
        {
            name: "Sales",
            data: salesDataInMinutes,
        },
    ],
    chart: {
        height: 350,
        type: "line",
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 4,
        curve: "smooth",
        colors: ["rgba(15, 183, 255, 1)"], // Set the line color to black (#000000)
    },
    xaxis: {
        type: "datetime",
        categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
        ],
        tickAmount: 10,
        labels: {
            formatter: function (value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                // Convert the value to minutes
                var minutes = Math.floor(value);
                return minutes;
            },
        },
        // title: {
        //   text: "Time (minutes)",
        //   style: {
        //     fontSize: "16px",
        //     color: "#666",
        //   },
        // },
    },
    title: {
        //   text: "147 min",
        align: "center",
        style: {
            fontSize: "24px",
            color: "#666",
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// End visitors graph

var series = {
    monthDataSeries1: {
        prices: [
            // 8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
            // 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
            // 8496.25, 8600.65, 8881.1, 9340.85,
            1, 2, 40, 6, 5, 3, 15, 99, 15, 0,
        ],
        dates: [
            "02 Feb",
            "03 Feb",
            "04 Feb",
            "05 Feb",
            "06 Feb",
            "07 Feb",
            "08 Feb",
            "09 Feb",
            "10 Feb",
            "11 Feb",
        ],
    },
};

var options = {
    series: [
        {
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices,
        },
    ],
    chart: {
        type: "area",
        height: 350,
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        colors: ["#3c50e0"], // Set the line color to black (#000000)
    },
    title: {
        text: "3,331 downloads in the last 30 days",
        align: "center",
    },
    // subtitle: {
    //   text: 'Price Movements',
    //   align: 'left',
    // },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value.toFixed(0);
            },
        },
        // title: {
        //   text: 'Price',
        //   style: {
        //     fontSize: '16px',
        //     color: '#666',
        //   },
        // },
        opposite: false,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
            colorStops: [
                {
                    offset: 0,
                    color: '#3c50e0', // Start color
                    opacity: 1,
                },
                {
                    offset: 100,
                    color: '#80caee', // End color
                    opacity: 1,
                },
            ],
        },
    },

    legend: {
        horizontalAlign: "left",
    },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();