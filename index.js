/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let allMinutes = hours * 60 + minutes + interval;    
    while (allMinutes >= 1440) {
        allMinutes = allMinutes - 1440;
      }    
    let newHours = Math.floor( allMinutes / 60);
    let newMinutes = allMinutes - newHours * 60;
    let stringHours = String(newHours);
    let stringMinutes = String(newMinutes);
    if (stringHours.length < 2){
        stringHours = "0" + stringHours;
    }
    if (stringMinutes.length < 2){
        stringMinutes = "0" + stringMinutes;
    }
    return stringHours + ":" + stringMinutes;
};
