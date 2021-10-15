/* telemok.com/patterns/pattern4503599627370606/ */
export var telemokPatternsData = new Map([
	[4503599627370606,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 256,
    "patternName": "BlPacket",
    "patternDescription": "Block data of firmware",
    "structItems": [
        {
            "structItemPatternBits": 16,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "index",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "index of 29 bytes block",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 28,
            "structItemVarName": "data",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "29 bytes with offset = index * 29",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 2,
            "structItemVarName": "crc16",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "crc16 \\u044d\\u0442\\u043e\\u0433\\u043e \\u043f\\u0430\\u043a\\u0435\\u0442\\u0430",
            "structItemDefault": 0
        }
    ]
}`}]]);