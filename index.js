/**
 * Барабаш Максим Сергеевич
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var currentHours = hours,//Текущее время в часах
        currentMinutes = minutes,//Текущее врем в минутах
        i = interval,//Смещение
        objectiveHours = 0,//Целевое значение в часах
        objectiveMinutes = 0,//Целевое значение в минутах
        hoursAfterOffset = 0,//Значение часов после смещения времени на интервал
        minutesAfterOffset = 0,//Значение минут после смещения времени на интервал
        hoursFromMinutes,//Значение целых часов после смещения минут на интервал
        objectiveHoursCorrect = '',//Значение в часах приведенное
        objectiveMinutesCorrect = '',//Значение в минутах приведенное
        calcTime;//Итого
    if (((currentHours >= 0)&& (currentHours < 24))&&((currentMinutes >= 0)&&(currentMinutes < 60))) {
        if (i > 60) {
            hoursAfterOffset = (i - i%60)/60;
            minutesAfterOffset = i%60;
        }
        else {
            minutesAfterOffset = i;
        }
        objectiveMinutes = currentMinutes + minutesAfterOffset;
        if (objectiveMinutes > 59) {
            hoursFromMinutes = Math.floor(objectiveMinutes/60);
            objectiveMinutes = objectiveMinutes%60;
        }
        else {
            hoursFromMinutes = 0;
        }
        if (objectiveMinutes < 10) {
            objectiveMinutesCorrect = '0' + String(objectiveMinutes);
        }
        else objectiveMinutesCorrect = String(objectiveMinutes);
        objectiveHours = currentHours + hoursAfterOffset + hoursFromMinutes;
        if (objectiveHours > 23) {
            objectiveHours = (objectiveHours - 24);
            objectiveHoursCorrect = '0' + String(objectiveHours);
            if (objectiveHours<10) {
                objectiveHoursCorrect = '0' + String(objectiveHours);
            }
        }
        else {
            objectiveHoursCorrect = objectiveHours;
        }
        calcTime = objectiveHoursCorrect + ':' + objectiveMinutesCorrect;
    }
    return calcTime;
};
