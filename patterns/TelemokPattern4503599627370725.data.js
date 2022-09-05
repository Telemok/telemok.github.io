/* telemok.com/patterns/pattern4503599627370725/ */
import {telemokPatternsData as data4503599627370724} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370724.data.js';/*WhyCantMeasure12vFall*/
export var telemokPatternsData = new Map([
	...data4503599627370724,
	[4503599627370725,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 87,
    "patternName": "BatteryReliability",
    "patternDescription": "",
    "structItems": [
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370724,
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