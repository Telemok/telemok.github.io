/*
* Copyright Telemok.com
* */

/*
example:
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.assert.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/com.telemok@master/js/tbr.assert.mjs"
let assoc = JSON.parse(someJson);
let name = tbr.extract.varName(assoc, "userName", "Parsing server response");
*/
export var tbr = {};

class TbrAssertError extends Error
{
	constructor(name = "TbrAssertError")
	{
		super("tbr.assert.error.uinitialised");

		if(typeof name !== 'string' && typeof name !== 'number')
			throw new Error(`TbrAssertError error prefix type is "${name}", must be 'string' or 'number'!`);

		this.name = name;
	}
	tbrThrow(message)
	{
		if(typeof message === 'number')
			message += "";
		if(typeof message !== 'string')
			throw new Error(`TbrAssertError.tbrThrow wrong type "${message}"`);
		this.message = message;
		throw this;
	}
}

tbr.assert = {};//Assert = ThrowIfNot

tbr.assert.defined = function(definedToAssert, errorName = "")
{
	let error = new TbrAssertError(errorName);

	if(typeof definedToAssert === 'undefined')
		error.tbrThrow(`typeof is "undefined"`);

	return error;
}

tbr.assert.number = function(numberToCheck, errorName = "tbr.assert.number")
{
	let error = tbr.assert.defined(numberToCheck, errorName)

	if(typeof numberToCheck !== 'number')
		error.tbrThrow(`typeof must be "number", but now "${typeof numberToCheck}"`);
	if(Number(numberToCheck) !== numberToCheck)
		error.tbrThrow(`wrong number`);

	return error;
}

//Number.isInteger(1) == true, tbr.assert.integer(1) = true
//Number.isInteger("1") == false, tbr.assert.integer("1") = true
//Number.isInteger(true) == false, tbr.assert.integer(true) = true
tbr.assert.integer = function(integerToCheck, errorName = "tbr.assert.integer")//this is not Number.isInteger
{
	let error = tbr.assert.defined(integerToCheck, errorName);

	if(typeof integerToCheck === 'boolean')
		return error;
	if(typeof(integerToCheck) === 'string' && (integerToCheck - 0) + "" !== integerToCheck/*+""*/)
		error.tbrThrow(`integerToCheck number tring, but now "${integerToCheck}"`);
	else if(integerToCheck % 1 !== 0)
		error.tbrThrow(`integerToCheck % 1 must be 0, but now "${integerToCheck}"`);

	return error;
}

tbr.assert.integerLimited = function(integerLimited, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER, errorName = "tbr.assert.integerLimited")//throwable
{
	let error = tbr.assert.integer(integerLimited, errorName);

	if(integerLimited < minimal)
		error.tbrThrow(`value = ${integerLimited}, must be >= ${minimal}`);
	else if(integerLimited > maximal)
		error.tbrThrow(`value = ${integerLimited}, must be <= ${maximal}`);

	return error;
};

tbr.assert.object = function(objectToAssert, errorName = "tbr.assert.object")
{
	let error = tbr.assert.defined(objectToAssert, errorName);

	if(typeof objectToAssert !== 'object')
		error.tbrThrow(`typeof must be "object", but now "${typeof objectToAssert}"`);

	return error;
}

tbr.assert.array = function(objectToAssert, errorName = "tbr.assert.array")
{
	let error = tbr.assert.object(objectToAssert, errorName);

	if(!(objectToAssert instanceof Array))
		error.tbrThrow(`must be instanceof Array.`);

	return error;
}

tbr.assert.uint8Array = function(arrayToAssert, errorName = "tbr.assert.uint8Array")
{
	let error = tbr.assert.object(arrayToAssert, errorName);

	if(arrayToAssert.constructor !== Uint8Array)
		error.tbrThrow(`typeof must be "Uint8Array", but now "${arrayToAssert.constructor}"`);

	return error;
}

tbr.assert.string = function(stringToAssert, errorName = "tbr.assert.str")
{
	let error = tbr.assert.defined(stringToAssert, errorName);

	if(typeof stringToAssert !== 'string')
		error.tbrThrow(`typeof must be "string", but now "${typeof stringToAssert}"`);

	return error;
}

tbr.assert.function = function(functionToAssert, errorName = "tbr.assert.function")
{
	let error = tbr.assert.defined(functionToAssert, errorName);

	if(typeof functionToAssert !== 'function')
		error.tbrThrow(`typeof must be "function", but now "${typeof functionToAssert}"`);

	return error;
}
const tbrAssertVarNameRegex = new RegExp(/^([a-zA-Z_]+)([a-zA-Z0-9_]*)$/);

