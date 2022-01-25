/* telemok.com/patterns/pattern4503599627370691/ */
export var telemokPatternsData = new Map([
	[4503599627370691,{json:`{
    "patternType": "singular",
    "patternVersion": 1,
    "patternBits": 7,
    "patternName": "TimeZoneShift",
    "patternDescription": "From -47(-11h45m) to +47(+11h45m) timezone shift.",
    "singularSigned": true,
    "singularEnum": [
        {
            "enumItemRaw": 0,
            "enumItemName": "NOT_SUPPORTED",
            "enumItemDescription": "If set - don't set value. If get - value not supported."
        },
        {
            "enumItemRaw": 1,
            "enumItemName": "UNKNOWN",
            "enumItemDescription": "Unknown timezone"
        },
        {
            "enumItemRaw": 2,
            "enumItemName": "RESET",
            "enumItemDescription": "Description: enum item 5."
        },
        {
            "enumItemRaw": 3,
            "enumItemName": "DISABLE",
            "enumItemDescription": "Description: enum item 7."
        },
        {
            "enumItemRaw": 4,
            "enumItemName": "ENABLE",
            "enumItemDescription": "Description: enum item 6."
        },
        {
            "enumItemRaw": 5,
            "enumItemName": "SPACE",
            "enumItemDescription": "Timezone in openspace."
        },
        {
            "enumItemRaw": 6,
            "enumItemName": "MOON",
            "enumItemDescription": "Timezone on Moon."
        },
        {
            "enumItemRaw": 7,
            "enumItemName": "MARS",
            "enumItemDescription": "Timezone on Mars.."
        }
    ],
    "singularCalc": [
        {
            "calcItemOperation": "DIV",
            "calcItemValue": "4",
            "calcItemDescription": "15 minutes each tick. Result in hours."
        }
    ]
}`}]]);