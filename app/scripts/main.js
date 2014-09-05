'use strict';


var w = true;
$('#toggle-canals').click(function(){
    if (w) {
        $('#np-map').attr('src', '/media/north-platte-canal-system.png');
        w = false;
    } else {
        $('#np-map').attr('src', '/media/north-platte-river.png');
        w = true;
    }
});

$(function() {
    $('#new-wells-chart').highcharts({
        chart: {
            plotBackgroundColor: 'white', //not needed
            type: 'line',
            showAxes: false
        },
        title: {
            text: null
        },
        exporting: false,
        credits: {
            enabled: false
        },
        xAxis: {
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            tickColor: '#fff'
        },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#fff'
            }],
            title: {
                enabled: false
            },
            labels: {
                enabled: false
            },
            min: 0,
            tickInterval: 2500,
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        plotOptions: {
            line: {
                color: 'gray',
                marker: {
                    symbol: 'circle',
                    enabled: false
                }
            },
            series: {
                animation: {
                    duration: 2500
                }
            }
        },
        tooltip: {
            enabled: true,
            formatter: function() {
                return '<b>' + this.y + '</b> new irrigation wells in <b>' + this.x + '</b>';
            }
        },
        legend: {
            enabled: false
        }
    });
});

$('#new-wells-chart').waypoint(function() {
    var chart = $('#new-wells-chart').highcharts();
    chart.addSeries({
        data: [23, 6, 5, 9, 6, 30, 20, 37, 47, 51, 70, 23, 58, 45, 112, 158, 174, 257, 288, 263, 581, 470, 380, 322, 437, 370, 573, 654, 781, 397, 560, 300, 448, 1095, 2218, 3133, 5017, 3557, 555, 635, 658, 696, 440, 780, 1347, 1615, 1899, 2427, 2151, 1643, 2110, 2455, 2347, 2446, 3650, 4742, 6463, 4518, 1823, 2380, 2312, 2703, 940, 664, 744, 437, 306, 307, 787, 1347, 1240, 1017, 1066, 535, 667, 894, 1325, 1315, 1137, 703, 983, 1162, 1662, 2249, 2363, 1976, 1171, 1083, 1007, 729, 815, 1188, 1733, 2052]
    });
    chart.xAxis[0].setCategories([1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013]);
    $('#pop-up-1956').delay(1000).fadeIn('slow');
    $('#pop-up-1976').delay(1400).fadeIn('slow');
}, {
    offset: '50%'
});

function setOpeningStyles() {
    var wHeight = $(window).height();
    var wWidth = $(window).width();

    $('.featured-media-fixed').height(wHeight);
    $('.gap-full').height(wHeight);
    $('.image-featured-behind-full').height(wHeight);
    $('.opening-scroll').css('left', wWidth / 2);
}

$(document).ready(function() {
    $('img.zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
            on: 'grab',
            magnify: '2'
        });

    setTimeout(function(){
        $('.opening-scroll').fadeIn(1000);
    }, 1500);

    setOpeningStyles();
});

$(window).resize(function() {
    setOpeningStyles();
});