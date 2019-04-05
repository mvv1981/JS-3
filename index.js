/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	let newMinutes = (minutes + interval) % 60;
  	let newHours = (hours + Math.floor((minutes + interval) / 60)) % 24;
  	console.log(newHours)
  	return `${(newHours / 10 >= 1) ? newHours : "0" + newHours}:${(newMinutes / 10 >= 1) ? newMinutes : "0" + newMinutes}`;
  }
