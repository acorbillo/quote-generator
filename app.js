const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '6dec399d32msh8fd78c7d975e2c7p17ea18jsnb38d3946c3cd',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function generateQuote() {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
	
	//getting the quote and pasting it into the html
	const quote = data.content;
	document.getElementById('quote').textContent = `"${quote}"`;
	
	//getting the author and pasting it into the html
	const author = data.originator.name;
	document.getElementById('author').textContent = `-${author}`;
}

document.getElementById('generate-btn').addEventListener('click', generateQuote);