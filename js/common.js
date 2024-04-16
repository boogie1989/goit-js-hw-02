function numberGuard(value, parameterName) {
	if (typeof value !== "number") {
		throw Error(`${parameterName} must be a number!`);
	}
}

function stringGuard(value, parameterName) {
	if (typeof value !== "string") {
		throw Error(`${parameterName} must be a string!`);
	}
}

const pxStringRegex = /^[0-9]+(?:\.\d+)?px$/;
function pxStringGuard(value, parameterName) {
	if (!pxStringRegex.test(value)) {
		throw Error(`${parameterName} must be in Npx format!`);
	}
}

function logResults(taskName, messages) {
	const maxWidth = 100;
	const headline = `${taskName}`;
	const border = "-".repeat(maxWidth);

	const paddedHeadline = headline.padStart((maxWidth + headline.length) / 2, "-").padEnd(maxWidth, "-");

	console.log(paddedHeadline);
	for (const message of messages) {
		const centeredMessage = message.padStart((maxWidth + message.length) / 2).padEnd(maxWidth);
		console.log(centeredMessage);
	}
	console.log(border);
}
