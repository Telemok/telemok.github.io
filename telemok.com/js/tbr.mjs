/*
* Copyright Telemok.com
* */

/*
example:
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr.mjs"
*/

import {tbr as tbr1} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.assert.mjs"
import {tbr as tbr2} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.BitBuffer.mjs"
import {tbr as tbr3} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.convert.mjs"
import {tbr as tbr4} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@c83b139/telemok.com/js/tbr/tbr.html.mjs"
import {tbr as tbr5} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.request.mjs"
import {tbr as tbr6} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.time.mjs"
var tbr = {...tbr1, ...tbr2, ...tbr3, ...tbr4, ...tbr5, ...tbr6}
export {tbr};


tbr.parseLocationHref = (queryString = location.href) =>
{
	tbr.assert.string(queryString);
	if(queryString.indexOf('?') >= 0)
		queryString = queryString.substr(queryString.indexOf('?')+1);
	let pairs = queryString.split('&');
	let result = {};
	for (let i in pairs)
	{
		let pair = pairs[i].split('=');
		let key = decodeURIComponent(pair[0]);

		let value = typeof pair[1] === 'undefined' ? undefined : decodeURIComponent(pair[1]);
		if(key.substr(-2,2) === '[]')
		{
			key = key.substr(0, key.length - 2);
			if(!Array.isArray(result[key]))
				result[key] = [];
			result[key].push(value);
		}
		else
			result[key] = value;
	}
	return result;
}