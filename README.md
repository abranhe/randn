<p align="center">
	<a href="https://www.npmjs.com/package/randn"><img src="https://cdn.abraham.gq/projects/randn/randn.png" width="50%"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/randn"><b>randn</b></a>
	: 🔢 Random Number Generator
</p>

<p align="left">
	<a href="https://travis-ci.org/abranhe/randn"><img src="https://img.shields.io/travis/abranhe/randn.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/randn/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/randn.svg" /></a>
</p>

# Why randn?

- Clean and focused
- [CLI](#cli) included
- Actively maintained
- Fast and reliable
- Easy to get numbers

# Install

```
$ npm install randn
```

# Usage

```js
const randn = require('randn');

console.log(randn());
//=> 315764787997033782716506419531

console.log(randn(5));
//=> 86773
```

# API

**rand()**

> Return a number with default value of 30

Return Type: `string`

**rand(number)**

> Return an string with custom number

Return Type: `string`

# CLI

```
Examples
	$ randn
	315764787997033782716506419531

	$ randn --number 5
	86773

	$ randn -n 23
	46379458263283978267360

	Options
	 -n, --number  Generate a number with certain length
```

# Related

-  [all-words](https://github.com/abranhe/all-words): Generate all available words (up to four letters) super fast.
-  [r4nd0mstr1ng](https://github.com/abranhe/r4nd0mstr1ng): 🌀 Random string generator.

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/randn/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
