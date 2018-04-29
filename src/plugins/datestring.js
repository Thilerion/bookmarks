import moment from 'moment';

function timeAgo(ms) {
	let time = moment(ms);

	let diffDays = moment().diff(time, 'days');
	let isThisYear = !moment().isAfter(time, 'year');

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