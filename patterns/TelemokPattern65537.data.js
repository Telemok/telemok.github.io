/* telemok.com/patterns/pattern65537/ */
import {telemokPatternsData as data4503599627370690} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370690.data.js';/*TelemokRtcTimestamp*/
import {telemokPatternsData as data4503599627370691} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370691.data.js';/*TimeZoneShift*/
export var telemokPatternsData = new Map([
	...data4503599627370690, 
	...data4503599627370691,
	[65537,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 105,
    "patternName": "TelemokRtcInfo",
    "patternDescription": "",
    "structItems": [
        {
            "structItemPatternBits": 49,
            "structItemPatternId": 4503599627370690,
            "structItemCount": 1,
            "structItemVarName": "uptime",
            "structItemPatternType": "singular",
            "structItemPatternName": "TelemokRtcTimestamp",
            "structItemDescription": "Count 32768 hz ticks from MCU start. .get() in seconds.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 49,
            "structItemPatternId": 4503599627370690,
            "structItemCount": 1,
            "structItemVarName": "utcRtcTimestamp",
            "structItemPatternType": "singular",
            "structItemPatternName": "TelemokRtcTimestamp",
            "structItemDescription": "Count 32768 hz ticks from 1970.0.0 00:00:00 .get() in seconds.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 4503599627370691,
            "structItemCount": 1,
            "structItemVarName": "timeZoneShift",
            "structItemPatternType": "singular",
            "structItemPatternName": "TimeZoneShift",
            "structItemDescription": "MCU timezone shift in hours.",
            "structItemDefault": 0
        }
    ]
}`}]]);