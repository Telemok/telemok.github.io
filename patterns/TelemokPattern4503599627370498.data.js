/* telemok.com/patterns/pattern4503599627370498/ */
export var telemokPatternsData = new Map([
	[4503599627370498,{json:`{
    \"patternType\": \"singular\",
    \"patternVersion\": 1,
    \"patternBits\": 12,
    \"patternName\": \"Ds18b20_12bits\",
    \"patternDescription\": \"For Dallas Ds18B20 thermometer\",
    \"singularSigned\": true,
    \"singularEnum\": [
        {
            \"enumItemRaw\": 1,
            \"enumItemName\": \"NOT_SUPPORTED\",
            \"enumItemDescription\": \"Always disabled in this firmware\"
        },
        {
            \"enumItemRaw\": 2,
            \"enumItemName\": \"NOT_INITIALISED\",
            \"enumItemDescription\": \"Temporary disabled in this firmware. (this port used for another)\"
        },
        {
            \"enumItemRaw\": 3,
            \"enumItemName\": \"NEVER_CONNECTED\",
            \"enumItemDescription\": \"Driver initialised, but Ds18b20 was never connected to pin.\"
        },
        {
            \"enumItemRaw\": 4,
            \"enumItemName\": \"NOT_CONNECTED\",
            \"enumItemDescription\": \"Description: enum item 0.\"
        },
        {
            \"enumItemRaw\": 5,
            \"enumItemName\": \"BAD_CONTACT\",
            \"enumItemDescription\": \"\"
        },
        {
            \"enumItemRaw\": 6,
            \"enumItemName\": \"CONNECTED_UNKNOWN_1WIRE_DEVICE\",
            \"enumItemDescription\": \"\"
        },
        {
            \"enumItemRaw\": 7,
            \"enumItemName\": \"ERROR_CRC\",
            \"enumItemDescription\": \"\"
        },
        {
            \"enumItemRaw\": 8,
            \"enumItemName\": \"ERROR_85\",
            \"enumItemDescription\": \"When ds18b20 powered down at \"
        }
    ],
    \"singularCalc\": [
        {
            \"calcItemOperation\": \"DIV\",
            \"calcItemValue\": \"16\",
            \"calcItemDescription\": \"Coefficient of DS18B20\"
        }
    ]
}`}]]);