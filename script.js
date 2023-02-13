const button = document.getElementById("random"),
body = document.getElementById("body"),
output = document.getElementById("code-output");

const generateRandomGradient = () => {
	let randomColors = [];

	for (let i = 0; i < 6; i++) {
		let number = Math.round(Math.random() * 255);
		randomColors.push(number);
	}
	
	let rgb1 = `${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}`
	let rgb2 = `${randomColors[3]}, ${randomColors[4]}, ${randomColors[5]}`

	const backgroundGradient =  body.style.background = `linear-gradient(to right, rgb(${rgb1}), rgb(${rgb2}))`;
	output.innerHTML = `Output : ${backgroundGradient}`;
}
button.addEventListener("click", generateRandomGradient);