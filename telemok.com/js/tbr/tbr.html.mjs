/*
* Copyright Telemok.com
* */

/*
example:
<TABLE>
	<TBODY id="tbody">
	</TBODY>
</TABLE>
<SCRIPT type="module">
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.html.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.html.mjs"
class Row
{
	constructor(parentTbody, caption)
	{
		this.elems = new tbr.Elements();
		parentTbody.insertAdjacentHTML('beforeend',`
			<TR${this.elems.newId("trRow")}>
			<TD${this.elems.newId("tdCaption")}></TD>
			<TD${this.elems.newId("tdDelete")}>Delete</TD>
			</TR>`);
		this.elems.get("tdCaption").innerHTML = caption;
		this.elems.get("tdDelete").addEventListener('click',()=>{this.destroy();});
	}
	destroy()
	{
		this.elems.get("trRow").parentNode.removeChild(this.elems.get("trRow"));
	}
}
new Row(document.getElementById("tbody"), "row1");
new Row(document.getElementById("tbody"), "row2");
new Row(document.getElementById("tbody"), "row3");
</SCRIPT>
*/


import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.assert.mjs"
export {tbr};

tbr.random = {};
tbr.random.STRING_AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
tbr.random.STRING_az = "abcdefghijklmnopqrstuvwxyz";
tbr.random.STRING_AZaz = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
tbr.random.STRING_09AZaz = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
tbr.random.ARRAY_AZ = Array.from(tbr.random.STRING_AZ);
tbr.random.ARRAY_az = Array.from(tbr.random.STRING_az);
tbr.random.ARRAY_AZaz = Array.from(tbr.random.STRING_AZaz);
tbr.random.ARRAY_09AZaz = Array.from(tbr.random.STRING_09AZaz);

tbr.random.generateStringFromArray = (array, length = 1) =>
{
	tbr.assert.integerLimited(length, 0, 0x7FFFFFFF);
	tbr.assert.array(array);
	let s = "";
	while(length--)
	{
		/*No array symbol check*/
		s += array[Math.floor(Math.random() * array.length)];
	}
	return s;
}
tbr.random.generateStringFromString = (string, length = 1) =>
{
	tbr.assert.integerLimited(length, 0, 0x7FFFFFFF);
	tbr.assert.string(string);
	tbr.assert.integerLimited(string.length, 1, 0xFFFFFF);
	let array = Array.from(string);
	return tbr.random.generateStringFromArray(array, length);
}

tbr.random.generateString_AZ = (length = 1) =>{return tbr.random.generateStringFromArray(tbr.random.ARRAY_AZ, length);}
tbr.random.generateString_az = (length = 1) =>{return tbr.random.generateStringFromArray(tbr.random.ARRAY_az, length);}
tbr.random.generateString_AZaz = (length = 1) =>{return tbr.random.generateStringFromArray(tbr.random.ARRAY_AZaz, length);}
tbr.random.generateString_09AZaz = (length = 1) =>{return tbr.random.generateStringFromArray(tbr.random.ARRAY_09AZaz, length);}
tbr.random.generateVarName = (length = 1) =>
{
	tbr.assert.integerLimited(length, 1, 65536);
	let s = tbr.random.generateString_AZaz(1);
	s += tbr.random.generateString_09AZaz(length - 1);
	return s;
}
var uniqueVarName_AffixCounter = 0;
tbr.random.generateUniqueVarName = (length = 1) =>
{
	tbr.assert.integerLimited(length, 1, 65536);
	let s = tbr.random.generateVarName(length);
	return s + "_" + uniqueVarName_AffixCounter++;
}

export class TbrElements extends Map
{
	constructor()
	{
		super();
	}
	set(humanUnderstandableKey, id = humanUnderstandableKey + "_" + tbr.random.generateUniqueVarName())
	{
		tbr.assert.varName(humanUnderstandableKey, "tbr.Elements(check humanUnderstandableKey)");
		tbr.assert.varName(id, `tbr.Elements(check id="${id}")`);
		super.set(humanUnderstandableKey, id);
		return id;
	}
	get(key, errorPrefix = "tbr.elems.get")
	{
		if(!this.has(key))
			throw new Error(`${errorPrefix}(no item with key = "${key}"`);
		let id = super.get(key);
		let elem = document.getElementById(id);
		tbr.assert.elem(elem, `${errorPrefix}(elem with key='${key}')`);
		return elem;
	}
	newId(key)
	{
		let id = this.set(key);
		return ` id="${id}" `;
	}
}

tbr.Elements = TbrElements;