tbr.assert.varName = function(varName, errorName = "tbr.assert.varName")
{
	let error = tbr.assert.string(varName, errorName);

	if(!tbrAssertVarNameRegex.test(varName))
		error.tbrThrow(`must be /^([a-zA-Z_]+)([a-zA-Z0-9_]*)$/`);

	return error;
}

tbr.assert.hex = function(hexToCheck, errorName = "tbr.assert.hex")
{
	let error = tbr.assert.string(hexToCheck, errorName);

	if(hexToCheck.length % 2 !== 0)
		error.tbrThrow(`length must be even, but now length = ${hexToCheck.length}`);
	//else if(!hexToCheck.length)
	//	error.tbrThrow(`length must be > 0`);
	else if(!(/^([0-9A-F]*)$/i.test(hexToCheck)))
		error.tbrThrow(`must be (/^([0-9A-F]*)$/i`);

	return error;
}

//It is like C++ enum item names.
tbr.assert.enum = function(enumToAssert, enumArray, errorName = "")
{
	let error = tbr.assert.varName(enumToAssert, errorName);
	tbr.assert.array(enumArray, errorName + " (asserting enum array)");

	if(enumArray.some((value)=>{return value === enumToAssert;}))
		return error;

	error.tbrThrow(`key "${enumToAssert}" not found in enum [${enumArray.join(",")}]`);
}

tbr.assert.elem = function(elemToAssert, errorName = 'tbr.assert.elem')//throwable
{
	let error = tbr.assert.object(elemToAssert, errorName);

	if(document.body.baseURI !== elemToAssert.baseURI)
		error.tbrThrow(`elemToAssert not DOM element`);

	return error;
};

var tbrAssertUrlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
tbr.assert.url = function(urlToAssert, errorName = 'tbr.assert.url')//throwable
{
	let error = tbr.assert.string(urlToAssert, errorName);

	if(!urlToAssert.match(tbrAssertUrlRegex))
		error.tbrThrow("not url");

	return error;
};

tbr.assert.regExp = function(regExpToAssert, errorName = 'tbr.assert.regExp')//throwable
{
	let error = tbr.assert.string(urlToAssert, errorName);

	if(!(regExpToAssert instanceof RegExp))
		error.tbrThrow("not RegExp");

	return error;
};


