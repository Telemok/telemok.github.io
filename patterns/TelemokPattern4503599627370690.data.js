/* telemok.com/patterns/pattern4503599627370690/ */
export var telemokPatternsData = new Map([
	[4503599627370690,{json:`{
    "patternType": "singular",
    "patternVersion": 1,
    "patternBits": 49,
    "patternName": "TelemokRtcTimestamp",
    "patternDescription": "RTC - real time clock of Microcontroller based on 32768 hz quartz.",
    "singularSigned": false,
    "singularEnum": [
        {
            "enumItemRaw": 562949953421310,
            "enumItemName": "NOT_SUPPORTED",
            "enumItemDescription": "RTC is absent and can not be used."
        },
        {
            "enumItemRaw": 562949953421309,
            "enumItemName": "DISABLED",
            "enumItemDescription": "RTC is disabled, but can be enabled."
        },
        {
            "enumItemRaw": 562949953421308,
            "enumItemName": "ENABLED",
            "enumItemDescription": "Order to enable RTC without change."
        },
        {
            "enumItemRaw": 562949953421308,
            "enumItemName": "UNKNOWN",
            "enumItemDescription": "Unknown value"
        }
    ],
    "singularCalc": [
        {
            "calcItemOperation": "DIV",
            "calcItemValue": "32768",
            "calcItemDescription": "Result is seconds. Divide for quartz 32768hz."
        }
    ]
}`}]]);