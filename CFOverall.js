document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('CFOverall', {
        chart: {
            type: 'line'
        },

        title: {
            text: 'Overall Monthly Sales of Chicken Fillet'
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
            name: 'Chicken Fillet',
            data: [2352671, 2394392, 2461847, 2455722, 2533501,
            2504226, 2547327, 2723694, 2617860, 2663903, 2748759,
            2599316, 2808128, 2911445, 2886869, 2813861, 2878324,
            2962089, 2944269, 3173062, 3063462, 2987291, 3096246,
            3186172, 3234631, 3328733, 3139645, 3285062, 3438398,
            3256752, 3338673, 3467244, 3327230, 2862020, 3052314,
            2874069, 3128423, 3061564, 3003545, 3073157, 3175075,
            2921766, 2852679, 2995435, 3023767]
        }]
    });
});