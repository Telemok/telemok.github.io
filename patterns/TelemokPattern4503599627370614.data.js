/* telemok.com/patterns/pattern4503599627370614/ */
import {telemokPatternsData as data4503599627370597} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370597.data.js';/*BlStatus*/
import {telemokPatternsData as data4503599627370613} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370613.data.js';/*BootloaderRunFrom*/
export var telemokPatternsData = new Map([
	...data4503599627370597, 
	...data4503599627370613,
	[4503599627370614,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 20,
    "patternName": "CurrentState",
    "patternDescription": "Current state of bootloader.",
    "structItems": [
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370597,
            "structItemCount": 1,
            "structItemVarName": "blStatus",
            "structItemPatternType": "enum",
            "structItemPatternName": "BlStatus",
            "structItemDescription": "\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0439 \\u0441\\u0442\\u0430\\u0442\\u0443\\u0441 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0447\\u0438\\u043a\\u0430.",
            "structItemDefault": "NOT_READY"
        },
        {
            "structItemPatternBits": 16,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "countBlocksApplied",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Count applied blocks with good checksumm. 0 - nothing. 1 - block with index 0 applied.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 4503599627370613,
            "structItemCount": 1,
            "structItemVarName": "bootloaderRunFrom",
            "structItemPatternType": "enum",
            "structItemPatternName": "BootloaderRunFrom",
            "structItemDescription": "Which a reason to start bootloader? Used for View to ask, it is manual update or autoupdate.",
            "structItemDefault": "POWER_ON"
        }
    ]
}`}]]);