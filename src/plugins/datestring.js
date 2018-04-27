import moment from 'moment';
const m = moment();

function timeAgo(ms) {
	console.log(ms);
	let time = moment(ms);

	//if < 1 week ago: calendar
	//if > 1 week ago: string

	let diff = moment().diff(time, 'days');
	
	if (diff < 1) {
		//less than 1 day ago
		return time.fromNow();
	} else if (diff < 6) {
		//less than 7 days ago
		return time.calendar();
	} else {
		//more than 7 days ago
		return time.format('LL');
	}
}

export default timeAgo;