/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    
      if((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
          
          var timeInMinutes = hours*60 + minutes + interval;
          
          var fullHours = Math.floor(timeInMinutes/60) % 24;
          var fullMinutes = timeInMinutes % 60;
          
          
          if (fullHours < 10) {
              fullHours = '0' + fullHours;
          }
          
          if (fullMinutes < 10) {
              fullMinutes = '0' + fullMinutes;
          }
          
           var time = fullHours + ':' + fullMinutes;
            
          return time;
       } 
    
      else return false;
};
