function makeTransaction(quantity, pricePerDroid, customerCredits) {
	numberGuard(quantity, "quantity");
	numberGuard(pricePerDroid, "pricePerDroid");

	return (sum = quantity * pricePerDroid) > customerCredits
		? "Insufficient funds!"
		: `You ordered ${quantity} droids worth ${sum} credits!`;
}

logResults("Make Transaction", [
	makeTransaction(5, 3000, 23000),
	makeTransaction(3, 1000, 15000),
	makeTransaction(10, 5000, 8000),
	makeTransaction(8, 2000, 10000),
	makeTransaction(10, 500, 5000),
]);
