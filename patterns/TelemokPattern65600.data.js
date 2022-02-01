/* telemok.com/patterns/pattern65600/ */
import {telemokPatternsData as data4503599627370690} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370690.data.js';/*TelemokRtcTimestamp*/
export var telemokPatternsData = new Map([
	...data4503599627370690,
	[65600,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 3754,
    "patternName": "TelemokFirmwareInfo",
    "patternDescription": "Default telemok register with firmware information.",
    "structItems": [
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 127,
            "structItemVarName": "firmwareName",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "CurrentFirmwareName",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "firmwareSizeBytes",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Current firmware size in bytes",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 127,
            "structItemVarName": "firmwareHash",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "md5 or other hash of firmware",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 4503599627370690,
            "structItemCount": 1,
            "structItemVarName": "timestampLastUpdateUtcSeconds",
            "structItemPatternType": "singular",
            "structItemPatternName": "TelemokRtcTimestamp",
            "structItemDescription": "Time of last update in seconds after 1970",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 255,
            "structItemVarName": "firmwareUrlDetailsJson",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "URL to .json with information about current update: size, crc, bootloader, software to update, documentation, ",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        }
    ]
}`}]]);