// Script to transform a number of minutes
//        into a String  of  hh:mm

(function(minutes) {
    var ret_h_m = "";
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60

    if (hours < 10)
        ret_h_m = ret_h_m + "0";

    ret_h_m = ret_h_m + hours + "h";

    if (minutes < 10)
        ret_h_m = ret_h_m + "0";

    ret_h_m = ret_h_m + minutes;  
    return ret_h_m;
})(input)

// Item definition:
// Number HH_MM "HH:MM [JS(WB_minConvert.js):%s]" 

