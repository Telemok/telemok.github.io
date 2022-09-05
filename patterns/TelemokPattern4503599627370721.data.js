/* telemok.com/patterns/pattern4503599627370721/ */
import {telemokPatternsData as data4503599627370720} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370720.data.js';/*WhyCantMeasure12vFall*/
export var telemokPatternsData = new Map([
	...data4503599627370720,
	[4503599627370721,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 86,
    "patternName": "SelectYouPatternName",
    "patternDescription": "\\tuint16_t measureStartAdc = 0xFFFF;\\n\\tint16_t measureDiffAdc = 0xFFFF;",
    "structItems": [
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370720,
            "structItemCount": 1,
            "structItemVarName": "whyCantMeasure12vFall",
            "structItemPatternType": "enum",
            "structItemPatternName": "WhyCantMeasure12vFall",
            "structItemDescription": "",
            "structItemDefault": "CAN_MEASURE",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "timeoutLastMeasuredStart",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 10,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "measuredAdcDiff",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 10,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "measuredAdcStart",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "VOLT_ADC_MULTIPLIER_1000000x",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        }
    ]
}`}]]);