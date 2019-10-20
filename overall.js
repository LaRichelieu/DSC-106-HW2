document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('overallchart', {
        chart: {
            type: 'line'
        },

        title: {
            text: 'Overall Monthly Sales of Different Products'
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
    });
});