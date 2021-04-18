/*
* Copyright Telemok.com
* */

/*
example:
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.convert.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.convert.mjs"

let a = convert.hexToUint8Array("ABCD");
*/

import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@b48a139/telemok.com/js/tbr/tbr.assert.mjs"
export {tbr};
tbr.convert = {};
export var convert = tbr.convert;

tbr.convert.hexToUint8Array = (hex, errorPrefix = 'tbr.convert.hexToUint8Array') =>
{
	tbr.assert.hex(hex, errorPrefix);
	let a = new Uint8Array(hex.length / 2)
	for(let i = 0; i < a.length; i++)
	{
		let oneByteHex = hex.substr(i * 2, 2)
		a[i] = parseInt(oneByteHex, 16)
	}
	return a;
}
tbr.convert.uint8ArrayToHex = (arr, errorPrefix = 'tbr.convert.uint8ArrayToHex') =>
{
	tbr.assert.uint8Array(arr, errorPrefix);
	let hex = ""
	for(let i = 0; i < arr.length; i++)
		hex += ('0' + arr[i].toString(16)).slice(-2);
	return hex;
}

tbr.convert.stringToUint8Array = (str, errorPrefix = 'tbr.convert.stringToUint8Array') =>
{
	tbr.assert.string(str, errorPrefix);
	let a = new Uint8Array(str.length);
	for(let i = 0; i < str.length; i++)
	{
		let symbol = str.charCodeAt(i);
		if(symbol > 255 || symbol < 0)
			throw new Error(`${errorPrefix} wrong symbol code range: 0 <= (${symbol}) <= 255`);
		a[i] = symbol;
	}
	return a;
}




tbr.convert.uint8ArrayToString = (uint8Array, errorPrefix = 'tbr.convert.uint8ArrayToString') =>
{
	tbr.assert.uint8Array(uint8Array, errorPrefix);
	let str = "";
	for(let i = 0; i < str.length; i++)
		str += String.fromCharCode(uint8Array[i]);
	return str;
}

tbr.convert.stringToHex = (str, errorPrefix = 'tbr.convert.stringToHex') =>
{
	return tbr.convert.uint8ArrayToHex(tbr.convert.stringToUint8Array(str, errorPrefix), errorPrefix);
}
tbr.convert.hexToString = (hex, errorPrefix = 'tbr.convert.hexToString') =>
{
	return tbr.convert.uint8ArrayToString(tbr.convert.hexToUint8Array(str, errorPrefix), errorPrefix);
}

const WINDOWS_1251 = [
	"☺","☻","♥","♦","♣","♠","•","◘","○","◙","♂","♀","♪","♫","☼","►",//0-15
	"◄","↕","‼","¶","§","▬","↨","↑","↓","→","←","∟","↔","▲","▼"," ",//16-31
	" ","!",`"`,"#","$","%","&",`'`,"(",")","*","+",",","-",".","/",//32-47
	"0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?",//48-63
	"@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",//64-79
	"P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_",//80-95
	"`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",//96-111
	"p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","-",//112-127
	"Ђ","Ѓ","‚","ѓ","„","…","†","‡","€","‰","Љ","‹","Њ","Ќ","Ћ","Џ",//128-143
	"ђ","‘","’","“","”","•","–","—","-","™","љ","›","њ","ќ","ћ","џ",//144-159
	"-","Ў","ў","Ј","¤","Ґ","¦","§","Ё","©","Є","«","¬","-","®","Ї",//160-175
	"°","±","І","і","ґ","µ","¶","·","ё","№","є","»","ј","Ѕ","ѕ","ї",//176-191
	"А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П",//192-207
	"Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я",//208-223
	"а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п",//224-239
	"р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];//240-255

tbr.convert.uintToWindows1251 = function(charCode, errorPrefix = 'tbr.convert.uintToWindows1251')
{
	tbr.assert.integerLimited(charCode, 0, 255, errorPrefix);
	return WINDOWS_1251[charCode];
}
tbr.convert.uint8ArrayToWindows1251 = function(uint8Array, errorPrefix = 'tbr.convert.uintToWindows1251')
{
	tbr.assert.uint8Array(uint8Array, errorPrefix);
	let str = "";
	for(let i = 0; i < uint8Array.length; i++)
		str += WINDOWS_1251[uint8Array[i]];
	return str;
}

tbr.convert.hexToWindows1251 = function(hex, errorPrefix = 'tbr.convert.hexToWindows1251')
{
	tbr.assert.hex(hex, errorPrefix);
	return tbr.convert.uint8ArrayToWindows1251(tbr.convert.hexToUint8Array(hex, errorPrefix), errorPrefix);
}




/* Protect from javascript injections. */
tbr.convert.stringToEntity = function(string, errorPrefix = 'tbr.convert.stringToEntity')
{
	tbr.assert.string(string, errorPrefix);
	let result = "";
	for(let i = 0; i < string.length; i++)
		result += `&#${string.charCodeAt(i)};`;
	return result;
}
tbr.convert.entityToString = function(entity, errorPrefix = 'tbr.convert.entityToString')
{
	tbr.assert.string(entity, errorPrefix);
	return entity.replace(/&#(\d+);/g, function(match, charCode) {
		return String.fromCharCode(charCode);
	});
}

