/* telemok.com/patterns/pattern4503599627370672/ */
export var telemokPatternsData = new Map([
	[4503599627370672,{json:`{
    "patternType": "singular",
    "patternVersion": 1,
    "patternBits": 12,
    "patternName": "Ds18b20_12bits",
    "patternDescription": "For Dallas Ds18B20 thermometer",
    "singularSigned": true,
    "singularEnum": [
        {
            "enumItemRaw": 2050,
            "enumItemName": "NOT_SUPPORTED",
            "enumItemDescription": "Always disabled in this firmware"
        },
        {
            "enumItemRaw": 2051,
            "enumItemName": "NOT_INITIALISED",
            "enumItemDescription": "Temporary disabled in this firmware. (this port used for another)"
        },
        {
            "enumItemRaw": 2052,
            "enumItemName": "NEVER_CONNECTED",
            "enumItemDescription": "Driver initialised, but Ds18b20 was never connected to pin."
        },
        {
            "enumItemRaw": 2053,
            "enumItemName": "DISCONNECTED",
            "enumItemDescription": "Description: enum item 0."
        },
        {
            "enumItemRaw": 2054,
            "enumItemName": "BAD_CONTACT",
            "enumItemDescription": "When raw == 2047."
        },
        {
            "enumItemRaw": 2055,
            "enumItemName": "CONNECTED_UNKNOWN_1WIRE_DEVICE",
            "enumItemDescription": "Other 1-wire device on line."
        },
        {
            "enumItemRaw": 2056,
            "enumItemName": "ERROR_85",
            "enumItemDescription": "Raw == 1360, last raw not near 1360."
        },
        {
            "enumItemRaw": 2057,
            "enumItemName": "ERROR_RESERVED_FF",
            "enumItemDescription": "Reserved byte #5 must be 0xFF"
        },
        {
            "enumItemRaw": 2058,
            "enumItemName": "ERROR_RESERVED_10",
            "enumItemDescription": "Reserved byte #7 must be 0x10"
        },
        {
            "enumItemRaw": 2059,
            "enumItemName": "ERROR_CRC",
            "enumItemDescription": "CRC8 error"
        }
    ],
    "singularCalc": [
        {
            "calcItemOperation": "DIV",
            "calcItemValue": "16",
            "calcItemDescription": "Coefficient of DS18B20"
        }
    ]
}`}]]);