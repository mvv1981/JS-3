/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) 
{
    if(hours>=0 && hours<=23 && minutes>=0 && minutes<=59)
    {
        minutes = (hours * 60) + minutes + interval;
        hours = Math.floor(minutes / 60) % 24;
        minutes %= 60;
        
        if(hours < 10){
           hours = "0" + hours;
        }

        if (minutes < 10 ){
            minutes = "0" + minutes;
        }
        
        return hours + ":" + minutes;
    }
};
