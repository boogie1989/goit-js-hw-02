function getShippingCost(country) {
	stringGuard(country, "country");

	const price = (() => {
		switch (country) {
			case "China":
				return 100;
			case "Chile":
				return 250;
			case "Australia":
				return 170;
			case "Jamaica":
				return 120;
			default:
				return null;
		}
	})();

	if (price === null) {
		return "Sorry, there is no delivery to your country";
	}

	return `Shipping to ${country} will cost ${price} credits`;
}

logResults("Get Shipping Cost", [
	getShippingCost("Australia"),
	getShippingCost("Germany"),
	getShippingCost("China"),
	getShippingCost("Chile"),
	getShippingCost("Jamaica"),
	getShippingCost("Sweden"),
]);
