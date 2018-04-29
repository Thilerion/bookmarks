import moment from 'moment';

function timeAgo(ms) {
	let time = moment(ms);

	//if < 1 week ago: calendar
	//if > 1 week ago: string

	let diffMinutes = moment().diff(time, 'minutes');
	let diffHours = moment().diff(time, 'hours');
	let diffDays = moment().diff(time, 'days');

	//let startOfThisYear = moment({ year: year, month: 0, day: 0, hour: 0, minute: 0, second: 0 });
	//console.log(startOfThisYear);
	let isThisYear = !moment().isAfter(time, 'year');
	console.log(isThisYear);

	let retVal;

	if (diffDays < 1) {
		retVal = time.fromNow();
	} else if (diffDays === 1) {
		retVal = "Yesterday";
	} else if (diffDays <= 7) {
		retVal = time.fromNow();
	} else if (isThisYear) {
		retVal = time.format('D MMMM');
	} else {
		retVal = time.format('D MMMM Y');
	}
	return retVal;
}

export default timeAgo;