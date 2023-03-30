// A power function

const power = function (base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
};

if (power(2, 10) != 1024) process.exit(1);
