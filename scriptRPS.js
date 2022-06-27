const buttons = document.querySelectorAll(".buttonRPS");

buttons.forEach((button) => {
	button.addEventListener('click', function () {

		const userHand = this.value;

		const hands = ['Rock', 'Paper', 'Scissors'];
		const comHand = hands[Math.floor(Math.random() * 3)];

		if (userHand != comHand) {
			if (userHand == 'Rock' && comHand == 'Scissors') {
				alert(`YOU WIN!`);

			} else if (userHand == 'Paper' && comHand == 'Rock') {
				alert(`YOU WIN!`);

			} else if (userHand == 'Scissors' && comHand == 'Paper') {
				alert(`YOU WIN!`);

			} else {
				alert(`YOU LOSE :/`);
			}
		} else {
			alert(`DRAW!`);
		}
	});
});