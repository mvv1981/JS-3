/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var timeInMinutes = (hours * 60) + minutes + interval;
    hours = Math.floor(timeInMinutes / 60) % 24;
    minutes = timeInMinutes % 60;
    var hoursStr;
    var minutesStr;
    if(hours < 10){
       hoursStr = "0" + hours;
    }
    else hoursStr = hours.toString();

    if (minutes < 10 ){
        minutesStr = "0" + minutes;
    }
    else minutesStr = minutes.toString();

    return hoursStr + ":" + minutesStr;
 

    // var d = new Date(1, 1, 1, hours, minutes + interval, 0);
  
    // return d.toTimeString().substring(0, 5);
};
