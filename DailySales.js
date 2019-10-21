document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('DailySales', {
        chart: {
            type: 'line'
        },

        title: {
            text: 'Average Sales on Different Days of the Week'
        },

        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'],
        },

        yAxis: {
            title: {
                text: 'Average Sales'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        series: [{
            name: 'Average Total Sales',
            data: [303163.75, 300023.25, 303959.5, 303729.75,
            310587, 294333.4, 296574.4]
        }]
    });
});