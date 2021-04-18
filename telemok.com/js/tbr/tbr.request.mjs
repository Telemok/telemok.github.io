/*
* Copyright Telemok.com
* */
/* Example:
tbr.fetchJson work only if you send .json and receive only .json.
//get.json.php
$inputJson = file_get_contents('php://input');
$inputStruct = json_decode($inputJson, true, 100, JSON_OBJECT_AS_ARRAY);
if($inputStruct['divisor'] == 0)
	die(json_encode(array('error'=>'example_error', 'error_description'=>'Example php json'), JSON_PRETTY_PRINT));
die(json_encode(array('quotient'=>$inputStruct['dividend']/$inputStruct['$divisor'])));

//test.mjs
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.request.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.request.mjs"
try
{
	let result = await tbr.fetchJson('/get.json', {body: {quotient:20, divisor:10}};
	console.log(result);
}
catch(err){console.error(err);}
*/

import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.assert.mjs"
export {tbr};

tbr.fetchJson = (url, fetchOptions = {})=>
{
	if(typeof fetchOptions !== 'object')
		throw new Error(`tbr.fetchJsonPromise(fetchOpions must be object)`);
	if(typeof fetchOptions.body === 'object')
		fetchOptions.body = JSON.stringify(fetchOptions.body);

	let fetchOptionsDefault = {
		body: "",
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
		credentials: 'omit'
	};
	fetchOptions = {...fetchOptionsDefault, ...fetchOptions};//Concatenate objects
	tbr.assert.str(fetchOptions.body, 'fetchOptions.body must be string');

	let errorStringBegin = `tbr.fetchJson(`;
	let errorStringEnd = `)
		<BR>url = "${url}";
		<BR>sendJson = "${fetchOptions.body.substr(0, 200)}".`;
	//console.log("FETCH",fetchOptions);

	let responseContentLength = -1;
	return new Promise((resolve, reject)=>
	{
		fetch(url, fetchOptions)
			.then((response) =>
			{
				if (!response.ok)
				{
					let s = `${errorStringBegin}response.ok wrong, response.statusText = "${response.statusText}"${errorStringEnd}`;
					reject(new Error(s));
				}
				responseContentLength = response.headers.get('Content-Length');
				return response.text();
			})
			.then((text) =>
			{
				let myJson;
				try
				{
					myJson = JSON.parse(text);
				}
				catch(err)
				{
					let s = `${errorStringBegin}can not JSON.parse(text)
				<BR>err = ${err}
				<BR>response = ${text.substr(0, 3500)}</BR>${errorStringEnd}`;
					reject(new Error(s));
				}
				if(typeof myJson.tbrContentLength !== 'undefined')
					myJson.tbrContentLength = responseContentLength;
				if(typeof myJson.error === 'string')
				{
					let error_description = (typeof myJson.error_description === 'string')
						? `\n\r<BR>error_description: "${myJson.error_description}"`
						: "";
					let s = `${errorStringBegin}can not JSON.parse(text)
				<BR>error_code = "${myJson.error}"${error_description}
				<BR></BR>${errorStringEnd}`;
					reject(new Error(s));
				}
				resolve(myJson);
			})
			.catch((err) =>
			{
				let s = `${errorStringBegin}fetch catch error
				<BR>err = ${err}${errorStringEnd}`;
				reject(new Error(s));
			});
	});
}
