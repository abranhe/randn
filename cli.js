#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rand = require('./');

const cli = meow(`
	Examples
		$ randn
		315764787997033782716506419531

		$ randn --number 5
		86773

		$ randn -n 23
		46379458263283978267360

		Options
		 -n, --number  Generate a number with certain length
`, {
	flags: {
		number: {
			type: 'boolean',
			alias: 'n'
		}
	}
});

console.log(cli.flags.number ? rand(cli.input[0]) : rand());