tbr.validate = {};//Goup functions to validate different values
tbr.validate.object=function(objectToValidate){try{tbr.assert.object(objectToValidate);return true;}catch(e){return false;}};//return true - object OK, false - not object.
tbr.validate.array=function(arrayToValidate){try{tbr.assert.array(arrayToValidate);return true;}catch(e){return false;}};//return true - object OK, false - not object.
tbr.validate.integer=function(integerToValidate){try{tbr.assert.integer(integerToValidate);return true;}catch(e){return false;}};//return true - floor OK, false - not floor.
tbr.validate.integerLimited=function(integerLimited, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER){try{tbr.assert.integerLimited(integerLimited, minimal, maximal);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.string=function(strToValidate){try{tbr.assert.string(strToValidate, 'tbr.validate.str');return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.varName=function(varNameToValidate){try{tbr.assert.varName(varNameToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.hex=function(hexToValidate){try{tbr.assert.hex(hexToValidate);return true;}catch(e){return false;}};//return true - hex OK, false - not hex.
tbr.validate.enum=function(enumToValidate, enumArray){try{tbr.assert.elem(enumToValidate, enumArray);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.elem=function(elemToValidate){try{tbr.assert.elem(elemToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.url=function(urlToValidate){try{tbr.assert.url(urlToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.function=function(functionToValidate){try{tbr.assert.function(functionToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.regExp=function(regExpToValidate){try{tbr.assert.regExp(regExpToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.array=function(arrayToValidate){try{tbr.assert.array(arrayToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.
tbr.validate.uint8Array=function(uint8ArrayToValidate){try{tbr.assert.uint8Array(uint8ArrayToValidate);return true;}catch(e){return false;}};//return true - varName OK, false - not varName.


class TbrExtractError extends TbrAssertError
{
	constructor(extractKey = "", errorPrefix = "tbr.extract")
	{
		super("tbr.extract.error.uinitialised");

		if(typeof errorPrefix !== 'string' && typeof errorPrefix !== 'number')
			throw new Error(`TbrExtractError error prefix type is "${errorPrefix}", must be 'string' or 'number'!`);

		if(typeof extractKey !== 'string' && typeof extractKey !== 'number')
			throw new Error(`TbrExtractError extract key type is "${extractKey}", must be 'string' or 'number'`);

		this.name = `${errorPrefix} (extract key "${extractKey}")`;
	}
}

tbr.extract = {};

var tbrExtractParam = function(parameters, extractKey, errorPrefix = 'tbr.extract.param')//throwable
{
	let error = new TbrExtractError(extractKey, errorPrefix);

	if(typeof parameters !== 'object')
		error.tbrThrow(`parameters must be object, but it "${typeof parameters}".`);

	let result = parameters[extractKey];

	if(typeof result === 'undefined')
		error.tbrThrow(`Key not found!`);

	return [result, error];
};

tbr.extract.param = function(parameters, extractKey, errorPrefix = 'tbr.extract.param')//throwable
{
	let [result] = tbrExtractParam(parameters, extractKey, errorPrefix);

	return result;
}

tbr.extract.string = function(parameters, extractKey, errorPrefix = 'tbr.extract.str')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	if(typeof result === 'number')
		return '' + result;//Example php: die(json_encode(array["a", "1"])); JavaScript console.log(JSON.parse(a));//return ["a", 1];
	if(typeof result !== 'string')
		error.tbrThrow(`Invalid conversion from type '${typeof str}' to 'string'.`);

	return result;
};

tbr.extract.object = function(parameters, extractKey, errorPrefix = 'tbr.extract.object')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	if(typeof result !== 'object')
		error.tbrThrow(`Invalid conversion from type '${typeof result}' to 'object'.`);

	return result;
};

tbr.extract.array = function(parameters, extractKey, errorPrefix = 'tbr.extract.array')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.array(result, error.name);

	return result;
};

tbr.extract.varName = function(parameters, extractKey, errorPrefix = 'tbr.extract.varName')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.varName(result, error.name);

	return result;
};

tbr.extract.number = function(parameters, extractKey, errorPrefix = 'tbr.extract.number')//throwable
{//string, boolean or number
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.number(result, error.name);

	if(typeof result === "boolean")
		result = result ? 1 : 0;
	if(typeof result === "string")
		result = result - 0;

	return result;
};

tbr.extract.integer = function(parameters, extractKey, errorPrefix = 'tbr.extract.integer')//throwable
{//string, boolean or number
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.integer(result, error.name);

	if(typeof result === "boolean")
		result = result ? 1 : 0;
	if(typeof result === "string")
		result = result - 0;

	return Math.floor(result);
};

tbr.extract.integerLimited = function(parameters, extractKey, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER, errorPrefix = 'tbr.extract.integerLimited')//throwable
{//string, boolean or number
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.integerLimited(result, minimal, maximal, error.name);

	return Math.floor(result);
};

tbr.extract.boolean = function(parameters, extractKey, errorPrefix = 'tbr.extract.boolean')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	if(result === "1" || result === 1 || result === true)
		return true;
	if(result === "0" || result === 0 || result === false)
		return false;
	error.tbrThrow(`must be 0, 1, "0", "1", false, true, but now: ${result}".`);
};

tbr.extract.id = function(parameters, extractKey, errorPrefix = 'tbr.extract.id')//throwable
{
	return tbr.extract.integerLimited(parameters, extractKey, 1, Number.MAX_SAFE_INTEGER, errorPrefix);
};

tbr.extract.hex = function(parameters, extractKey, errorPrefix = 'tbr.extract.hex')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.hex(result, error.name);

	return result;
};

tbr.extract.elem = function(parameters, extractKey, errorPrefix = 'tbr.extract.elem')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.elem(result, error.name);

	return result;
};

tbr.extract.enum = function(parameters, extractKey, enumArr, errorPrefix = 'tbr.extract.elem()')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.enum(result, enumArr, error.name);

	return result;
};

tbr.extract.function = function(parameters, extractKey, errorPrefix = 'tbr.extract.function')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.function(result, error.name);

	return result;
};

tbr.extract.regExp=function(parameters, extractKey, errorPrefix = 'tbr.extract.regExp')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.regExp(result, error.name);

	return result;
};

tbr.extract.uint8Array=function(parameters, extractKey, errorPrefix='tbr.extract.uint8Array')//throwable
{
	let [result, error] = tbrExtractParam(parameters, extractKey, errorPrefix);

	tbr.assert.uint8Array(result, error.name);

	return result;
};







var tbrAssert = tbr.assert;
var tbrValidate = tbr.validate;
var tbrExtract = tbr.extract;
export {tbrAssert as assert, tbrValidate as validate, tbrExtract as extract};

