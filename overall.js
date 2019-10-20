document.addEventListener('DOMContentLoaded', () => {
    const options = {
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
    };
    fetch('monthly_sales.csv').then(res => {
        return res.text();
    }).then(csv => {
        options.data = {
            csv
        };

        Highcharts.chart('overallchart', options);
    })
});