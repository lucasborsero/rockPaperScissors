const buttons = document.querySelectorAll(".buttonRPS");

buttons.forEach((button) => {
	button.addEventListener('click', function () {

		const userHand = this.value;

		const hands = ['Rock', 'Paper', 'Scissors'];
		const comHand = hands[Math.floor(Math.random() * 3)];

		if (userHand != comHand) {
			if (userHand == 'Rock' && comHand == 'Scissors') {
				alert(`YOU WIN! ${userHand} x ${comHand}`);

			} else if (userHand == 'Paper' && comHand == 'Rock') {
				alert(`YOU WIN! ${userHand} x ${comHand}`);

			} else if (userHand == 'Scissors' && comHand == 'Paper') {
				alert(`YOU WIN! ${userHand} x ${comHand}`);

			} else {
				alert(`YOU LOSE :/ ${userHand} x ${comHand}`);
			}
		} else {
			alert(`DRAW! ${userHand} x ${comHand}`);
		}
	});
});