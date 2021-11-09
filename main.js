function showVerticalMessage(str) {
	str = str[0].toUpperCase() + str.slice(1);

	if (str.length > 10) {
		str = str.slice(0, 10);
	}

	for(let i of str) {
		console.log(i);
	}
} 

showVerticalMessage('марафон');