document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('FFOverall', {
        chart: {
            type: 'line'
        },

        title: {
            text: 'Overall Monthly Sales of Fish Fillet'
        },

        xAxis: {
            categories: ['16-Jan', '16-Feb', '16-Mar', '16-Apr', '16-May',
            '16-Jun', '16-Jul', '16-Aug', '16-Sep', '16-Oct', '16-Nov',
            '16-Dec', '17-Jan', '17-Feb', '17-Mar', '17-Apr', '17-May',
            '17-Jun', '17-Jul', '17-Aug', '17-Sep', '17-Oct', '17-Nov',
            '17-Dec', '18-Jan', '18-Feb', '18-Mar', '18-Apr', '18-May',
            '18-Jun', '18-Jul', '18-Aug', '18-Sep', '18-Oct', '18-Nov',
            '18-Dec', '19-Jan', '19-Feb', '19-Mar', '19-Apr', '19-May',
            '19-Jun', '19-Jul', '19-Aug', '19-Sep'],

            plotLines: [{
                color: 'red',
                value: 33,
                width: 2   
            }]
        },

        yAxis: {
            title: {
                text: 'Sales'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        series: [{
            name: 'Fish Fillet',
            data: [1399660, 1448157, 1453511, 1461148, 1507504,
            1514266, 1553107, 1620900, 1609076, 1611235, 1661883,
            1559588, 1698295, 1759942, 1732267, 1715924, 1754566,
            1748524, 1751563, 1888539, 1809174, 1806878, 1887120,
            1942176, 1926117, 2028810, 1883343, 2019461, 2063039,
            1954050, 1987216, 2014826, 1997118, 1730781, 1860819,
            1710520, 1861751, 1866627, 1802980, 1859086, 1890213,
            1752262, 1738859, 1768857, 1815026]
        }]
    });
});