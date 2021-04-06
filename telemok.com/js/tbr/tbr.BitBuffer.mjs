/*
* Copyright Telemok.com
* */
/*
example:
//import {tbr} from "https://telemok.github.io/telemok.com/js/tbr/tbr.BitBuffer.mjs"
//import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.BitBuffer.mjs"
let b = new TbrBitBuffer();
b.importHex("AABBCCDDEE");
let adcVoltage = b.shiftUint(12);//get first 12 bits
let isPowerOn = b.shiftBool();
*/


import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/tbr/tbr.convert.mjs"
export {tbr};

/*LSB Bit Buffer*/
export class TbrBitBuffer
{
	constructor(sizeBits = 0)
	{
		tbr.assert.integerLimited(sizeBits, 0, 0xFFFFFFF);//0xFFFFFFF = 2^31/8-1
		this.data = new Uint8Array(sizeBits);
		this.countBitsPushLimit = sizeBits * 8;
		this.clear();
	}
	clear()
	{
		/*Attention! Function clear() work very fast and to not really clear data in array and do not set back array size to default!
		There is no problem, if you will use standart functions without direct memory access.
		*/
		this.countBitsPushed = 0;
		this.countBitsShifted = 0;
	}
	clone()
	{
		let copy = new TbrBitBuffer();
		copy.data = new Uint8Array(this.data.length);
		for(let i = 0; i < this.data.length; i++)
		{
			copy.data[i] = this.data[i];
		}
		copy.countBitsPushed = this.countBitsPushed;
		copy.countBitsShifted = this.countBitsShifted;//Сколько бит с начала прочитано
		copy.countBitsPushLimit = this.countBitsPushLimit;
		return copy;
	}
	getSizeBits()
	{
		return this.countBitsPushed - this.countBitsShifted;
	}
	expandRight(expandBytes = 256)
	{
		let newArr = new Uint8Array(this.data.length + expandBytes);//Увеличиваем сразу на много, чтобы часто это не делать.
		newArr.set(this.data, 0);
		this.data = newArr;
		this.countBitsPushLimit += expandBytes * 8;
	}
	expandLeft(expandBytes = 256)
	{
		let newArr = new Uint8Array(this.data.length + expandBytes);//Увеличиваем сразу на много, чтобы часто это не делать.
		newArr.set(this.data, expandBytes);
		this.data = newArr;
		this.countBitsPushLimit += expandBytes * 8;
		this.countBitsPushed += expandBytes * 8;
		this.countBitsShifted += expandBytes * 8;
	}
	expandRightIfNeed(addBits = 1, expandBytes = 256)
	{
		if(this.countBitsPushed + addBits >= this.countBitsPushLimit)
			this.expandRight(expandBytes);
	}
	expandLeftIfNeed(addBits, expandBytes = 256)
	{
		if(this.countBitsShifted - addBits < 0)
			this.expandLeft(expandBytes);
	}

	unshiftBool(bit)
	{
		//no checks bit typeof and others for speed up
		this.expandLeftIfNeed(1);
		this.countBitsShifted--;
		let addressByte = this.countBitsShifted >> 3;
		let addressBit = this.countBitsShifted & 7;
		let maskBit = 1 << addressBit;
		if(bit & 1)
			this.data[addressByte] |= maskBit;
		else
			this.data[addressByte] &= ~maskBit;
	}
	unshiftUint(countBits, value)
	{
		tbr.assert.integerLimited(countBits, 1, 53, `tbr.BitBuffer.unshiftUint`);
		tbr.assert.integerLimited(value, 0, Number.MAX_SAFE_INTEGER, `tbr.BitBuffer.unshiftUint`);

		/* Attention! Logical operations >>=, |= do not work in JavaScript with 33+ bit integers. */
		for(let i = 0, mask = Math.pow(2, countBits - 1); i < countBits; i++, mask /= 2)
			this.unshiftBool((value & mask) ? 1 : 0);
	}
	pushBool(bit)
	{
		//no checks bit typeof and others for speed up
		this.expandRightIfNeed(1);
		let addressByte = this.countBitsPushed >> 3;
		let addressBit = this.countBitsPushed & 7;
		let maskBit = 1 << addressBit;
		if(bit & 1)
			this.data[addressByte] |= maskBit;
		else
			this.data[addressByte] &= ~maskBit;
		this.countBitsPushed++;
	}
	pushUint(countBitsPushed, value)
	{
		tbr.assert.integerLimited(countBitsPushed, 1, 53, `tbr.BitBuffer.pushUint`);
		tbr.assert.integerLimited(value, 0, Number.MAX_SAFE_INTEGER, `tbr.BitBuffer.pushUint`);

		for(let i = 0; i < countBitsPushed; i++)
		{
			//this.pushBool((value>>i)&1)//not work with > 32 bits
			this.pushBool((value)&1)
			value /= 2;//">>= 1" not work! max 32 bits! "/= 2" work.
		}
	}
	pushUint8Array(uint8Array, errorCode = 'tbr.BitBuffer.pushUint8Array()')
	{
		tbr.assert.uint8Array(uint8Array, errorCode);
		for(let i = 0; i < uint8Array.length; i++)
			this.pushUint(8, uint8Array[i]);
	}
	pushHex(hexString, errorCode = 'tbr.BitBuffer.pushHex()')
	{
		let uint8Array = tbr.convert.hexToUint8Array(hexString, errorCode);
		this.pushUint8Array(uint8Array);
	}
	importHex(hexString)
	{
		this.clear();
		this.pushHex(hexString);
	}

