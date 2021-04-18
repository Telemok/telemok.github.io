/*
* Copyright Telemok.com
* */

/*
example:
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.time.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.time.mjs"
let timestamp = new tbr.time.Date();
timestamp.setCurrent();
console.log(timestamp.getUtcSql());// "2021-04-05 6:07:08"
*/
import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@3c9965e/telemok.com/js/tbr/tbr.assert.mjs"
export {tbr};
tbr.time = {};
export var time = tbr.time;

class TbrDate extends Date
{
	getUtcSql()
	{
		return this.toISOString().slice(0, 19).replace('T', ' ');
	}
	getUtcUnixtime()//seconds float
	{
		return this.getTime() / 1000;
	}
	setUtcUnixtime(timestampSeconds)//seconds float
	{
		this.setTime(timestampSeconds * 1000);
	}
	getLocalSql()//return "2021-03-20 15:03:30"; compatible with SQL timestamp
	{
		let yyyymmdd = this.getFullYear()+"-"+("0"+(this.getMonth()+1)).substr(-2)+"-"+("0"+(this.getDate())).substr(-2);
		let hhmmss = this.getHours()+"-"+("0"+(this.getMinutes()+1)).substr(-2)+"-"+("0"+(this.getSeconds())).substr(-2);
		return `${yyyymmdd} ${hhmmss}`;
	}
	constructor(parameters)
	{
		super(parameters);
	}
	clear()
	{
		this.setTime(0);
	}
	isClear()
	{
		return !this.getTime();
	}
	clone()
	{
		return new Date(this.getTime());
	}
	setCurrent()
	{
		this.setTime(Date.now());
	}
	setCurrentPlusSeconds(offsetSeconds = 0)
	{
		this.setTime(Date.now() + offsetSeconds*1000);
	}
	setCallback()
	{
		//TODO
	}
	getOldMsec()
	{
		return Date.now() - this.getTime();
	}
	getOldSeconds()
	{
		return this.getOldMsec() / 1000;
	}
	toStringInputDatetimeLocal(withSeconds = false)//<input type="datetime-local">
	{
		let s = `${this.getFullYear()}-${("0"+(this.getMonth()+1)).substr(-2)}-${("0"+(this.getDate()-0)).substr(-2)}T${("0"+this.getHours()).substr(-2)}:${("0"+this.getMinutes()).substr(-2)}`;
		if(withSeconds)
			s += `:${("0"+this.getSeconds()).substr(-2)}`;
		return s;
	}
	toString()
	{
		return this.toStringInputDatetimeLocal();
	}
}
tbr.time.Date = TbrDate;