function formatMessage(message, maxLength) {
	stringGuard(message, "message");
	numberGuard(maxLength, "maxLength");
	return message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
}

logResults("Format Message", [
	formatMessage("Curabitur ligula sapien", 16),
	formatMessage("Curabitur ligula sapien", 23),
	formatMessage("Vestibulum facilisis purus nec", 20),
	formatMessage("Vestibulum facilisis purus nec", 30),
	formatMessage("Nunc sed turpis a felis in nunc fringilla", 15),
	formatMessage("Nunc sed turpis a felis in nunc fringilla", 41),
]);
