/*
* Copyright Telemok.com
* */

/*
example:
<TABLE>
	<TBODY id="tbody">
	</TBODY>
</TABLE>
<SC(del)RIPT type="module">
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.html.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.html.mjs"
class Row extends tbr.Component
{
	constructor(parentTbody, caption)
	{
		super();
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
		super.destroy();
	}
}
new Row(document.getElementById("tbody"), "row1");
new Row(document.getElementById("tbody"), "row2");
new Row(document.getElementById("tbody"), "row3");
</SC(del)RIPT>
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

const symbol_TbrEventListener = Symbol();
export class TbrEventTarget extends EventTarget
{
	constructor(events)
	{
		super();
		this[symbol_TbrEventListener] = new Map();
		this[symbol_TbrEventListener].__AssertName=(eventName)=>
		{
			if(!this[symbol_TbrEventListener].has(eventName))
			{
				let listText = this.toStringEventNames();
				throw new Error(`tbr.EventTarget(type="${eventName}" not supported). Try one of this: [${listText}].`);
			}
		}
	}
	addEventNames(eventName)
	{
		if(typeof eventName === 'object')
		{
			for(let i in eventName)
				this.addEventNames(eventName[i]);
			return;
		}
		tbr.assert.varName(eventName, `tbr.EventTarget.addEventNames`);
		if(this[symbol_TbrEventListener].has(eventName))
			throw `tbr.EventTarget.addEventNames(eventName: "${eventName}" exists)`;
		this[symbol_TbrEventListener].set(eventName, {
			counterListeners: 0,//counter may be used, if you don't want to do hard work for absent listeners
			countDispatchs: 0});
	}
	reDispatchEvent(event)
	{
		let newEvent = new event.constructor(event.type, event);
		this.dispatchEvent(newEvent);
	}
	dispatchEvent(event, isWriteErrorToConsole = false)
	{
		this[symbol_TbrEventListener].__AssertName(event.type);
		this[symbol_TbrEventListener].get(event.type).countDispatchs++;
		//event.__this = this;
		if(isWriteErrorToConsole)
		{
			try{
				super.dispatchEvent(event);
			}catch(e){console.error(`Tbr.EventTarget.dispatchEvent error: ${e}`);}
		}
		else
			super.dispatchEvent(event);
	}
	toStringEventNames()
	{
		return Array.from(this[symbol_TbrEventListener].keys()).join(', ');
	}
	toStringEventInfo()
	{
		let s = '';
		for(let [type, value] of this[symbol_TbrEventListener])
		{
			let evAssoc = this[symbol_TbrEventListener].get(type);
			let evJson = JSON.stringify(evAssoc);
			s += `\n${type}: ${evJson}`;
		}
		return s;
	}
	addEventListener(type, listener, options)
	{
		this[symbol_TbrEventListener].__AssertName(type);
		if(typeof(listener)!=='function' /*&& !(options.dontThrowOnWrongType)*/)
			throw new Error(`tbr.EventTarget.addEventListener(type = "${type}", typeof listener="${typeof listener}"}, required typeof "function".`);
		this[symbol_TbrEventListener].get(type).counterListeners++;
		super.addEventListener(type, listener, options);
	}
	removeEventListener(type, listener, options)
	{
		this[symbol_TbrEventListener].__AssertName(type);
		this[symbol_TbrEventListener].get(type).counterListeners--;//TODO. May if if listener null it remove more listeners
		super.removeEventListener(type, listener, options);
	}
}
tbr.EventTarget = TbrEventTarget;

tbr.addCSS = (cssText, errorName = 'tbr.addCSS')=>{
	tbr.assert.string(cssText, errorName);
	if(cssText.length >= 15)
	{
		let start = cssText.substr(0, 7).toLowerCase();
		let end = cssText.substr(-8).toLowerCase();
		if(start === '<style>' && end === '</style>')
			cssText = cssText.substr(7, cssText.length - 15);
	}
	let elem = document.createElement('style');
	elem.innerHTML = cssText;
	(document.head||document.getElementsByTagName('head')[0]).appendChild(elem);//Обязательно добавлять в конец, чтобы новый стиль перезаписывал старый, а то некоторый йункционал перестанет работать.
	return elem;
}



const symbol_TelemokView_countInstances = Symbol();
const symbol_TelemokView_elemCss = Symbol();
const symbol_TelemokView_textCss = Symbol();
const symbol_TelemokView_destroyed = Symbol();
function TbrComponent_renderCss(Class)
{
	if(typeof Class[symbol_TelemokView_textCss] !== 'string'
		|| Class[symbol_TelemokView_textCss].length === 0
		|| Class[symbol_TelemokView_elemCss]
	)
		return;

	let elem = document.createElement('style');
	elem.innerHTML = Class[symbol_TelemokView_textCss];
	(document.head||document.getElementsByTagName('head')[0]).appendChild(elem);//Обязательно добавлять в конец, чтобы новый стиль перезаписывал старый, а то некоторый йункционал перестанет работать.
	Class[symbol_TelemokView_elemCss] = elem;
}
function TbrComponent_removeCss(Class)
{
	if(!Class[symbol_TelemokView_elemCss])
		return;
	(document.head||document.getElementsByTagName('head')[0]).removeChild(Class[symbol_TelemokView_elemCss]);
	Class[symbol_TelemokView_elemCss] = 0;
}
export class TbrComponent extends tbr.EventTarget
{
	static setupCSS(cssText)
	{
		if(typeof cssText !== 'string')
			throw `tbr.Component.setupCSS("${typeof cssText}" not string)`;
		if(cssText.length >= 15)
		{
			let start = cssText.substr(0, 7).toLowerCase();
			let end = cssText.substr(-8).toLowerCase();
			if(start === '<style>' && end === '</style>')
				cssText = cssText.substr(7, cssText.length - 15);
		}
		this[symbol_TelemokView_textCss] = cssText;
		TbrComponent_removeCss(this);
		if(this[symbol_TelemokView_countInstances] > 0)
			TbrComponent_renderCss(this);
	}

	constructor()
	{
		super();

		if(!Number.isInteger(this.constructor[symbol_TelemokView_countInstances]))
		{
			this.constructor[symbol_TelemokView_countInstances] = 0;
		}
		if(!this.constructor[symbol_TelemokView_countInstances])//if first time or after remove all
			TbrComponent_renderCss(this.constructor);

		this.constructor[symbol_TelemokView_countInstances]++;

	}
	destroy()
	{
		if(this[symbol_TelemokView_destroyed])
			throw new Error(`tbr.Component was destroyed`);
		if(!(--this.constructor[symbol_TelemokView_countInstances]))
			TbrComponent_removeCss(this.constructor);
		this[symbol_TelemokView_destroyed] = true;
		delete(this);//TODO
	}
}


tbr.Component = TbrComponent;
