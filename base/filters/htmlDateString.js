const { DateTime } = require('luxon');

module.exports = function(date) {
    return DateTime.fromJSDate(date).toFormat('yyyy-LL-dd');
}