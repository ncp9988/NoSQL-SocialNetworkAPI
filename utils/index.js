const momment = require('momment');

function timestamp(timeNow){
    var formatDatetime = momment(timeNow).format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
    return formatDatetime
}

module.express = timestamp;