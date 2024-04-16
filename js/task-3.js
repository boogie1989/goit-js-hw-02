const checkForSpamRegex = /(spam|sale)/i;
function checkForSpam(message) {
	stringGuard(message, "message");

	return checkForSpamRegex.test(message);
}

logResults("Get Element Width", [
	checkForSpam("Latest technology news").toString(),
	checkForSpam("JavaScript weekly newsletter").toString(),
	checkForSpam("Get best sale offers now!").toString(),
	checkForSpam("Amazing SalE, only tonight!").toString(),
	checkForSpam("Trust me, this is not a spam message").toString(),
	checkForSpam("Get rid of sPaM emails. Our book in on sale!").toString(),
	checkForSpam("[SPAM] How to earn fast money?").toString(),
]);
