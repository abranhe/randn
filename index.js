'use strict';
module.exports = num => {
	let rand = '';
	let nums = '0123456789';

	for (var i = 0; i < (num || 30); i++) {
		rand += nums.charAt(Math.floor(Math.random() * nums.length));
	}
	return rand;
};

// @TODO generate a number between (min and max)
