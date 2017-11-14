// create unique ids for the posts and comments
export function randomValue(){
  return Math.random().toString(36).substr(2, 34) + Math.random().toString(36).substr(2, 34)
}

// formatting the timestamp
export function timeStamp(timestamp) {
	const date = new Date(timestamp);
	return date.toLocalString()
}