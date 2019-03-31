/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	let newMinutes = (minutes + interval) % 60;
  	let newHours = (hours + Math.floor((minutes + interval)/60)) % 24;
  	return `${(newHours / 10 > 0) ? newHours : "0" + newHours}:${(newMinutes / 10 > 0) ? newMinutes : "0" + newMinutes}`;
  }
