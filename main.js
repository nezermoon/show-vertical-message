function showVerticalMessage(str) {
	if (str.length > 10) {
		str = str.slice(0, 10);
	}

	for(let i of str) {
		console.log(i);
	}
} 

showVerticalMessage('Марафон');