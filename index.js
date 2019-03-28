/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  minutes += hours * 60 + interval;

  let hrs = Math.floor(minutes / 60) % 24;
  hrs = (hrs < 10 ? '0' : '') + hrs;

  let mins = minutes % 60;
  mins = (mins < 10 ? '0' : '') + mins;

  return `${hrs}:${mins}`;
};