	bitAt(bitIndex)
	{
		tbr.assert.integerLimited(bitIndex, 0, this.getSizeBits() - 1,
			`tbr.BitBuffer.lookBitAt(bitIndex: ${bitIndex}, bitSize: ${this.getSizeBits()})`);
		bitIndex += this.countBitsShifted;
		let myByte = this.data[bitIndex >> 3];
		return (myByte >> (bitIndex & 7)) & 1;
	}
	popBool()
	{
		if(this.countBitsShifted >= this.countBitsPushed)
			throw new Error(`tbr.BitBuffer(data.length=${this.data.length}).popBool() empty array. countBitsShifted: ${this.countBitsShifted}, countBitsPushed: ${this.countBitsPushed}`);
		this.countBitsPushed--;
		let myByte = this.data[this.countBitsPushed >> 3];
		return (myByte >> (this.countBitsPushed & 7)) & 1;
	}
	popUint(bitsEach, countIfArray = 0)
	{
		tbr.assert.integerLimited(bitsEach, 1, 53, `tbr.BitBuffer.shiftUint(bits: "error")`);
		tbr.assert.integerLimited(countIfArray, 0, 0x7FFFFFF8, `tbr.BitBuffer.shiftUint(countIfArray: "error")`);
		let count = countIfArray ? countIfArray : 1;
		if(this.countBitsShifted + bitsEach * count > this.countBitsPushed)
			throw new Error(`tbr.BitBuffer.popUint() no elements. countBitsShifted: ${this.countBitsShifted}, countBitsPushed: ${this.countBitsPushed}`);

		let resultArr = new Array(count);
		for(let arrIndex = 0; arrIndex < count; arrIndex++)
		{
			let tmp = 0;
			/* Attention! Bitwise operations like "<<=" and "|=" work in JavaScript only for first 32 bits of number! */
			for(let i = 0, mask = Math.pow(2, bitsEach - 1); i < bitsEach; i++, mask /= 2)
			{
				if(this.popBool())
					tmp += mask;
			}
			if(!countIfArray)
				return tmp;
			resultArr[arrIndex] = tmp;
		}
		return resultArr;
	}

	shiftBool()
	{
		if(this.countBitsShifted + 1 > this.countBitsPushed)
			throw new Error(`tbr.BitBuffer(data.length=${this.data.length}).shiftBool() empty array. countBitsShifted: ${this.countBitsShifted}, countBitsPushed: ${this.countBitsPushed}`);
		let myByte = this.data[this.countBitsShifted >> 3];
		let myBit = (myByte >> (this.countBitsShifted & 7)) & 1;
		this.countBitsShifted++;
		return myBit;
	}
	shiftUint(bitsEach, countIfArray = 0)
	{
		tbr.assert.integerLimited(bitsEach, 1, 53, `tbr.BitBuffer.shiftUint(bits: "error")`);
		tbr.assert.integerLimited(countIfArray, 0, 0x7FFFFFF8, `tbr.BitBuffer.shiftUint(countIfArray: "error")`);
		let count = countIfArray ? countIfArray : 1;
		if(this.countBitsShifted + bitsEach * count > this.countBitsPushed)
			throw new Error(`tbr.BitBuffer.shiftUint() no elements. countBitsShifted: ${this.countBitsShifted}, countBitsPushed: ${this.countBitsPushed}`);

		let resultArr = new Array(count);
		for(let arrIndex = 0; arrIndex < count; arrIndex++)
		{
			let tmp = 0;
			/* Attention! Bitwise operations like "<<=" and "|=" work in JavaScript only for first 32 bits of number! */
			for(let i = 0, mask = 1; i < bitsEach; i++, mask *= 2)
			{
				if(this.shiftBool())
					tmp += mask;
			}
			if(!countIfArray)
				return tmp;
			resultArr[arrIndex] = tmp;
		}
		return resultArr;
	}
	shiftUint8Array(bitsSumm = this.countBitsPushed - this.countBitsShifted)
	{
		tbr.assert.integerLimited(bitsSumm, 0, 0x7FFFFFF8, `tbr.BitBuffer.shiftUint8Array(bits)`);
		let countBytes = Math.ceil(bitsSumm / 8);
		let data = new Uint8Array(countBytes);
		for(let index = 0; index - bitsSumm; index++)
		{
			let byteIndex = index >> 3;
			let bitIndex = index & 7;
			if(this.shiftBool())
				data[byteIndex] |= (1 << bitIndex);
		}
		return data;
	}
	exportUnit8Array()
	{
		if(!(this.countBitsShifted & 7))/*optimisation for speed up if conditions complete*/
		{
			let a = this.data.slice(this.countBitsShifted / 8, Math.ceil(this.countBitsPushed / 8));
			if(this.countBitsPushed & 7)/* remove unused waste bits in last byte */
				a[a.length - 1] = a[a.length - 1] & (0xFF >> (8 - (this.countBitsPushed & 7)));
			return a;
		}
		let bitCount = this.getSizeBits();
		let result = new Uint8Array(Math.ceil(bitCount / 8));
		for(let i = 0; i < bitCount; i++)
		{
			result[i >> 3] |= (this.bitAt(i) ? (1 << (i & 7)) : 0);
		}
		return result;
	}
	exportHex()
	{
		let uint8Array = this.exportUnit8Array();
		return tbr.convert.uint8ArrayToHex(uint8Array);
	}
	toString()
	{
		return `tbr.BitBuffer = {countBitsShifted: ${this.countBitsShifted}, countBitsPushed: ${this.countBitsPushed}, hex: "${this.exportHex()}"}`;
	}
}

tbr.BitBuffer = TbrBitBuffer;