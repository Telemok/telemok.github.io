/* telemok.com/patterns/pattern65700/ */
export var telemokPatternsData = new Map([
	[65700,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 2706,
    "patternName": "TelemokHardwareInfo",
    "patternDescription": "Default telemok register with hardware information. Hardware information will not be change on firmware update.",
    "structItems": [
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 127,
            "structItemVarName": "hardwareName",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Text hardware name. Only first 128 symbols allowed. Don't need \\\\0 at end. 0 length is disabled.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "hardwareRevision",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Unsigned revision version. Or 4 byte numbers.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 255,
            "structItemVarName": "hardwareUrlDetailsJson",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "URL to .json with information about current hardware control plate: compatible software, documentation, how to repair, how to buy, vendor contacts. 0 length is disabled.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        }
    ]
}`}]]);