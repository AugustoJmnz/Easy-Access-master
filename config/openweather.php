<?php

return [

    /**
     * Get a free Open Weather Map API key : https://openweathermap.org/price.
     *
     */

    'api_key' => 'https://api.openweathermap.org/data/2.5/weather?q=playadelcarmen&appid=a7eac7ca8c6657bfaf78688cbb7be0de', // get an API key

    /**
     * Library https://openweathermap.org/current#multi
     *
     */

    'lang' => 'en',

    'date_format' => 'm/d/Y',
    'time_format' => 'h:i A',
    'day_format' => 'l',

    /**
     * Units: available units are c, f, k. (k is default)
     *
     * For temperature in Fahrenheit (f) and wind speed in miles/hour, use units=imperial
     * For temperature in Celsius (c) and wind speed in meter/sec, use units=metric
     */

    'temp_format' => 'c',
];
