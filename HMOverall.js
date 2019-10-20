document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('HMOverall', {
        chart: {
            type: 'line'
        },

        title: {
            text: 'Overall Monthly Sales of Hamburger'
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
            name: 'Hamburger',
            data: [5598648, 5840210, 5909899, 5799715, 6080407,
            6056108, 6163373, 6537463, 6382884, 6343865, 6490244,
            6340076, 6685774, 7152982, 6817973, 6863707, 6964094,
            7167558, 6840830, 7497876, 7352926, 7170291, 7549336,
            7707776, 7887763, 7990228, 7654312, 7947352, 8186393,
            7629715, 8012517, 8060250, 7922921, 6781234, 7386402,
            6954506, 7568561, 7350256, 7267799, 7317841, 7620829,
            7124175, 6956441, 7190660, 7142860]
        }]
    });
});